-- ============================================================================
-- Character Writing (Slice 1): spaced-repetition handwriting drill tables.
-- ============================================================================
-- Two new tables, owned per learner (child), with RLS mirroring child_progress
-- and quiz_attempts: a parent can only touch rows for a child they own
-- (children.user_id = auth.uid()). Additive only — no existing table is changed.
--
-- HOW TO RUN: Supabase Dashboard → SQL Editor → paste this → Run. Idempotent.
-- ============================================================================

-- A spaced-repetition card: one target word for one learner. The card carries
-- its own current schedule (interval_days + due_at) so "today's queue" is a
-- single indexed read; every attempt is also logged in writing_reviews.
create table if not exists public.writing_cards (
  id            uuid        primary key default gen_random_uuid(),
  child_id      uuid        not null references public.children(id) on delete cascade,
  word          text        not null,          -- e.g. 香, 庆祝
  pinyin        text        not null,          -- e.g. xiāng, qìngzhù
  sentence      text        not null,          -- full sentence; the word is blanked at render time
  lesson_tag    text,                          -- e.g. Berries-P1-L37
  interval_days int         not null default 0,
  due_at        timestamptz,                   -- null = brand-new card (never reviewed)
  created_at    timestamptz not null default now()
);
create index if not exists writing_cards_child_due_idx
  on public.writing_cards (child_id, due_at);
-- Lets the seed upsert by (child, word, lesson) so re-running doesn't duplicate.
create unique index if not exists writing_cards_child_word_lesson_uq
  on public.writing_cards (child_id, word, lesson_tag);

-- Append-only log of each attempt (history + first-attempt accuracy).
create table if not exists public.writing_reviews (
  id             uuid        primary key default gen_random_uuid(),
  card_id        uuid        not null references public.writing_cards(id) on delete cascade,
  child_id       uuid        not null references public.children(id) on delete cascade,
  grade          text        not null check (grade in ('again','good','easy')),
  total_mistakes int         not null default 0,
  hint_used      boolean     not null default false,
  first_attempt  boolean     not null default false,
  interval_days  int         not null,
  due_at         timestamptz not null,
  reviewed_at    timestamptz not null default now()
);
create index if not exists writing_reviews_card_idx
  on public.writing_reviews (card_id, reviewed_at);

-- RLS: owner-scoped through children (same shape as child_progress/quiz_attempts).
alter table public.writing_cards enable row level security;
drop policy if exists "Owner can manage their writing cards" on public.writing_cards;
create policy "Owner can manage their writing cards"
  on public.writing_cards
  for all
  using (exists (
    select 1 from public.children c
    where c.id = writing_cards.child_id and c.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.children c
    where c.id = writing_cards.child_id and c.user_id = auth.uid()
  ));

alter table public.writing_reviews enable row level security;
drop policy if exists "Owner can manage their writing reviews" on public.writing_reviews;
create policy "Owner can manage their writing reviews"
  on public.writing_reviews
  for all
  using (exists (
    select 1 from public.children c
    where c.id = writing_reviews.child_id and c.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.children c
    where c.id = writing_reviews.child_id and c.user_id = auth.uid()
  ));
