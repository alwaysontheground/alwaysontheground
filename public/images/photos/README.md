# Photo assets

Static photo files for the Photography collections. Files placed here are
served as-is — there is no build-time resizing, compression, or watermarking.

## Resolution & format

Resize before uploading. Drop oversized files in here at your peril — they
will be served full-size to every visitor.

- **Max long edge:** 1600 px
- **Format:** JPEG
- **Quality:** 75–85%
- **Color profile:** sRGB
- **Filename:** `{genre}-{slug}.jpg` (e.g. `portrait-amina.jpg`). Lowercase,
  hyphens, no spaces.

If automatic resizing becomes a build step later, this rule goes away — until
then, the lightbox shows whatever resolution lives here.

## Adding a new photo

1. Resize the master to the rules above and save the file in this directory.
2. Create a new entry in `src/content/photos/{slug}.md` with frontmatter:

   ```yaml
   ---
   title: "Short caption"
   slug: "amina-rotterdam"
   genre: portrait      # portrait | documentary | street | commissioned
   image: "/images/photos/portrait-amina.jpg"
   aspect: "4/5"        # used for grid layout — match the actual image
   publishedAt: 2025-01-12
   location: "Rotterdam, NL"
   caption: "Optional longer caption / alt text"
   ---
   ```

3. The photo appears automatically on `/photography/{genre-plural}` and is
   eligible for the mixed grid on `/photography`.

## Anti-download

The lightbox and tile components disable right-click and drag on `<img
data-photo-asset>` elements. This is a casual deterrent, not real protection.
Anyone determined can still inspect the page or grab the URL from the network
tab. If watermarking is needed later, that is its own phase.
