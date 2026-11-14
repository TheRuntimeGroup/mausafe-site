import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FlagStripe } from "./FlagStripe";
import { APK_URL } from "@/lib/download";

function HeroLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <span className="hero-line-inner" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:pt-36">
        <Reveal>
          <div className="flex items-center gap-4">
            <FlagStripe className="h-1.5 w-16" />
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              Life powered by tech / 24HR Hackathon
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h1 className="text-[clamp(3.4rem,9vw,7.5rem)] uppercase leading-[0.9] text-foreground lg:col-span-8">
            <HeroLine delay={80}>Your safety,</HeroLine>
            <HeroLine delay={170}>always on</HeroLine>
            <HeroLine delay={260}>
              <span className="text-primary">signal.</span>
            </HeroLine>
          </h1>

          <Reveal delay={360} className="lg:col-span-4 lg:pb-2">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
              Scam checks, emergency SOS, safe havens, and call detection.
              Four essential safety tools, built into one Mauritian app.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-xl px-6 text-sm font-semibold sm:w-auto lg:w-full xl:w-auto"
              >
                <a href={APK_URL}>
                  <Download className="h-4 w-4" />
                  Download Android APK
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl border-foreground/20 bg-transparent px-6 text-sm font-semibold hover:bg-secondary sm:w-auto lg:w-full xl:w-auto"
              >
                <a href="#features">
                  How it works
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Free download / Android now / iOS soon
            </p>
          </Reveal>
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
