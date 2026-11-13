import { ArrowDown, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tilt } from "./Tilt";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";

function Radar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[210px]">
      <div className="absolute inset-0 rounded-full border border-teal-300/25" />
      <div className="absolute inset-[21%] rounded-full border border-teal-300/20" />
      <div className="absolute inset-[42%] rounded-full border border-teal-300/20" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-teal-300/15" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-teal-300/15" />

      {/* Rotating sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="animate-radar absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(94,234,212,0.55), rgba(94,234,212,0.08) 70deg, transparent 120deg)",
          }}
        />
      </div>

      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_12px_2px_rgba(94,234,212,0.6)]" />

      {/* Blips */}
      <span className="absolute left-[68%] top-[30%] h-2 w-2 rounded-full bg-teal-200" />
      <span className="absolute left-[28%] top-[62%] h-1.5 w-1.5 rounded-full bg-teal-200/80" />
      <span className="absolute left-[55%] top-[72%] h-1.5 w-1.5 rounded-full bg-rose-300" />
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="overflow-hidden rounded-[2.6rem] bg-[#06201F]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-7 pt-4 font-mono text-[10px] text-teal-100/70">
        <span>21:47</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-3 rounded-[2px] border border-teal-100/50" />
          <span className="inline-block h-2 w-2 rounded-full border border-teal-100/50" />
        </span>
      </div>

      <div className="space-y-5 px-5 pb-6 pt-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-100">
            MauSafe
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-widest text-teal-200 ring-1 ring-teal-300/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal-300" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-300" />
            </span>
            Online
          </span>
        </div>

        {/* Radar */}
        <div className="py-1">
          <Radar />
        </div>

        {/* Scan result */}
        <div className="rounded-2xl border border-teal-300/15 bg-teal-400/5 p-3.5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-teal-200/70">
            <span>Link scan</span>
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" /> Safe
            </span>
          </div>
          <p className="mt-2 truncate font-mono text-xs text-teal-50">
            www.mausafe.app/verify
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-teal-300/15">
              <div className="h-full w-[92%] rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-xs font-semibold text-emerald-300">92</span>
          </div>
        </div>

        {/* SOS + Haven */}
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <button
            type="button"
            tabIndex={-1}
            className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-500/25"
          >
            <span className="font-mono text-sm font-bold tracking-widest">SOS</span>
            <span className="mt-0.5 text-[8px] uppercase tracking-wide text-rose-100">
              Hold
            </span>
          </button>

          <div className="flex flex-col justify-center rounded-2xl border border-teal-300/15 bg-teal-400/5 p-3.5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-teal-200/70">
              Nearest haven
            </span>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="font-mono text-xs text-teal-50">Maple Corner Café</span>
              <MapPin className="h-4 w-4 text-teal-300" />
            </div>
            <span className="mt-1 font-mono text-[10px] text-teal-200/70">120m away</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitDots() {
  return (
    <>
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_12px_2px_rgba(94,234,212,0.65)]" />
      <span className="absolute bottom-[9%] right-[7%] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_2px_rgba(110,231,183,0.55)]" />
      <span className="absolute left-[9%] top-[52%] h-1.5 w-1.5 rounded-full bg-rose-300 shadow-[0_0_8px_2px_rgba(253,164,175,0.5)]" />
      <span className="absolute bottom-[30%] left-[2%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
    </>
  );
}

function Sparkles() {
  const dots = [
    { className: "left-[4%] top-[6%]", delay: "0s" },
    { className: "right-[2%] top-[16%]", delay: "1.2s" },
    { className: "left-[8%] bottom-[12%]", delay: "2.1s" },
    { className: "right-[6%] bottom-[6%]", delay: "0.6s" },
    { className: "left-[46%] top-[-4%]", delay: "1.7s" },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`animate-float absolute ${dot.className} h-1.5 w-1.5 rounded-full bg-teal-300/70`}
          style={{ animationDelay: dot.delay, animationDuration: "5s" }}
        />
      ))}
    </>
  );
}

const floatingChips = [
  { label: "Scam check", className: "left-[-12%] top-[18%]", z: 30 },
  { label: "SOS alerts", className: "right-[-14%] top-[30%]", z: 50 },
  { label: "Safe havens", className: "left-[-10%] bottom-[22%]", z: 40 },
  { label: "Call check", className: "right-[-12%] bottom-[12%]", z: 30 },
];

function HeroVisual() {
  return (
    <Parallax
      speed={0.07}
      className="relative mx-auto w-[320px] sm:w-[360px] lg:w-[400px]"
    >
      {/* Aura */}
      <div
        aria-hidden="true"
        className="absolute -inset-20 -z-10 rounded-full bg-teal-400/20 blur-[100px]"
      />

      {/* Centered orbit rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slower relative h-[340px] w-[340px] rounded-full border border-teal-300/15 sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
          <OrbitDots />
        </div>
        <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-300/25 sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />
      </div>

      {/* Floating sparkles */}
      <Sparkles />

      <Tilt max={12} scale={1.02} glare className="preserve-3d">
        <div className="preserve-3d relative">
          <div
            aria-hidden="true"
            className="absolute -inset-10 -z-10 rounded-full bg-teal-400/15 blur-3xl"
          />

          {/* Floating chips */}
          {floatingChips.map((chip) => (
            <span
              key={chip.label}
              style={{ transform: `translateZ(${chip.z}px)` }}
              className={`absolute ${chip.className} z-20 hidden rounded-full border border-teal-200/60 bg-white/90 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-teal-700 shadow-lg shadow-teal-900/5 backdrop-blur sm:inline-block`}
            >
              {chip.label}
            </span>
          ))}

          <div className="rounded-[3rem] border border-[#0B3B37] bg-[#072725] p-2.5 shadow-[0_50px_110px_-35px_rgba(6,32,31,0.7)]">
            <PhoneScreen />
          </div>
        </div>
      </Tilt>
    </Parallax>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
              </span>
              Dead Signal · Polytechnics Mauritius
            </p>
          </Reveal>

          <Reveal delay={90} blur>
            <h1 className="text-balance mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Your safety, always{" "}
              <span className="relative whitespace-nowrap text-primary">
                on signal
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-teal-100" />
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-balance mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              MauSafe is a safety companion concept that scans scams, triggers
              one-tap SOS, maps safe havens, and verifies incoming calls — so
              you always know what's real.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#concept">
                  Explore the concept
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href="#team">Meet the team</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Student concept app — not yet in app stores
            </p>
          </Reveal>
        </div>

        <div className="lg:pl-4">
          <HeroVisual />
        </div>
      </div>

      <div className="mt-16 flex justify-center lg:mt-20">
        <a
          href="#concept"
          className="group inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
            <ArrowDown className="h-3 w-3 animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  );
}
