import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  href?: string;
  cta?: string;
};

// Product cards — show-and-tell. Named per Tom's client-naming decisions.
// Chevron / the enterprise AlexAI Pro engagement is never referenced.
export const products: Product[] = [
  {
    slug: "alexai-pro",
    name: "AlexAI Pro",
    blurb:
      "The world's most powerful energy AI. It combines frontier-model reasoning with Alex Epstein's method of thinking to generate talking points, op-eds, policy proposals, lobbying plans, and news analysis from an energy-freedom perspective.",
    href: "https://pro.alexepstein.ai",
    cta: "Learn more",
  },
  {
    slug: "alexai",
    name: "AlexAI",
    blurb:
      "A free public AI that answers questions on energy, climate, and the environment, based on Alex Epstein's work: his books, articles, speeches, and podcasts.",
    href: "https://alexepstein.ai",
    cta: "Try AlexAI",
  },
  {
    slug: "energenius",
    name: "Energenius",
    blurb:
      "An AI news engine for energy and climate. It finds, ranks, and de-duplicates the day's news, tracks federal energy legislation, and writes summaries and commentary.",
  },
  {
    slug: "ameshai",
    name: "AmeshAI",
    blurb:
      "An AI built on the work of Dr. Amesh Adalja, a Johns Hopkins physician and biosecurity expert. It puts his analysis of infectious disease, vaccines, and pandemic preparedness on demand, grounded in his own papers, articles, and talks.",
    href: "https://amesh.ai",
    cta: "Try AmeshAI",
  },
  {
    slug: "ncea-ai",
    name: "NCEA AI",
    blurb:
      "A research agent built into the website of the National Center for Energy Analytics. It lets anyone search the institute's energy research and get answers grounded in their work.",
  },
  {
    slug: "blumbergai",
    name: "BlumbergAI",
    blurb:
      "An AI deal-screening agent for Blumberg Capital, an early-stage VC firm. It reads incoming pitch decks in any format, scores them against the firm's investment criteria, and syncs to their CRM.",
    href: "/blog/what-ive-learned-from-building-an-ai-agent-for-a-vc-firm",
    cta: "Read the case study",
  },
];

export const advisory = {
  title: "Advising teams building advanced AI",
  blurb:
    "I advise in-house engineering teams building their own AI, whether you're starting from a prototype or pushing an existing system to production. I help with evaluations that measure the outcomes you care about, model choice, retrieval quality, grounding the system in your own knowledge, and making it reliable. If your team is building something serious and wants experienced help, get in touch.",
};

function ProductCard({ p, showImage = true }: { p: Product; showImage?: boolean }) {
  return (
    <div className="rounded-lg border border-border p-6">
      {showImage && <ProductImage slug={p.slug} name={p.name} />}
      <h3 className="mb-2 text-xl font-semibold">{p.name}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{p.blurb}</p>
      {p.href && p.cta && (
        <Button variant="outline" size="sm" asChild>
          {p.href.startsWith("http") ? (
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              {p.cta} <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          ) : (
            <Link href={p.href}>
              {p.cta} <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          )}
        </Button>
      )}
    </div>
  );
}

export function AdvisoryCard() {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 p-6">
      <h3 className="mb-2 text-xl font-semibold">{advisory.title}</h3>
      <p className="text-sm text-muted-foreground">{advisory.blurb}</p>
    </div>
  );
}

export function SelectedWork({
  showAdvisory = true,
}: {
  showAdvisory?: boolean;
}) {
  return (
    <section className="mb-16">
      <h2 className="mb-2 text-2xl font-bold">Selected work</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Production AI systems I&apos;ve built for clients across VC, media,
        education, finance, and energy.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>

      {showAdvisory && (
        <div className="mt-6">
          <AdvisoryCard />
        </div>
      )}
    </section>
  );
}
