import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    id: "scam-check",
    number: "01",
    title: "Scam check",
    tag: "AI + Trustpilot signals",
    description:
      "Paste a suspicious SMS or link. MauSafe checks AI signals, known threat patterns, and Trustpilot reviews before you tap.",
    color: "var(--flag-blue)",
    accent: "var(--flag-blue)",
  },
  {
    id: "sos",
    number: "02",
    title: "Emergency SOS",
    tag: "Your contacts + live location",
    description:
      "Hold one button to alert the people you trust and send your live location. No typing. No searching for a contact.",
    color: "var(--flag-red)",
    accent: "#b9182b",
  },
  {
    id: "safe-havens",
    number: "03",
    title: "Safe havens",
    tag: "Verified places nearby",
    description:
      "Find local shops and community spaces that display the Safe Haven sticker, then get directions to the closest one.",
    color: "var(--flag-yellow)",
    accent: "#715400",
  },
  {
    id: "call-detection",
    number: "04",
    title: "Call detection",
    tag: "Official registry checks",
    description:
      "Incoming numbers are checked against official bank and business registries, so you know who is calling before you answer.",
    color: "var(--flag-green)",
    accent: "var(--flag-green)",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <h2 className="text-balance text-5xl leading-[0.95] text-foreground sm:text-7xl lg:col-span-8">
              Safety, without <em className="text-primary">the guesswork.</em>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:col-span-4">
              Designed for the moment something feels wrong — clear enough to
              use when you have no time to think.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <article id={feature.id} className="group relative border-t border-border">
                <span
                  className="feature-rule absolute -top-px left-0 h-[3px] w-full"
                  style={{ backgroundColor: feature.color }}
                />
                <div className="grid gap-4 py-8 sm:grid-cols-12 sm:items-start sm:gap-6 sm:py-10">
                  <span
                    className="motion-child font-mono text-xs font-semibold [--motion-delay:80ms] sm:col-span-1"
                    style={{ color: feature.accent }}
                  >
                    {feature.number}
                  </span>
                  <h3 className="motion-child text-4xl leading-none text-foreground [--motion-delay:160ms] sm:col-span-4 sm:text-5xl">
                    {feature.title}
                  </h3>
                  <div className="motion-child [--motion-delay:240ms] sm:col-span-6">
                    <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                      {feature.tag}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="motion-child hidden h-6 w-6 [--motion-delay:320ms] sm:col-span-1 sm:block sm:justify-self-end"
                    style={{ color: feature.accent }}
                    strokeWidth={1.75}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
