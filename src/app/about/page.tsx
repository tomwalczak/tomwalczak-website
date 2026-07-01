import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tom Walczak",
  description:
    "Tom Walczak is an AI engineer who builds advanced AI systems for clients across VC, media, education, finance, and energy, and is Head of AI to Alex Epstein.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">About</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-8 not-prose">
          <Image
            src="/tom_with_ee.jpg"
            alt="Tom Walczak"
            width={320}
            height={400}
            className="rounded-lg shrink-0 object-cover"
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              I&apos;m an AI engineer. I build advanced AI systems for clients
              across VC, media, education, finance, and energy.
            </p>
            <p className="text-muted-foreground mb-4">
              I&apos;m especially interested in the intersection of epistemology
              and AI — how we can build systems that don&apos;t just give
              answers, but show their work and surface the strongest
              counter-arguments.
            </p>
            <p className="text-muted-foreground">
              Currently: Head of AI to Alex Epstein, and I run TW Consulting.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <h2>What I build</h2>
        <p>
          I build advanced AI systems that work in production, and I help teams
          take existing AIs that &ldquo;almost work&rdquo; across the line. I
          take full ownership of every project, and I have a small team of
          engineers who support larger AI systems in production.
        </p>
        <p>
          I&apos;m Head of AI to Alex Epstein, where I build AlexAI, a public AI
          energy and climate expert grounded in Alex&apos;s own work; AlexAI
          Pro, a more powerful, private version for internal users and policy
          makers; and a few other internal products for Alex and his team.
        </p>
        <p>
          I also run external audits of AI and machine-learning systems,
          reviewing architecture, data pipelines, and evaluation
          instrumentation.
        </p>
        <p>
          If you have an AI system you want built or audited,{" "}
          <Link href="/work">see my work</Link> and get in touch to see if
          we&apos;re the right fit.
        </p>

        <Separator className="my-8" />

        <h2>Background</h2>
        <p>
          I have a degree in computer science and have been building AI systems
          since 2020 — knowledge bases, research pipelines, agents, and the
          evaluation tooling that makes them reliable. Before that, I founded
          and sold a software and media startup, EventIgnite, which gave me an
          appreciation for building things people actually want to use.
        </p>

        <Separator className="my-8" />

        <h2>What I Think About</h2>

        <h3>Truth-Seeking AI</h3>
        <p>
          Verification is what makes the 10x-100x productivity gains in software
          engineering possible — agents can keep running, check their own work,
          and iterate. I&apos;m building the equivalent for intellectual work:
          AI that stress-tests arguments, surfaces counter-arguments, and
          provides assurance that claims have been examined.
        </p>

        <h3>AI Capabilities and Limits</h3>
        <p>
          AI optimizes within a given context. It finds better tactics, sharper
          evidence, more effective phrasing. But it doesn&apos;t step back and
          ask: &quot;Am I arguing the wrong thing entirely?&quot; Humans break
          out of context. AI executes within it. Understanding this distinction
          is key to using AI well.
        </p>

        <h3>The 100x Public Intellectual</h3>
        <p>
          AI can now do most of what used to require a research team. The
          bottleneck shifts to clarity — knowing what questions to ask, what
          arguments to stress-test, what&apos;s worth pursuing. The people (and
          AIs) who provide that clarity will have outsized impact.
        </p>

        <Separator className="my-8" />

        <h2>Connect</h2>
        <p>
          I&apos;m always interested in talking to people working on similar
          problems. Reach out on{" "}
          <a
            href="https://tomwalczak.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>
          ,{" "}
          <a
            href="https://x.com/tom_walchak"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          , or{" "}
          <a
            href="https://linkedin.com/in/tom-walczak"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </article>
    </div>
  );
}
