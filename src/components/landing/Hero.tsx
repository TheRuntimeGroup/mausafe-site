import { lazy, Suspense } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FlagStripe } from "./FlagStripe";
import { Magnetic } from "./Magnetic";
import { APK_URL, APP_URL } from "@/lib/download";

const SafetyScene = lazy(() => import("./SafetyScene"));

const featureLinks = [
  { id: "scam-check", label: "Scam", color: "var(--flag-blue)" },
  { id: "sos", label: "SOS", color: "var(--flag-red)" },
  { id: "safe-havens", label: "Havens", color: "var(--flag-yellow)" },
  { id: "call-detection", label: "Calls", color: "var(--flag-green)" },
];

function HeroLine({ text, delay = 0, accent = false }: { text: string; delay?: number; accent?: boolean }) {
  return (
    <span className={`block overflow-hidden pb-[0.1em] ${accent ? "italic text-primary" : ""}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="block">
        {Array.from(text).map((character, i) => (
          <span
            key={`${character}-${i}`}
            className="hero-char inline-block"
            style={{ animationDelay: `${delay + i * 28}ms` }}
          >
            {character === " " ? "\u00A0" : character}
          </span>
        ))}
      </span>
    </span>
  );
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-44 w-44">
        <span className="animate-pulse-soft absolute inset-0 rounded-full border border-primary/20" />
        <span className="absolute inset-8 rounded-full border border-primary/30" />
        <span className="absolute inset-16 rounded-full bg-primary" />
      </div>
      <span className="absolute bottom-12 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        Loading safety core
      </span>
    </div>
  );
}

function SceneVisual() {
  return (
    <Reveal delay={450} direction="scale">
      <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>Live 3D / Safety core</span>
          <span className="flex items-center gap-2 text-primary">
            <span className="animate-pulse-soft h-2 w-2 rounded-full bg-primary" />
            Online
          </span>
        </div>
        <Suspense fallback={<SceneFallback />}>
          <SafetyScene />
        </Suspense>
        <p className="pointer-events-none absolute inset-x-0 bottom-1 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
          Drag to rotate · Move to explore
        </p>
      </div>

      <nav aria-label="Explore safety features" className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 border-t border-border pt-4">
        {featureLinks.map((feature, i) => (
          <a
            key={feature.id}
            href={`#${feature.id}`}
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: feature.color }} />
            <span className="opacity-60">0{i + 1}</span>
            {feature.label}
          </a>
        ))}
      </nav>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:pt-36">
        <Reveal delay={250}>
          <div className="flex items-center gap-4">
            <FlagStripe className="h-1.5 w-16" />
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              Life powered by tech / 24HR Hackathon
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-4">
          <div className="lg:col-span-6">
            <h1 className="text-[clamp(3.2rem,8vw,7rem)] leading-[0.86] text-foreground">
              <HeroLine text="Your safety," delay={350} />
              <HeroLine text="always on" delay={480} />
              <HeroLine text="signal." delay={610} accent />
            </h1>

            <Reveal delay={850}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Four essential safety tools in one Mauritian app. Check a scam,
                call for help, find a safe place, and know who is calling.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Magnetic className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full rounded-xl px-6 text-sm font-semibold sm:w-auto"
                  >
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      Try MauSafe online
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-foreground/20 bg-transparent px-6 text-sm font-semibold hover:bg-secondary sm:w-auto"
                >
                  <a href={APK_URL}>
                    <Download className="h-4 w-4" />
                    Download APK
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <SceneVisual />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-5 sm:mt-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Built in Mauritius by DEAD SIGNAL
          </p>
          <a
            href="#features"
            aria-label="Scroll to features"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
