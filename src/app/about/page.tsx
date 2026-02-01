import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8 not-prose">
          <Image
            src="/route66.jpeg"
            alt="Tom Walczak"
            width={320}
            height={320}
            className="rounded-lg shrink-0 object-cover"
            style={{ aspectRatio: "1/1" }}
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              I&apos;m building verifiable, truth-seeking AI agents — systems that stress-test 
              their own outputs on complex, controversial topics.
            </p>
            <p className="text-muted-foreground mb-4">
              I&apos;m an AI Engineer based in London. My background is in computer science, 
              startups, and product management. I&apos;m especially interested in the intersection 
              of epistemology and AI.
            </p>
            <p className="text-muted-foreground">
              Currently: Head of AI at Alex Epstein.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <h2>What I&apos;m Working On</h2>

        <h3>Open Debate</h3>
        <p>
          An open-source AI debate system for stress-testing arguments. The core insight is that AI 
          can get very good at presenting, challenging, and evaluating reasoning — not by being an 
          automatic truth-finder, but by being expert at surfacing the strongest version of each position.
        </p>
        <p>
          Bad arguments are built on weak foundations. When pressed by a capable opponent, they fall apart. 
          The system features recursive self-improvement for AI debaters, human-in-the-loop coaching mode, 
          and CLI-first integration with Claude Code for analysis.
        </p>

        <h3>AlexAI</h3>
        <p>
          A conversational AI system embodying Alex Epstein&apos;s thinking on energy and climate. 
          Not a chatbot wrapper — a full knowledge base with 900+ indexed sound bites, timeless 
          principles, and expert consensus critiques.
        </p>
        <p>
          The goal is to make the complexities of energy and climate sciences more accessible and 
          understandable, using the latest advances in AI. We&apos;ve built AlexAI to answer questions 
          as Alex would, with perfect recall from a vast knowledge base of primary data sources and 
          high-quality explanations.
        </p>

        <h3>Blumberg AI</h3>
        <p>
          AI consulting for Blumberg Capital portfolio companies. Building custom AI solutions for 
          venture-backed startups in the Blumberg Capital network.
        </p>

        <Separator className="my-8" />

        <h2>What I Think About</h2>

        <h3>Truth-Seeking AI</h3>
        <p>
          Current AI tools give plausible-sounding answers, but don&apos;t provide confidence those 
          answers have been stress-tested. Open Debate is designed to change that — show what was 
          looked at, what was reviewed, and that the review was thorough.
        </p>

        <h3>Verification for Arguments</h3>
        <p>
          What we call &quot;verifiable&quot; for code and math, we could call &quot;truth-seeking&quot; 
          for complex controversial topics. This is the next frontier after formal verification.
        </p>

        <h3>The 100x Public Intellectual</h3>
        <p>
          AI doesn&apos;t replace human judgment. It amplifies it. The humans who learn to work with 
          AI will have dramatically more impact than those who don&apos;t.
        </p>

        <Separator className="my-8" />

        <h2>Connect</h2>
        <p>
          If you&apos;d like to discuss any sort of opportunity, or just chat about AI, feel free to 
          reach out through any of the links in the header.
        </p>
      </article>
    </div>
  );
}
