import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/tomwalczak", icon: Github },
  { name: "Twitter", href: "https://x.com/tom_walchak", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/tom-walczak", icon: Linkedin },
  { name: "Email", href: "mailto:tom@tomwalczak.com", icon: Mail },
];

export default function AboutPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="flex items-center gap-6 mb-8 not-prose">
          <Image
            src="/profile.jpg"
            alt="Tom Walczak"
            width={96}
            height={96}
            className="rounded-full shrink-0"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold">Hi, I&apos;m Tom</h2>
            <p className="text-muted-foreground">
              Building verifiable, truth-seeking AI agents
            </p>
            <div className="flex gap-3 mt-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p>
          I&apos;m an AI Engineer based in London, UK. I work with a small team of engineers and designers 
          to build AI-first products and prototypes.
        </p>

        <p>
          I am interested in building AI products and tools that can help us understand complex and 
          contentious topics — energy and climate, AI risk, and others. I have a background in computer 
          science, startups, and product management. I am especially interested in the intersection 
          of epistemology and computer science.
        </p>

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
          reach out through any of the links above.
        </p>

        <p className="text-muted-foreground text-sm">
          Currently: Head of AI at Alex Epstein | AI Consultant
        </p>
      </article>
    </div>
  );
}
