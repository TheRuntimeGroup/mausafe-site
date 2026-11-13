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
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            02 · Capabilities
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Four signals. One safety net.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each capability is designed to catch a different kind of risk —
            quietly, and before it escalates.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_28px_60px_-28px_rgba(15,118,110,0.4)]">
                {/* Scanline on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-teal-300/0 transition-colors duration-300 group-hover:bg-teal-300/70" />

                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-teal-200">
                    {feature.index}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <span className="mt-5 inline-flex w-fit items-center rounded-full bg-secondary px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-secondary-foreground">
                  {feature.tag}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
