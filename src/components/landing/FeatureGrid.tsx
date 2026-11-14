import {
  Check,
  MapPin,
  Navigation,
  PhoneIncoming,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Siren,
  X,
} from "lucide-react";
import { Reveal } from "./Reveal";

function ScamVisual() {
  return (
    <div className="relative mt-7 overflow-hidden rounded-2xl bg-[#F3F5FA] p-5">
      <span className="animate-scan absolute inset-x-0 top-0 z-10 h-px bg-primary/40" />
      <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5">
        <ScanSearch className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="truncate font-mono text-xs text-muted-foreground">pay-secure-login.co/verify</span>
        <span className="ml-auto rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-600">High risk</span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="space-y-2.5">
          {["Suspicious login pattern", "Urgency detected in message"].map((item) => (
            <p key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
              <X className="h-3.5 w-3.5 text-rose-500" strokeWidth={2.5} />
              {item}
            </p>
          ))}
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.5} />
            Domain checked successfully
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-5xl leading-none text-rose-500">12</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trust score</p>
        </div>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border">
        <div className="h-full w-[12%] rounded-full bg-rose-500" />
      </div>
    </div>
  );
}

function SosVisual() {
  return (
    <div className="mt-7 rounded-2xl bg-rose-50 p-5">
      <div className="flex items-center gap-5">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-rose-400/20" />
          <span className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-500/20">
            <Siren className="h-5 w-5" />
            <span className="mt-1 text-[10px] font-extrabold tracking-widest">HOLD</span>
          </span>
        </div>
        <div>
          <p className="text-sm font-extrabold text-foreground">One hold. Everyone knows.</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">Your location and alert reach your trusted contacts.</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        {["Amina · Sister", "Kaushal · Brother"].map((contact) => (
          <div key={contact} className="flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 text-xs">
            <span className="font-semibold text-foreground">{contact}</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600"><Check className="h-3.5 w-3.5" /> Ready</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HavenVisual() {
  return (
    <div className="mt-7 overflow-hidden rounded-2xl bg-[#EDF3F7]">
      <div className="relative h-40">
        <svg viewBox="0 0 500 200" className="h-full w-full" aria-hidden="true">
          <path d="M-20 142 C 100 70, 235 170, 530 72" fill="none" stroke="#D6E1E7" strokeWidth="28" strokeLinecap="round" />
          <path d="M140 -20 C 115 50, 190 125, 150 220" fill="none" stroke="#D6E1E7" strokeWidth="23" />
          <path d="M380 -20 C 345 65, 430 140, 375 230" fill="none" stroke="#D6E1E7" strokeWidth="23" />
          <path d="M160 145 C 215 100, 290 130, 365 52" fill="none" stroke="currentColor" className="text-primary" strokeWidth="4" strokeDasharray="3 11" strokeLinecap="round" />
        </svg>
        <span className="absolute left-[28%] top-[66%] flex h-4 w-4"><span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/30" /><span className="relative h-4 w-4 rounded-full border-2 border-white bg-primary" /></span>
        <span className="absolute left-[70%] top-[18%] flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md"><MapPin className="h-5 w-5" /></span>
      </div>
      <div className="flex items-center justify-between gap-3 bg-white p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary"><Navigation className="h-4 w-4" /></span>
          <div><p className="text-xs font-extrabold text-foreground">Maple Corner Café</p><p className="mt-0.5 text-[10px] text-muted-foreground">120 m · Safe Haven</p></div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">Open</span>
      </div>
    </div>
  );
}

function CallVisual() {
  return (
    <div className="mt-7 rounded-2xl bg-[#F3F5FA] p-5">
      <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-primary"><PhoneIncoming className="h-5 w-5" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-extrabold text-foreground">Bank of Mau</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Incoming call</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700"><ShieldCheck className="h-3.5 w-3.5" /> Verified</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-emerald-500 py-3 text-center text-xs font-extrabold text-white">Answer safely</div>
        <div className="rounded-xl bg-white py-3 text-center text-xs font-extrabold text-foreground ring-1 ring-border">View details</div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Matched against an official registry
      </p>
    </div>
  );
}

const cards = [
  {
    id: "scam-check",
    icon: ScanSearch,
    title: "Scam check",
    description: "Check a suspicious SMS or link before you tap.",
    tag: "AI + review signals",
    className: "lg:col-span-7",
    visual: <ScamVisual />,
  },
  {
    id: "sos",
    icon: Siren,
    title: "Emergency SOS",
    description: "Reach your people without typing or searching.",
    tag: "Contacts + live location",
    className: "lg:col-span-5",
    visual: <SosVisual />,
  },
  {
    id: "safe-havens",
    icon: MapPin,
    title: "Safe havens",
    description: "Find verified places where someone can help.",
    tag: "Nearby guidance",
    className: "lg:col-span-5",
    visual: <HavenVisual />,
  },
  {
    id: "call-detection",
    icon: ShieldAlert,
    title: "Call detection",
    description: "Know who is calling before you decide to answer.",
    tag: "Registry verification",
    className: "lg:col-span-7",
    visual: <CallVisual />,
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">A complete safety toolkit</p>
          <h2 className="text-balance mt-4 text-4xl leading-[1.04] sm:text-6xl">Everything you need. Nothing you don’t.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Four focused tools designed to be clear when every second matters.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 90} className={card.className}>
              <article id={card.id} className="group h-full rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_12px_40px_-30px_rgba(17,24,46,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(17,24,46,0.25)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                    <card.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="rounded-full bg-background px-3 py-1.5 text-[10px] font-bold text-muted-foreground ring-1 ring-border">{card.tag}</span>
                </div>
                <h3 className="mt-5 text-2xl text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                {card.visual}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-muted-foreground">Illustrative previews of the MauSafe experience.</p>
      </div>
    </section>
  );
}
