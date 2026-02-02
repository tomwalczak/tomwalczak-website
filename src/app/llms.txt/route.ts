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

> AI Engineer based in London. Building verifiable, truth-seeking AI agents that stress-test arguments, surface counter-arguments, and turn confusion into clarity.

I'm Tom Walczak, Head of AI at Alex Epstein. I build AI systems that verify their reasoning on complex, controversial topics. My work focuses on making AI useful for intellectual work—not just generating text, but actually helping humans think better.

## About

- [About Tom Walczak](https://tomwalczak.com/about): Background, what I think about, and how to connect

## Projects

- [Open Debate](https://github.com/tomwalczak/open-debate): Open-source AI debate arena where language models argue opposing viewpoints, get judged, and learn from their losses. Recursive self-improvement for AI debaters.
- [Argument Analyzer](https://github.com/tomwalczak/realtime-argument-analyzer): Real-time argument analysis with dual AI agents—Steelman surfaces the strongest version, Counter shows objections.
- [AlexAI](https://alexepstein.ai): Conversational AI embodying energy expert Alex Epstein's thinking. 900+ indexed sound bites from Fossil Future and The Moral Case for Fossil Fuels.

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
