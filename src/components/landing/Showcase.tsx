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
