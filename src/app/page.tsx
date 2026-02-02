import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Custom Substack icon (Lucide doesn't have one)
const Substack = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tomwalczak", icon: Github },
  { name: "Substack", href: "https://tomwalczak.substack.com", icon: Substack },
  { name: "Twitter", href: "https://x.com/tom_walchak", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tom-walczak",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:tom@tomwalczak.com", icon: Mail },
];

const featuredPosts = [
  {
    title: "Demis Hassabis Is Wrong About Computability",
    description:
      'The word "computable" is doing a ridiculous amount of hidden work in AI debates',
    date: "Jan 9, 2026",
    slug: "demis-hassabis-is-wrong-about-computability",
  },
  {
    title: "What 200+ AI Debates Taught Me About Truth-Finding",
    description: 'How to find truth in the age of "podcastistan"',
    date: "Jun 26, 2025",
    slug: "what-200-ai-debates-taught-me-about-truth-finding",
  },
  {
    title: "AI is Like Waking Up with $100 Million in the Bank",
    description: "So you have a superpower, now what?",
    date: "Jun 16, 2025",
    slug: "ai-is-like-waking-up-with-100-million",
  },
];

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex items-center gap-8 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
            <Image
              src="/profile.jpg"
              alt="Tom Walczak"
              width={160}
              height={160}
              className="w-full h-full object-cover scale-110"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Hi, I&apos;m Tom
            </h1>
            <p className="text-xl text-muted-foreground">
              Building verifiable, truth-seeking AI agents
            </p>
          </div>
        </div>

        <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground mb-4">
          I&apos;m building AI agents that verify their reasoning on complex,
          controversial questions — surfacing counter-arguments, stress-testing
          logic, and turning confusion into clarity. This will 100x intellectual
          work and make real-time fact-checking possible.
        </blockquote>

        <p className="text-sm text-muted-foreground mb-4">
          I&apos;m based in London, UK.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          Follow along on{" "}
          <a
            href="https://tomwalczak.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Substack
          </a>
          ,{" "}
          <a
            href="https://x.com/tom_walchak"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            X
          </a>
          , or{" "}
          <a
            href="https://linkedin.com/in/tom-walczak"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            LinkedIn
          </a>
          .
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            );
          })}
        </div>
      </section>

      {/* What I'm Building Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What I&apos;m Building</h2>

        <div className="space-y-8">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">Open Debate</h3>
              <Badge variant="secondary">Open Source</Badge>
            </div>
            <p className="text-muted-foreground mb-4">
              An AI debate system for stress-testing arguments. AI can get very
              good at presenting, challenging, and evaluating reasoning. Bad
              arguments are built on weak foundations. When pressed, they fall
              apart.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Recursive self-improvement for AI debaters</li>
              <li>• Vanilla baseline configuration for surfacing model bias</li>
              <li>• Human-in-the-loop coaching mode</li>
              <li>• CLI-first, integrates with Claude Code for analysis</li>
            </ul>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://open-debate.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coming soon <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">AlexAI</h3>
            <p className="text-muted-foreground mb-4">
              Conversational AI embodying energy expert Alex Epstein&apos;s
              thinking. A production AI system that captures and communicates
              ideas from Fossil Future and The Moral Case for Fossil Fuels.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• 900+ indexed sound bites, timeless principles</li>
              <li>
                • AlexAI Pro — Research-oriented tool with stricter guardrails
              </li>
              <li>• Commentary Engine — AI-powered news analysis</li>
            </ul>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://alexepstein.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try AlexAI <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Blumberg AI</h3>
            <p className="text-muted-foreground mb-4">
              Built an AI agent for Blumberg Capital that screens incoming pitch
              decks, scores deals against investment criteria, and syncs with
              the CRM — making the VC process faster and more founder-friendly.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog/what-ive-learned-from-building-an-ai-agent-for-a-vc-firm">
                Read the case study <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Writing</h2>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-b border-border pb-6 last:border-0">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {post.description}
                </p>
                <time className="text-xs text-muted-foreground">
                  {post.date}
                </time>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Current Role */}
      <section className="text-center text-muted-foreground">
        <p>Head of AI at Alex Epstein | AI Consultant</p>
      </section>
    </div>
  );
}
