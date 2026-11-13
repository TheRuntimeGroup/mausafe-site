import { Reveal } from "./Reveal";

const event = [
  { label: "Theme", value: "Life Powered by Tech" },
  { label: "Format", value: "24-hour hackathon" },
  { label: "Organiser", value: "Middlesex University" },
];

const pillars = [
  {
    index: "01",
    title: "Concept-first",
    text: "A working prototype exploring scam detection, SOS alerts, safe havens, and call verification.",
  },
  {
    index: "02",
    title: "Community-minded",
    text: "Designed around local shops and safe havens where anyone can find help when they need it.",
  },
  {
    index: "03",
    title: "Honestly presented",
    text: "An early prototype, not a released product — no inflated metrics, no pretend app store listing.",
  },
];

export function Concept() {
  return (
    <section id="concept" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            01 — The concept
          </p>
          <h2 className="text-balance mt-4 max-w-2xl text-3xl font-bold leading-tight text-foreground sm:text-[2.5rem]">
            Built by students for a 24-hour hackathon
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal direction="left">
            <div className="flex h-full flex-col rounded-3xl bg-[#06201F] p-8 sm:p-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300">
                Dead Signal
              </span>
              <p className="text-balance mt-6 font-display text-2xl font-semibold leading-snug text-teal-50 sm:text-[1.75rem]">
                “A calm, always-on layer that catches scams, calls for help,
                and points you to safety.”
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-teal-100/75">
                MauSafe began as a student concept at Polytechnics Mauritius.
                It combines smart detection with human help — so a risky moment
                never has to become a dangerous one.
              </p>
              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-teal-300/15" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-200/70">
                  Polytechnics Mauritius · 24HR Hackathon
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="right">
              <div className="divide-y divide-border border-y border-border">
                {event.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-right text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 space-y-6">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} direction="right" delay={i * 80}>
                  <div className="flex gap-5">
                    <span className="mt-0.5 font-mono text-[11px] text-primary">
                      {pillar.index}
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
      </div>
    </section>
  );
}
