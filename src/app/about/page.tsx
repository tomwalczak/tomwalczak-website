import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tom Walczak",
  description:
    "AI Engineer | Head of AI at Alex Epstein. Building truth-seeking AI that stress-tests arguments and surfaces counter-arguments. Based in London.",
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
              I build AI systems that stress-test arguments and surface
              counter-arguments. Based in London.
            </p>
            <p className="text-muted-foreground mb-4">
              I&apos;m especially interested in the intersection of epistemology
              and AI — how we can build systems that don&apos;t just give
              answers, but show their work and surface the strongest
              counter-arguments.
            </p>
            <p className="text-muted-foreground">
              Currently: Head of AI at Alex Epstein.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <h2>Background</h2>
        <p>
          I&apos;ve been building AI systems for the past few years — knowledge
          bases, research pipelines, and tools that help people think through
          complex questions. Before that, I built and sold a startup
          (EventIgnite), which gave me an appreciation for building things
          people actually want to use.
        </p>
        <p>
          The thread through my work is verification and stress-testing. Whether
          it&apos;s building AI that cites its sources, debate systems that
          surface counter-arguments, or research tools that show their work —
          the goal is always to give people confidence that claims have been
          properly examined.
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
