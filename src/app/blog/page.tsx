import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Writing about AI, truth-seeking, and building verifiable AI agents.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Posts</h1>
      <p className="text-muted-foreground mb-12">
        Writing about AI, truth-seeking, and building verifiable AI agents.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="border-b border-border pb-8 last:border-0">
              <time className="text-sm text-muted-foreground">{formatDate(post.date)}</time>
              <h2 className="text-xl font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
