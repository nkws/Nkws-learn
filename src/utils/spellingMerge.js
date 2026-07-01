// Pure, dependency-free merge logic for spelling/听写 list sync. Kept separate
// from the hook (React) and cloudSync (Supabase) so it can be unit-tested in
// plain Node and reasoned about in isolation.

// Convert a Supabase spelling_lists row to the local storage shape.
export function cloudRowToLocal(row) {
  return {
    id: row.id,
    title: row.title,
    lang: row.lang,
    childId: row.child_id || null,
    words: row.words || [],
    createdAt: new Date(row.created_at).getTime(),
    updatedAt: new Date(row.updated_at).getTime(),
  };
}

// Merge cloud rows into a local lists array. Last-write-wins per list, keyed on
// updatedAt: a cloud row only overwrites local when it is strictly newer, so a
// just-made local edit (whose cloud write may still be in flight) is never
// clobbered by a stale cloud copy. Soft-deleted cloud rows are removed locally.
//
// Returns:
//   lists   — the merged array
//   changed — whether `lists` differs from the input (skip a save/render if not)
//   toPush  — local-only lists absent from the cloud (created offline / pre-login),
//             which the caller should upsert to the cloud
export function mergeSpellingLists(localLists, cloudRows) {
  const localById = Object.fromEntries(localLists.map((l) => [l.id, l]));
  const cloudById = Object.fromEntries(cloudRows.map((r) => [r.id, r]));

  let merged = [...localLists];
  let changed = false;

  for (const row of cloudRows) {
    if (row.deleted) {
      if (localById[row.id]) {
        merged = merged.filter((l) => l.id !== row.id);
        changed = true;
      }
      continue;
    }
    const local = localById[row.id];
    const cloudUpdated = new Date(row.updated_at).getTime();
    if (!local) {
      merged = [...merged, cloudRowToLocal(row)];
      changed = true;
    } else if (cloudUpdated > local.updatedAt) {
      merged = merged.map((l) => (l.id === row.id ? cloudRowToLocal(row) : l));
      changed = true;
    }
  }

  const toPush = localLists.filter((l) => !cloudById[l.id]);

  return { lists: merged, changed, toPush };
}
