# Post images

Images referenced by blog posts in `src/content/posts/`. Posts reference them as
`![alt](/images/posts/<file>)`.

All placeholder (`placeholder.svg`) references have been replaced with the real
images uploaded to Substack (June 2026). To add images for a new post:

1. Open the published Substack post.
2. Download each image from its `substack-post-media.s3.amazonaws.com/public/images/...`
   URL (keeps the original format/resolution; the `substackcdn.com/image/fetch/...`
   wrapper may convert to webp).
3. Save here with a descriptive, post-prefixed name (e.g. `fake-agreement-waymo-safety.png`).
4. Reference it from the post markdown.

`placeholder.svg` is kept as a fallback for drafts that don't yet have real images.
