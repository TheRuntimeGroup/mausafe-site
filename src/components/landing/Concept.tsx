import { HeartHandshake, Lightbulb, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Lightbulb,
    title: "Concept-first",
    text: "A working prototype exploring scam detection, SOS alerts, safe havens, and call verification.",
  },
  {
    icon: Trophy,
    title: "Hackathon-born",
    text: "Built in 24 hours for the “Life Powered by Tech” hackathon, organised by Middlesex University.",
  },
  {
    icon: HeartHandshake,
    title: "Community-minded",
    text: "Built around local shops and safe havens where anyone can find help when they need it.",
  },
];

const event = [
  { label: "Theme", value: "Life Powered by Tech" },
  { label: "Format", value: "24HR Hackathon" },
  { label: "Organiser", value: "Middlesex University" },
];

export function Concept() {
  return (
    <section id="concept" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            01 · The concept
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            A safety concept, built by students for a 24-hour hackathon
          </h2>
        </Reveal>

        {/* Hackathon context */}
        <Reveal delay={100} className="mt-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#06201F] p-6 text-white sm:p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-30" />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl"
            />
            <div className="relative grid gap-6 md:grid-cols-3">
              {event.map((item, i) => (
                <div
                  key={item.label}
                  className={i > 0 ? "md:border-l md:border-teal-300/10 md:pl-8" : ""}
                >
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-teal-300">
                    {item.label}
                  </span>
                  <p className="mt-2 font-display text-xl font-bold leading-snug text-teal-50 sm:text-2xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#06201F] p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid-dark opacity-40"
              />
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
              />

              <div className="relative flex h-full flex-col">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-teal-300">
                  Dead Signal
                </span>
                <p className="text-balance mt-5 font-display text-2xl font-semibold leading-snug text-teal-50 sm:text-3xl">
                  “We wanted a calm, always-on layer that catches scams, calls
                  for help, and points you to safety.”
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-teal-100/80">
                  MauSafe began as a student concept at Polytechnics Mauritius.
                  It combines smart detection with human help — so a risky
                  moment never has to become a dangerous one.
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-px w-full bg-teal-300/15" />
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-teal-200/80">
                    <span>Polytechnics Mauritius</span>
                    <span className="text-teal-300">24HR Hackathon</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} direction="right" delay={i * 100}>
                <div className="group flex gap-5 rounded-[1.75rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-[0_20px_50px_-24px_rgba(15,118,110,0.35)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
