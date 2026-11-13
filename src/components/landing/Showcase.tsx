import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { ScamCheckScreen, SosScreen } from "./feature-screens";

const rows = [
  {
    id: "scam-check",
    index: "02",
    eyebrow: "Scam check",
    title: "Know what's real before you tap",
    description:
      "Scammers move fast. MauSafe scans suspicious SMS messages and links, then checks them against Trustpilot reviews, AI signals, and known threat patterns to give you a clear verdict in seconds.",
    bullets: [
      "Real-time SMS and link scanning",
      "Trust score from Trustpilot and AI signals",
      "A clear warning before you ever click",
    ],
    screen: <ScamCheckScreen />,
  },
  {
    id: "sos",
    index: "03",
    eyebrow: "Emergency SOS",
    title: "Help is always one tap away",
    description:
      "When you're in danger, every second counts. Add your own trusted contacts, then hold the SOS button to instantly share your live location and a help alert — no typing, no searching.",
    bullets: [
      "Add custom emergency contacts",
      "Auto-send your location and a help message",
      "One-hold activation, even from your lock screen",
    ],
    screen: <SosScreen />,
    reverse: true,
  },
];

export function Showcase() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {rows.map((row, i) => (
          <div
            key={row.id}
            id={row.id}
            className="grid items-center gap-8 border-border py-12 first:pt-0 last:pb-0 sm:py-16 lg:grid-cols-2 lg:gap-16"
            style={{ borderTopWidth: i === 0 ? 0 : 1 }}
          >
            <Reveal
              direction={row.reverse ? "right" : "left"}
              className={row.reverse ? "lg:order-2" : ""}
            >
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-primary">{row.index}</span>
                <span className="h-px w-8 bg-border" />
                <span>{row.eyebrow}</span>
              </div>
              <h3 className="text-balance mt-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                {row.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {row.description}
              </p>
              <ul className="mt-6 space-y-3">
                {row.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-relaxed text-foreground">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              direction={row.reverse ? "left" : "right"}
              delay={100}
              className={row.reverse ? "lg:order-1" : ""}
            >
              {row.screen}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
