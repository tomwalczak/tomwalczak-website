import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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
              I&apos;m an AI Engineer based in London. My background is in computer science, 
              startups, and product management.
            </p>
            <p className="text-muted-foreground mb-4">
              I&apos;m especially interested in the intersection of epistemology and AI — how 
              we can build systems that don&apos;t just give answers, but show their work and 
              surface the strongest counter-arguments.
            </p>
            <p className="text-muted-foreground">
              Currently: Head of AI at Alex Epstein.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <h2>Background</h2>
        <p>
          I studied computer science and worked in startups before moving into AI. I&apos;ve spent 
          time in product management, which gave me an appreciation for building things people 
          actually want to use — not just technically interesting demos.
        </p>
        <p>
          The thread through my work is making complex information more accessible. Whether that&apos;s 
          building knowledge bases, AI agents, or debate systems — the goal is always to help people 
          understand things better.
        </p>

        <Separator className="my-8" />

        <h2>What I Think About</h2>

        <h3>Truth-Seeking AI</h3>
        <p>
          Verification is what makes the 10x-100x productivity gains in software engineering 
          possible — agents can keep running, check their own work, and iterate. I&apos;m building 
          the equivalent for intellectual work: AI agents that verify their reasoning on complex, 
          controversial topics.
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
          reach out. Follow along on{" "}
          <a href="https://tomwalczak.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>,{" "}
          <a href="https://x.com/tom_walchak" target="_blank" rel="noopener noreferrer">X</a>, or{" "}
          <a href="https://linkedin.com/in/tom-walczak" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </article>
    </div>
  );
}
