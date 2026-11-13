import {
  ArrowRight,
  MapPin,
  PhoneCall,
  ScanSearch,
  Siren,
} from "lucide-react";

const stats = [
  { value: "40,000+", label: "People protected" },
  { value: "98%", label: "Scam detection" },
  { value: "500+", label: "Safe havens mapped" },
  { value: "24/7", label: "Background monitoring" },
];

const features = [
  {
    icon: ScanSearch,
    href: "#scam-check",
    title: "Scam Check",
    description:
      "Paste any SMS or link to get an instant trust score, powered by Trustpilot reviews and AI analysis.",
  },
  {
    icon: Siren,
    href: "#sos",
    title: "One-tap SOS",
    description:
      "Hold the SOS button to alert your custom emergency contacts and auto-send your live location.",
  },
  {
    icon: MapPin,
    href: "#safe-havens",
    title: "Safe havens",
    description:
      "Find verified shops and spaces near you — marked with stickers — where you can always ask for help.",
  },
  {
    icon: PhoneCall,
    href: "#call-detection",
    title: "Smart call check",
    description:
      "Incoming calls are verified against trusted registries like banks, so you always know who's really calling.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-sm md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-8 text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="text-balance mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Protection that works quietly in the background
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MauSafe combines smart detection with human help — so you're covered
            before, during, and after a risky moment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="group flex flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_48px_-24px_rgba(15,118,110,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
