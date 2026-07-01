import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  
  // Format posts for llms.txt
  const mainPosts = posts.slice(0, 5); // Top 5 most recent
  const optionalPosts = posts.slice(5); // Rest are optional
  
  const mainPostsSection = mainPosts
    .map(post => `- [${post.title}](https://tomwalczak.com/blog/${post.slug}): ${post.description}`)
    .join("\n");
  
  const optionalPostsSection = optionalPosts.length > 0
    ? optionalPosts
        .map(post => `- [${post.title}](https://tomwalczak.com/blog/${post.slug}): ${post.description}`)
        .join("\n")
    : "";

  const content = `# Tom Walczak

> AI Engineer. I build advanced AI systems for clients across VC, media, education, finance, and energy, and run external audits of AI and machine-learning systems. Head of AI to Alex Epstein and founder of TW Consulting.

I'm Tom Walczak, an AI engineer. I build advanced AI systems that work in production. I help teams take existing AIs that "almost work" across the line, and I've built production AI systems for clients across VC, media, education, finance, and energy. I take full ownership of every project, with a small team of engineers who support larger AI systems in production. I also run external audits of AI and machine-learning systems. I'm Head of AI to Alex Epstein and founder of TW Consulting. I have a degree in computer science and have been building AI systems since 2020. Previously, I founded and sold a software and media startup, EventIgnite.

## About

- [About Tom Walczak](https://tomwalczak.com/about): Background, what I think about, and how to connect

## Projects

- [AlexAI](https://alexepstein.ai): A free public AI that answers energy, climate, and environment questions, based on Alex Epstein's work.
- [AlexAI Pro](https://pro.alexepstein.ai): The world's most powerful energy AI. Combines frontier-model reasoning with Alex Epstein's method of thinking to generate talking points, op-eds, policy proposals, lobbying plans, and news analysis.
- [Energenius](https://tomwalczak.com/work): An AI news engine for energy and climate that finds, ranks, and de-duplicates the news and tracks federal energy legislation.
- [AmeshAI](https://amesh.ai): An AI built on the work of Dr. Amesh Adalja, a Johns Hopkins physician and biosecurity expert.
- [NCEA AI](https://tomwalczak.com/work): A research agent built into the National Center for Energy Analytics website.
- [BlumbergAI](https://tomwalczak.com/blog/what-ive-learned-from-building-an-ai-agent-for-a-vc-firm): An AI deal-screening agent built for Blumberg Capital, an early-stage VC firm.
- [Open Debate](https://github.com/tomwalczak/open-debate): Open-source AI debate arena where models argue opposing viewpoints, get judged, and improve between rounds.

## Writing

${mainPostsSection}
${optionalPostsSection ? `
## Optional

${optionalPostsSection}
` : ""}
## Contact

- Website: https://tomwalczak.com
- GitHub: https://github.com/tomwalczak
- Twitter/X: https://x.com/tom_walchak
- LinkedIn: https://linkedin.com/in/tom-walczak
- Substack: https://tomwalczak.substack.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
