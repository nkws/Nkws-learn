-- ============================================================================
-- Character Writing (Slice 2, Skritter-style): MOE-syllabus lesson structure
-- and 4-level grading. Additive/relaxing only — no data dropped.
-- ============================================================================

-- MOE 识写字 are single characters with no sentence, and pinyin is derived at
-- render time, so both become optional.
alter table public.writing_cards alter column sentence drop not null;
alter table public.writing_cards alter column pinyin   drop not null;

-- Syllabus position, so sessions can "study by list" in MOE lesson order.
alter table public.writing_cards add column if not exists level      text;  -- e.g. 'P1'
alter table public.writing_cards add column if not exists lesson_seq int;   -- lesson order within the level (1..n)
alter table public.writing_cards add column if not exists word_seq   int;   -- character order within the lesson

create index if not exists writing_cards_child_lessonseq_idx
  on public.writing_cards (child_id, lesson_seq, word_seq);

-- Grades widen from 3 to Skritter's 4 (again/hard/good/easy).
alter table public.writing_reviews drop constraint if exists writing_reviews_grade_check;
alter table public.writing_reviews add constraint writing_reviews_grade_check
  check (grade in ('again','hard','good','easy'));
