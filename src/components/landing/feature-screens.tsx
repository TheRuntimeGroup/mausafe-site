import type { ReactNode } from "react";
import {
  Check,
  MapPin,
  PhoneIncoming,
  ShieldAlert,
  ShieldCheck,
  Siren,
} from "lucide-react";

function Screen({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-2xl border border-black/10 bg-[#06201F] shadow-[0_30px_60px_-45px_rgba(6,32,31,0.6)]">
      <div className="flex items-center justify-between border-b border-teal-300/10 px-5 py-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-100">
          MauSafe
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal-200/60">
          {label}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function ScamCheckScreen() {
  return (
    <Screen label="Scam check">
      <div className="space-y-4">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-teal-400/10 p-3.5 ring-1 ring-teal-300/10">
          <p className="text-xs leading-relaxed text-teal-50/90">
            URGENT: your account will be locked. Verify now →{" "}
            <span className="text-rose-300 underline">pay-secure-login.co</span>
          </p>
        </div>

        <div className="rounded-xl border border-rose-400/25 bg-rose-400/10 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-rose-300">
              <ShieldAlert className="h-4 w-4" /> Threat detected
            </span>
            <span className="font-mono text-xs font-bold text-rose-300">12</span>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[12%] rounded-full bg-rose-400" />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-teal-200/60">
            <span>Trustpilot · 0 reviews</span>
            <span>Blocked</span>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3.5">
          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-300" />
          <p className="text-xs leading-relaxed text-emerald-100/90">
            “bankofmau.mu” — official domain · verified via Trustpilot.
          </p>
        </div>
      </div>
    </Screen>
  );
}

export function SosScreen() {
  const contacts = ["Amina — sister", "Kaushal — brother", "Divesh — friend"];
  return (
    <Screen label="Emergency SOS">
      <div className="flex items-center gap-4">
        <div className="relative flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-rose-500">
          <Siren className="h-4 w-4 text-white" />
          <span className="mt-1 font-mono text-xs font-bold tracking-widest text-white">
            SOS
          </span>
          <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-rose-400" />
        </div>

        <div className="flex-1 space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact}
              className="flex items-center justify-between rounded-lg bg-teal-400/5 px-3 py-2.5 ring-1 ring-teal-300/10"
            >
              <span className="text-xs text-teal-50/90">{contact}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                <Check className="h-3.5 w-3.5" /> Sent
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-teal-300/15 bg-teal-400/5 px-4 py-3">
        <MapPin className="h-4 w-4 shrink-0 text-teal-300" />
        <span className="text-xs text-teal-100/90">
          Live location shared with 3 contacts
        </span>
        <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
      </div>
    </Screen>
  );
}

export function SafeHavenScreen() {
  return (
    <Screen label="Safe havens">
      <div className="relative overflow-hidden rounded-xl border border-teal-300/15">
        <div className="relative h-[150px] bg-[#0A2B29]">
          <svg
            viewBox="0 0 400 150"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 100 C 120 70, 240 120, 400 90"
              fill="none"
              stroke="#0F3A36"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <path
              d="M110 0 C 100 60, 130 120, 120 150"
              fill="none"
              stroke="#0F3A36"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M300 0 C 285 60, 315 120, 300 150"
              fill="none"
              stroke="#0F3A36"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M150 130 C 200 100, 250 90, 310 60"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute left-[140px] top-[108px] flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-teal-400/60" />
            <span className="relative h-3 w-3 rounded-full border-2 border-white bg-teal-400" />
          </span>
          <span className="absolute left-[296px] top-[46px] inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#06201F] ring-2 ring-teal-300/40">
            <MapPin className="h-4 w-4 text-teal-300" />
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-teal-300/10 bg-teal-400/5 px-4 py-3">
          <div>
            <p className="text-xs font-semibold text-teal-50">Maple Corner Café</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-teal-200/60">
              Safe haven · 120m
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-emerald-300 ring-1 ring-emerald-300/20">
            Open now
          </span>
        </div>
      </div>
    </Screen>
  );
}

export function CallDetectionScreen() {
  return (
    <Screen label="Call check">
      <div className="flex flex-col items-center pt-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-400/15 ring-4 ring-teal-300/10">
          <PhoneIncoming className="h-6 w-6 text-teal-200" />
        </span>
        <p className="mt-4 text-base font-semibold text-teal-50">Bank of Mau</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-teal-200/60">
          Incoming call
        </p>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-300 ring-1 ring-emerald-300/20">
          <ShieldCheck className="h-4 w-4" /> Verified caller
        </span>

        <p className="mt-4 max-w-[260px] text-center text-xs leading-relaxed text-teal-100/70">
          Number matches the official registry for Bank of Mau. No action
          needed.
        </p>
      </div>
    </Screen>
  );
}
