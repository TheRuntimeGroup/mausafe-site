import { lazy, Suspense } from "react";
import { ArrowDown, ArrowRight, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { APK_URL, APP_URL } from "@/lib/download";

const SafetyScene = lazy(() => import("./SafetyScene"));

function SceneFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-40 w-40">
        <span className="animate-pulse-soft absolute inset-0 rounded-full border border-primary/20" />
        <span className="absolute inset-9 rounded-full border border-primary/30" />
        <span className="absolute inset-[4.5rem] rounded-full bg-primary" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-3.5 py-2 text-xs font-bold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/40" />
                  <span className="relative h-2 w-2 rounded-full bg-primary" />
                </span>
                Available on web & Android
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-balance mt-7 text-[clamp(3rem,6.4vw,5.6rem)] leading-[0.98] text-foreground">
                Less panic. More <span className="text-primary">peace of mind.</span>
              </h1>
            </Reveal>

            <Reveal delay={190}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                MauSafe helps you check suspicious links, call for help, find a
                safe place, and verify callers — all in one calm, simple app.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic className="w-full sm:w-auto">
                  <Button asChild size="lg" className="h-12 w-full rounded-xl px-6 text-sm font-bold sm:w-auto">
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      Open MauSafe
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-border bg-white px-6 text-sm font-bold text-foreground shadow-sm hover:bg-secondary sm:w-auto"
                >
                  <a href={APK_URL}>
                    <Download className="h-4 w-4" />
                    Download APK
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                {["Built in Mauritius", "Free to try", "Simple by design"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} direction="scale">
            <div className="relative h-[380px] overflow-hidden rounded-[2rem] border border-primary/10 bg-[#EEF1FF] sm:h-[500px] lg:h-[560px]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 text-[10px] font-bold uppercase tracking-[0.16em] text-primary/60">
                <span>Interactive 3D</span>
                <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live view
                </span>
              </div>
              <Suspense fallback={<SceneFallback />}>
                <SafetyScene />
              </Suspense>
              <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
                <span className="rounded-full bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                  Drag to explore
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <a href="#features" className="mx-auto mt-14 flex w-fit items-center gap-2 text-xs font-bold text-muted-foreground transition-colors hover:text-primary sm:mt-20">
          Discover MauSafe
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
