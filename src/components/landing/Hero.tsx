import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const capabilities = ["Scam check", "Emergency SOS", "Safe havens", "Call detection"];

function Radar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[190px]">
      <div className="absolute inset-0 rounded-full border border-teal-300/25" />
      <div className="absolute inset-[21%] rounded-full border border-teal-300/20" />
      <div className="absolute inset-[42%] rounded-full border border-teal-300/20" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-teal-300/15" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-teal-300/15" />

      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="animate-radar absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(94,234,212,0.5), rgba(94,234,212,0.07) 70deg, transparent 120deg)",
          }}
        />
      </div>

      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300" />
      <span className="absolute left-[68%] top-[30%] h-2 w-2 rounded-full bg-teal-200" />
      <span className="absolute left-[28%] top-[62%] h-1.5 w-1.5 rounded-full bg-teal-200/80" />
      <span className="absolute left-[55%] top-[72%] h-1.5 w-1.5 rounded-full bg-rose-300" />
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="overflow-hidden rounded-[1.9rem] bg-[#06201F]">
      <div className="flex items-center justify-between px-6 pt-3.5 font-mono text-[10px] text-teal-100/60">
        <span>21:47</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-3 rounded-[2px] border border-teal-100/40" />
          <span className="inline-block h-2 w-2 rounded-full border border-teal-100/40" />
        </span>
      </div>

      <div className="space-y-4 px-4 pb-5 pt-4">
        <div className="flex items-center justify-between px-1">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-100">
            MauSafe
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Online
          </span>
        </div>

        <Radar />

        <div className="rounded-xl border border-teal-300/15 bg-teal-400/5 p-3.5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-teal-200/70">
            <span>Link scan</span>
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" /> Safe
            </span>
          </div>
          <p className="mt-2 truncate font-mono text-[11px] text-teal-50">
            mausafe.app/verify
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-teal-300/15">
              <div className="h-full w-[92%] rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[11px] font-semibold text-emerald-300">
              92
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="flex h-[68px] w-[68px] flex-col items-center justify-center rounded-xl bg-rose-500 text-white">
            <span className="font-mono text-xs font-bold tracking-widest">SOS</span>
            <span className="mt-0.5 text-[8px] uppercase tracking-wide text-rose-100">
              Hold
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-teal-300/15 bg-teal-400/5 p-3">
            <span className="font-mono text-[8px] uppercase tracking-widest text-teal-200/70">
              Nearest haven
            </span>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-teal-50">
                Maple Corner Café
              </span>
              <MapPin className="h-3.5 w-3.5 shrink-0 text-teal-300" />
            </div>
            <span className="mt-1 font-mono text-[9px] text-teal-200/70">120m away</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-28 lg:pt-32">
        <div className="grid items-center gap-12 pb-14 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-[11px]">
                <span className="h-px w-8 bg-primary/40" />
                Life powered by tech — 24HR hackathon
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.03] text-foreground sm:text-6xl lg:text-[4.4rem]">
                Your safety,
                <br />
                always <span className="text-primary">on signal</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                A safety companion concept that scans scams, triggers one-tap
                SOS, maps safe havens, and verifies incoming calls — so you
                always know what's real.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-11 w-full rounded-full px-6 text-sm font-medium sm:w-auto"
                >
                  <a href="#features">
                    Explore the features
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-11 w-full rounded-full px-6 text-sm font-medium text-foreground hover:bg-secondary sm:w-auto"
                >
                  <a href="#team">Meet the team</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Student concept · Polytechnics Mauritius
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} direction="right">
            <div className="mx-auto w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[330px]">
              <div className="animate-float-slow rounded-[2.2rem] border border-black/10 bg-[#0A2422] p-2 shadow-[0_40px_70px_-45px_rgba(10,20,18,0.55)]">
                <PhoneScreen />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="bg-background px-4 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
