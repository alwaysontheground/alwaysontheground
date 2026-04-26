# Content authoring conventions

Notes for adding/editing entries in `work/` and `journal/`.

## Work entries

### Schema reminder

Every `.md` in `work/` needs the full frontmatter from `src/content.config.ts`:
`title, slug, year, types, client (optional), excerpt, hero, featured (default false),
dateline (optional), publishedAt`.

### Convention: first type is primary

The `types` array is **ordered**. The first entry is treated as the project's
primary discipline and drives:

- **Chip text** on home cards and the featured photo
  → `${cap(types[0])} · ${client}` (or just the type if no client).
- **Featured CTA label** on the home page:
  - `podcast` → "Listen to the series"
  - `documentary` → "Watch the film"
  - `photography` → "View the series"
  - `reportage` → "Read the story"
  - `commissioned` → "View the project"

Example: Harreveld is a documentary AND a podcast AND commissioned, but the
podcast is the primary deliverable, so `types: ["podcast", "documentary",
"commissioned"]`. Reorder if priorities change — no code edit needed.

### Featured

Only one entry should have `featured: true` at a time. The home page picks the
first one it finds (sorted by `publishedAt` desc); others are silently
demoted to the Selected work grid.

### Hero images

See `work/IMAGES.txt` for which heroes are real vs. picsum dummies and how to
swap them.

## Journal entries

Schema: `title, slug, excerpt, publishedAt, hero (optional)`. No first-type
convention — journal posts have no `types` field. Collection is currently
empty; the first post will silence the harmless `[glob-loader] No files found`
warning at build time.
