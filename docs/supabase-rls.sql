-- ============================================================================
-- Row Level Security (RLS) for Koko's Classroom Supabase tables
-- ============================================================================
-- WHY: Supabase flagged "Table publicly accessible — Row Level Security is not
-- enabled". The app ships the anon key in the browser, so with RLS off, anyone
-- with the project URL + anon key can read, edit, or delete EVERY row in these
-- tables (all families' children, progress, and quiz history).
--
-- FIX: enable RLS and add owner-scoped policies so an authenticated parent can
-- only touch their own data. Auth is Google OAuth, so auth.uid() = the parent's
-- user id. children.user_id is the owner; child_progress and quiz_attempts are
-- owned transitively via child_id.
--
-- SAFE FOR THE BACKEND: the serverless API functions (stripe-webhook.js,
-- create-portal-session.js) use the SERVICE ROLE key, which BYPASSES RLS, so
-- subscription writes are unaffected.
--
-- HOW TO RUN: Supabase Dashboard → SQL Editor → paste this → Run.
-- Idempotent: safe to run more than once.
-- ============================================================================

-- 1) children: a parent owns their own children rows.
alter table public.children enable row level security;
drop policy if exists "Owner can manage their children" on public.children;
create policy "Owner can manage their children"
  on public.children
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- 2) child_progress: rows for a child the signed-in parent owns.
-- Reward-video list (parent-curated YouTube links, played on topic completion)
-- rides this per-child row. Run this once to enable cross-device sync of it;
-- until then the list stays local to each device and nothing else breaks:
--   alter table public.child_progress
--     add column if not exists reward_pool jsonb not null default '[]'::jsonb;
alter table public.child_progress enable row level security;
drop policy if exists "Owner can manage their child progress" on public.child_progress;
create policy "Owner can manage their child progress"
  on public.child_progress
  for all
  using (exists (
    select 1 from public.children c
    where c.id = child_progress.child_id and c.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.children c
    where c.id = child_progress.child_id and c.user_id = auth.uid()
  ));

-- 3) quiz_attempts: rows for a child the signed-in parent owns.
alter table public.quiz_attempts enable row level security;
drop policy if exists "Owner can manage their quiz attempts" on public.quiz_attempts;
create policy "Owner can manage their quiz attempts"
  on public.quiz_attempts
  for all
  using (exists (
    select 1 from public.children c
    where c.id = quiz_attempts.child_id and c.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.children c
    where c.id = quiz_attempts.child_id and c.user_id = auth.uid()
  ));

-- 4) user_subscriptions: the owner may READ their own status. Only the service
--    role (Stripe webhook / portal functions) writes here, and it bypasses RLS,
--    so there is deliberately NO client insert/update/delete policy.
alter table public.user_subscriptions enable row level security;
drop policy if exists "Owner can read their subscription" on public.user_subscriptions;
create policy "Owner can read their subscription"
  on public.user_subscriptions
  for select
  using (user_id = auth.uid());

-- ============================================================================
-- 5) spelling_lists: parent-created word lists for English spelling / Chinese 听写.
--    Lists are owned by the user (parent) and optionally scoped to a child.
--    `deleted` is a soft-delete flag so cloud deletions propagate to other devices
--    on their next sync without needing a separate tombstone table.
--
-- HOW TO CREATE THE TABLE (run once in SQL Editor):
--   create table if not exists public.spelling_lists (
--     id          text         primary key,
--     user_id     uuid         not null references auth.users on delete cascade,
--     child_id    uuid         references public.children(id) on delete set null,
--     title       text         not null,
--     lang        text         not null default 'en',
--     kind        text,        -- 'spelling' | 'tingxie' | 'pinyin' (null = derive from lang)
--     words       jsonb        not null default '[]',
--     sort_order  bigint,      -- parent's manual arrangement (null = by created_at)
--     created_at  timestamptz  not null default now(),
--     updated_at  timestamptz  not null default now(),
--     deleted     boolean      not null default false
--   );
--
-- If the table already exists from an earlier version, add the columns:
--   alter table public.spelling_lists add column if not exists kind text;
--   alter table public.spelling_lists add column if not exists sort_order bigint;
alter table public.spelling_lists enable row level security;
drop policy if exists "Owner can manage their spelling lists" on public.spelling_lists;
create policy "Owner can manage their spelling lists"
  on public.spelling_lists
  for all
  using  (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Enable live cross-device sync: add the table to the realtime publication so
-- the app's Supabase realtime subscription receives insert/update/delete
-- events. Without this the app still syncs, but only on tab focus / reopen
-- (the focus-refetch fallback), not live. Idempotent-guarded.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'spelling_lists'
  ) then
    alter publication supabase_realtime add table public.spelling_lists;
  end if;
end $$;

-- VERIFY (optional): every app table should report rowsecurity = true.
--   select tablename, rowsecurity
--   from pg_tables
--   where schemaname = 'public'
--     and tablename in ('children','child_progress','quiz_attempts','user_subscriptions','spelling_lists');
-- If the Supabase advisor lists any OTHER public table, enable RLS on it too —
-- a table with RLS off and no policies is open to the anon key.
-- ============================================================================
