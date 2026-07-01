import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { SelectedWork } from "@/components/selected-work";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tom Walczak",
  url: "https://tomwalczak.com",
  image: "https://tomwalczak.com/profile.jpg",
  jobTitle: "AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "TW Consulting",
    description:
      "Builds advanced AI systems for clients across VC, media, education, finance, and energy.",
    url: "https://tomwalczak.com",
  },
  description:
    "Tom Walczak is an AI engineer who builds advanced AI systems for clients across VC, media, education, finance, and energy. He runs external audits of AI and machine-learning systems, and is Head of AI to Alex Epstein.",
  sameAs: [
    "https://github.com/tomwalczak",
    "https://x.com/tom_walchak",
    "https://linkedin.com/in/tom-walczak",
    "https://tomwalczak.substack.com",
  ],
  knowsAbout: [
    "Production-ready AI systems",
    "AI agents",
    "Retrieval-augmented generation",
    "AI evaluation and verification",
    "AI and machine-learning system audits",
    "LLM application engineering",
    "Energy and climate policy",
    "Truth-seeking AI",
  ],
};

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
    title: "The AI Debate Is Full of Fake Agreement",
    description:
      'Is "PhD-level AI" even a thing? Is "sycophantic" AI dangerous? And are the AI labs close to achieving "recursive self-improvement"?',
    date: "Jun 3, 2026",
    slug: "the-ai-debate-is-full-of-fake-agreement",
  },
  {
    title: "Can AI Teach Itself Superhuman Persuasion? Introducing Open Debate",
    description:
      'I asked AI agents to debate "therapy culture." Five rounds later, both sides were calling for a violent communist revolution.',
    date: "Feb 3, 2026",
    slug: "can-ai-teach-itself-superhuman-persuasion",
  },
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
];

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0">
            <Image
              src="/profile.jpg"
              alt="Tom Walczak"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="mb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              I&apos;m an AI engineer. I build advanced AI systems for clients
              across VC, media, education, finance, and energy.
            </p>

            <ul className="mb-5 space-y-1.5 list-disc pl-5 text-left text-sm text-muted-foreground">
              <li>
                I&apos;m Head of AI to Alex Epstein, and I run my own studio, TW
                Consulting.
              </li>
              <li>
                I advise engineering teams and help them make their AIs
                production-ready, and I run audits of AI and machine-learning
                systems.
              </li>
              <li>I have a degree in Computer Science.</li>
              <li>I previously founded and sold a startup, EventIgnite.</li>
            </ul>

            <p className="mb-3 text-sm text-muted-foreground">
              <Link href="/work" className="underline hover:text-foreground">
                See my work and get in touch →
              </Link>
            </p>

            <p className="mb-4 text-sm text-muted-foreground hidden sm:block">
              Follow me on{" "}
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

            <div className="flex items-center justify-center sm:justify-start gap-3">
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
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <SelectedWork />

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
        <p>Head of AI to Alex Epstein · TW Consulting</p>
      </section>
      </div>
    </>
  );
}
