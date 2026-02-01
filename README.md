# tomwalczak.com

My personal website, built with Next.js and Tailwind CSS.

## About

I'm Tom Walczak, an AI Engineer based in London. This website hosts my personal blog and information about my work building verifiable, truth-seeking AI agents.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Font**: JetBrains Mono
- **Deployment**: Vercel
- **Content**: Markdown with gray-matter

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── ui/           # shadcn/ui components
│   ├── content/
│   │   └── posts/        # Blog posts in Markdown
│   └── lib/              # Utilities
└── package.json
```

## Commands

| Command | Action |
| :-------------- | :----------------------------------------- |
| `bun install` | Install dependencies |
| `bun run dev` | Start local dev server at localhost:3000 |
| `bun run build` | Build for production |
| `bun run start` | Preview production build locally |

## Features

- Dark mode by default with theme toggle
- Reading progress bar on blog posts
- RSS feed at `/rss.xml`
- Sitemap generation
- SEO optimized with Open Graph tags
- Responsive design

## License

Content and code are © Tom Walczak. All rights reserved.
