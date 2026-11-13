import {
  BellRing,
  Check,
  MapPin,
  ShieldCheck,
  Signal,
  Sparkles,
  Wifi,
} from "lucide-react";
import { StoreBadges } from "./store-badges";

const avatars = [
  { initials: "MK", color: "bg-teal-600" },
  { initials: "AD", color: "bg-amber-500" },
  { initials: "SL", color: "bg-rose-500" },
  { initials: "JR", color: "bg-indigo-500" },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[330px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-teal-200/40 blur-3xl"
      />

      <div className="rounded-[3rem] border border-border bg-white p-3 shadow-[0_24px_80px_-20px_rgba(15,118,110,0.35)]">
        <div className="overflow-hidden rounded-[2.4rem] bg-[#FBF8F2]">
          {/* Dynamic island */}
          <div className="flex justify-center pt-2.5">
            <div className="h-6 w-24 rounded-full bg-slate-900" />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-2.5 text-[11px] font-semibold text-slate-700">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <span className="inline-block h-3 w-5 rounded-sm border border-slate-700">
                <span className="block h-full w-4/5 bg-slate-700" />
              </span>
            </span>
          </div>

          {/* Content */}
          <div className="space-y-3.5 px-4 pb-5 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-slate-500">Good evening</p>
                <p className="font-display text-base font-bold text-slate-900">Maya</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Protected
              </span>
            </div>

            {/* Status card */}
            <div className="rounded-2xl bg-teal-700 p-4 text-white shadow-lg shadow-teal-900/20">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">All systems active</p>
                  <p className="text-[11px] text-teal-100">
                    Monitoring in the background
                  </p>
                </div>
                <BellRing className="ml-auto h-4 w-4 text-teal-100" />
              </div>
            </div>

            {/* Link scan result */}
            <div className="rounded-2xl border border-border bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-slate-500">Link scan</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <Check className="h-3.5 w-3.5" /> 92% safe
                </span>
              </div>
              <p className="mt-1.5 truncate text-xs font-medium text-slate-800">
                www.mausafe.app/verify
              </p>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[92%] rounded-full bg-emerald-500" />
              </div>
              <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                <Sparkles className="h-3 w-3" /> Verified by AI & Trustpilot
              </p>
            </div>

            {/* SOS button */}
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
              <button
                type="button"
                tabIndex={-1}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg shadow-rose-500/30"
              >
                SOS
              </button>
              <div>
                <p className="text-xs font-semibold text-slate-900">Emergency SOS</p>
                <p className="text-[10px] leading-snug text-slate-500">
                  Hold to alert your trusted contacts
                </p>
              </div>
            </div>

            {/* Safe haven map */}
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <MiniMap />
              <div className="flex items-center justify-between px-3.5 py-2.5">
                <div>
                  <p className="text-[11px] font-semibold text-slate-900">
                    Safe haven nearby
                  </p>
                  <p className="text-[10px] text-slate-500">Maple Corner Café · 120m</p>
                </div>
                <MapPin className="h-4 w-4 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMap() {
  return (
    <div className="relative h-[104px] bg-[#EAF3F1]">
      <svg viewBox="0 0 300 104" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path
          d="M-10 70 C 60 40, 120 90, 170 62 S 270 30, 320 56"
          fill="none"
          stroke="#D7E6E2"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M-10 92 C 70 72, 150 108, 220 84 S 280 74, 320 82"
          fill="none"
          stroke="#CBDDD8"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
      {/* Route line */}
      <svg viewBox="0 0 300 104" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path
          d="M70 84 C 120 70, 150 50, 205 42"
          fill="none"
          stroke="#0F766E"
          strokeWidth="3"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
      </svg>
      {/* You */}
      <span className="absolute left-[52px] top-[66px] flex h-4 w-4 items-center justify-center">
        <span className="absolute h-4 w-4 animate-ping rounded-full bg-teal-500/50" />
        <span className="relative h-3 w-3 rounded-full border-2 border-white bg-teal-600" />
      </span>
      {/* Safe haven pin */}
      <span className="absolute left-[196px] top-[28px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-teal-100">
        <MapPin className="h-4 w-4 text-teal-600" />
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative soft shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-teal-200/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[420px] w-[420px] rounded-full bg-amber-100/60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
            <ShieldCheck className="h-4 w-4" />
            Personal safety, simplified
          </span>

          <h1 className="text-balance mt-5 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Stay safe. Stay alert.{" "}
            <span className="text-primary">Stay calm.</span>
          </h1>

          <p className="text-balance mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            MauSafe watches your messages, calls, and surroundings so you never
            have to second-guess. Detect scams, alert loved ones instantly, and
            find a safe place — all in one calm, trusted app.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreBadges />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex -space-x-2.5">
              {avatars.map((a) => (
                <span
                  key={a.initials}
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${a.color} text-[11px] font-bold text-white ring-2 ring-background`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">40,000+</span> people
            </p>
          </div>
        </div>

        <div className="lg:pl-6">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
