import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { APK_URL } from "@/lib/download";

const capabilities = ["Scam check", "Emergency SOS", "Safe havens", "Call detection"];

function SignalRadar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-teal-900/10" />
      <div className="absolute inset-[15%] rounded-full border border-teal-900/10" />
      <div className="absolute inset-[30%] rounded-full border border-teal-900/10" />
      <div className="absolute inset-[45%] rounded-full border border-teal-900/15" />

      {/* Crosshair */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-teal-900/5" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-teal-900/5" />

      {/* Rotating sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="animate-radar absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(15,118,110,0.22), rgba(15,118,110,0.04) 70deg, transparent 120deg)",
          }}
        />
      </div>

      {/* Center */}
      <span className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <span className="animate-pulse-ring absolute h-4 w-4 rounded-full bg-primary/40" />
        <span className="relative h-3 w-3 rounded-full bg-primary" />
      </span>

      {/* Blips */}
      <span className="absolute left-[68%] top-[26%] flex h-3 w-3 items-center justify-center">
        <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/30" />
        <span className="relative h-2 w-2 rounded-full bg-primary" />
      </span>
      <span
        className="absolute left-[26%] top-[62%] flex h-3 w-3 items-center justify-center"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/25" />
        <span className="relative h-2 w-2 rounded-full bg-primary/70" />
      </span>
      <span className="absolute left-[58%] top-[74%] h-2 w-2 rounded-full bg-rose-400" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 pb-14 pt-24 sm:pb-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-[11px] lg:justify-start">
                <span className="h-px w-8 bg-primary/40" />
                Life powered by tech — 24HR hackathon
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="text-balance mt-6 text-[2.7rem] font-bold leading-[1.03] text-foreground sm:text-6xl lg:text-[4.4rem]">
                Your safety,
                <br />
                always <span className="text-primary">on signal</span>.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-balance mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                MauSafe scans scams, triggers one-tap SOS, maps safe havens,
                and verifies incoming calls — so you always know what's real.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-full px-7 text-sm font-medium sm:w-auto"
                >
                  <a href={APK_URL}>
                    <Download className="h-4 w-4" />
                    Download for Android
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 w-full rounded-full px-6 text-sm font-medium text-foreground hover:bg-secondary sm:w-auto"
                >
                  <a href="#features">
                    Explore features
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Free APK · Android now, iOS soon
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} direction="scale">
            <SignalRadar />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="bg-background px-4 py-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-left"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-center py-8">
          <a
            href="#features"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
