import type { ReactNode } from "react";
import { Check } from "lucide-react";
import {
  CallDetectionIllustration,
  SafeHavenIllustration,
  ScamCheckIllustration,
  SosIllustration,
} from "./illustrations";

type ShowcaseRowProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  illustration: ReactNode;
  reverse?: boolean;
};

function ShowcaseRow({
  id,
  eyebrow,
  title,
  description,
  bullets,
  illustration,
  reverse = false,
}: ShowcaseRowProps) {
  return (
    <div
      id={id}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <span className="inline-flex items-center rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h3 className="text-balance mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
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
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{illustration}</div>
    </div>
  );
}

export function Showcase() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:space-y-28 sm:px-6">
        <ShowcaseRow
          id="scam-check"
          eyebrow="Scam Check"
          title="Know what's real before you tap"
          description="Scammers get smarter every day. MauSafe scans suspicious SMS messages and links, then checks them against Trustpilot reviews, AI signals, and known threat databases — giving you a clear trust score in seconds."
          bullets={[
            "Real-time SMS and link scanning",
            "Trust score built from Trustpilot and AI signals",
            "A clear warning before you ever click",
          ]}
          illustration={<ScamCheckIllustration />}
        />

        <ShowcaseRow
          id="sos"
          eyebrow="Emergency SOS"
          title="Help is always one tap away"
          description="When you're in danger, every second counts. Add your own trusted contacts, then hold the SOS button to instantly share your live location and a help alert — no typing, no searching."
          bullets={[
            "Add custom emergency contacts",
            "Auto-send your location and a help message",
            "One-hold activation, even from your lock screen",
          ]}
          illustration={<SosIllustration />}
          reverse
        />

        <ShowcaseRow
          id="safe-havens"
          eyebrow="Safe havens"
          title="A safe place around every corner"
          description="MauSafe maps verified local shops, cafés, and community spaces that display the Safe Haven sticker. If you ever feel unsafe, open the map and get guided to the nearest place where someone will help."
          bullets={[
            "Live map of verified safe shops near you",
            "Recognizable Safe Haven stickers on doors",
            "Step-by-step guidance to the closest haven",
          ]}
          illustration={<SafeHavenIllustration />}
        />

        <ShowcaseRow
          id="call-detection"
          eyebrow="Smart call check"
          title="Answer with confidence, not caution"
          description="Fraud calls often impersonate your bank or service providers. MauSafe silently verifies every incoming call against official registries and tells you — before you answer — whether the number is legitimate."
          bullets={[
            "Automatic verification in the background",
            "Matches numbers to official bank and business registries",
            "A clear notification before you pick up",
          ]}
          illustration={<CallDetectionIllustration />}
          reverse
        />
      </div>
    </section>
  );
}
