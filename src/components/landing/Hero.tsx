import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FlagStripe } from "./FlagStripe";
import { Magnetic } from "./Magnetic";
import { APK_URL, APP_URL } from "@/lib/download";

const signals = [
  { id: "scam-check", number: "01", label: "Scam", width: "94%", color: "var(--flag-blue)", text: "#ffffff" },
  { id: "sos", number: "02", label: "SOS", width: "78%", color: "var(--flag-red)", text: "#ffffff" },
  { id: "safe-havens", number: "03", label: "Havens", width: "88%", color: "var(--flag-yellow)", text: "var(--ink)" },
  { id: "call-detection", number: "04", label: "Calls", width: "70%", color: "var(--flag-green)", text: "#ffffff" },
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

function SignalStack() {
  return (
    <div className="mx-auto w-full max-w-[480px] lg:ml-auto">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        <span>Safety system / 04 signals</span>
        <span className="flex items-center gap-2 text-primary">
          <span className="animate-pulse-soft h-2 w-2 rounded-full bg-primary" />
          Ready
        </span>
      </div>

      <div className="space-y-3">
        {signals.map((signal, i) => (
          <Reveal key={signal.id} delay={700 + i * 140} direction="right">
            <a
              href={`#${signal.id}`}
              className="signal-bar group flex h-14 items-center justify-between gap-3 rounded-xl px-5 transition-[filter] duration-300 hover:brightness-105 sm:h-[68px]"
              style={{
                width: signal.width,
                backgroundColor: signal.color,
                color: signal.text,
                animationDelay: `${i * -1.1}s`,
              }}
            >
              <span className="font-mono text-[10px] opacity-70">{signal.number}</span>
              <span className="flex-1 text-lg font-bold tracking-tight sm:text-xl">
                {signal.label}
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-5 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        Select a signal to explore
      </p>
    </div>
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

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-[clamp(3.2rem,9vw,7.8rem)] leading-[0.86] text-foreground">
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

          <div className="lg:col-span-5">
            <SignalStack />
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-5 sm:mt-20">
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
