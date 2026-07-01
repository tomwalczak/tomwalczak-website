import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SelectedWork } from "@/components/selected-work";

export const metadata: Metadata = {
  title: "Work | Tom Walczak",
  description:
    "Selected AI systems Tom Walczak has built for clients across VC, media, education, finance, and energy.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <SelectedWork showAdvisory={false} />

      <section className="rounded-lg border border-border bg-secondary/30 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold">Get in touch</h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          If you have an AI system you want built or audited, email me to see if
          we&apos;re the right fit.
        </p>
        <Button asChild>
          <a href="mailto:tom@tomwalczak.com">Get in touch</a>
        </Button>
      </section>
    </div>
  );
}
