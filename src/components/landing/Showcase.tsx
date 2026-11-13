import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  CallDetectionScreen,
  SafeHavenScreen,
  ScamCheckScreen,
  SosScreen,
} from "./feature-screens";

const rows = [
  {
    id: "scam-check",
    index: "03",
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
    index: "04",
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
  {
    id: "safe-havens",
    index: "05",
    eyebrow: "Safe havens",
    title: "A safe place around every corner",
    description:
      "MauSafe maps verified local shops, cafés, and community spaces that display the Safe Haven sticker. If you ever feel unsafe, open the map and get guided to the nearest place where someone will help.",
    bullets: [
      "Live map of verified safe shops near you",
      "Recognizable Safe Haven stickers on doors",
      "Step-by-step guidance to the closest haven",
    ],
    screen: <SafeHavenScreen />,
  },
  {
    id: "call-detection",
    index: "06",
    eyebrow: "Call detection",
    title: "Answer with confidence, not caution",
    description:
      "Fraud calls often impersonate your bank or service providers. MauSafe silently verifies every incoming call against official registries and tells you — before you answer — whether the number is legitimate.",
    bullets: [
      "Automatic verification in the background",
      "Matches numbers to official bank and business registries",
      "A clear notification before you pick up",
    ],
    screen: <CallDetectionScreen />,
    reverse: true,
  },
];

export function Showcase() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:space-y-28 sm:px-6">
        {rows.map((row) => (
          <div
            key={row.id}
            id={row.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              direction={row.reverse ? "right" : "left"}
              className={row.reverse ? "lg:order-2" : ""}
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-primary">{row.index}</span>
                <span className="h-px w-8 bg-border" />
                <span>{row.eyebrow}</span>
              </div>
              <h3 className="text-balance mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                {row.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {row.description}
              </p>
              <ul className="mt-6 space-y-3">
                {row.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              direction={row.reverse ? "left" : "right"}
              delay={120}
              className={row.reverse ? "lg:order-1" : ""}
            >
              <div className="lg:mx-0 lg:max-w-none">{row.screen}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
