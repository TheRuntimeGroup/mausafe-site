import { MapPin, PhoneCall, ScanSearch, Siren } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    index: "01",
    icon: ScanSearch,
    title: "Scam Check",
    tag: "AI · Trustpilot",
    description:
      "Paste an SMS or link to get a clear trust score before you tap — powered by AI signals and Trustpilot reviews.",
  },
  {
    index: "02",
    icon: Siren,
    title: "One-tap SOS",
    tag: "Custom contacts",
    description:
      "Hold the SOS button to alert the emergency contacts you choose, auto-sending your live location instantly.",
  },
  {
    index: "03",
    icon: MapPin,
    title: "Safe Havens",
    tag: "Live map",
    description:
      "See verified local shops marked with a Safe Haven sticker and get guided to the closest one.",
  },
  {
    index: "04",
    icon: PhoneCall,
    title: "Call Detection",
    tag: "Registry check",
    description:
      "Incoming calls are verified against official registries — like banks — before you ever pick up.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            02 — Capabilities
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold leading-tight text-foreground sm:text-[2.5rem]">
            Four signals. One safety net.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Each capability catches a different kind of risk — quietly, and
            before it escalates.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col bg-white p-6 transition-colors duration-200 hover:bg-secondary/40 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <feature.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.75}
                  />
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {feature.index}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {feature.tag}
                </span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
