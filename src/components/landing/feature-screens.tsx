import type { ReactNode } from "react";
import { Check, MapPin, ShieldAlert, ShieldCheck, Siren } from "lucide-react";

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
