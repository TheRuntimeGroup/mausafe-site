import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Check,
  Clock3,
  MapPin,
  PhoneIncoming,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Store,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const features = [
  {
    id: "scam-check",
    number: "01",
    title: "Scam check",
    color: "var(--flag-blue)",
    summary: "Check a suspicious link before it becomes a mistake.",
  },
  {
    id: "sos",
    number: "02",
    title: "Emergency SOS",
    color: "var(--flag-red)",
    summary: "Preview a one-hold alert to the people you trust.",
  },
  {
    id: "safe-havens",
    number: "03",
    title: "Safe havens",
    color: "var(--flag-yellow)",
    summary: "Find a nearby place where someone can help.",
  },
  {
    id: "call-detection",
    number: "04",
    title: "Call detection",
    color: "var(--flag-green)",
    summary: "Compare a verified caller with an unknown number.",
  },
];

function PreviewFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#06201F] shadow-[0_35px_80px_-50px_rgba(6,32,31,0.65)]">
      <div className="flex items-center justify-between border-b border-teal-300/10 px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--flag-yellow)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal-200/60">
          {label} / interactive preview
        </span>
      </div>
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}

type ScanResult = { score: number; verdict: string; detail: string; tone: "safe" | "warn" | "danger" };

function ScamPreview() {
  const [value, setValue] = useState("pay-secure-login.co");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const scan = (event: FormEvent) => {
    event.preventDefault();
    const sample = value.trim().toLowerCase();
    if (!sample || busy) return;

    setBusy(true);
    setResult(null);
    timer.current = window.setTimeout(() => {
      if (/pay-secure|verify-now|login-secure|free-gift|urgent/.test(sample)) {
        setResult({
          score: 12,
          verdict: "High-risk pattern",
          detail: "Urgency wording and a suspicious login pattern matched the demo rules.",
          tone: "danger",
        });
      } else if (/bankofmau\.mu|mausafe\.app|middlesex\.ac\.uk/.test(sample)) {
        setResult({
          score: 96,
          verdict: "Looks trustworthy",
          detail: "This sample matched an allowed domain in the local demo rules.",
          tone: "safe",
        });
      } else {
        setResult({
          score: 48,
          verdict: "Proceed carefully",
          detail: "No trusted match was found. Check the sender and domain before continuing.",
          tone: "warn",
        });
      }
      setBusy(false);
    }, 650);
  };

  const tone = result?.tone ?? "warn";
  const styles = {
    safe: { border: "border-emerald-400/25", bg: "bg-emerald-400/10", text: "text-emerald-300", bar: "bg-emerald-400" },
    warn: { border: "border-amber-400/25", bg: "bg-amber-400/10", text: "text-amber-300", bar: "bg-amber-400" },
    danger: { border: "border-rose-400/25", bg: "bg-rose-400/10", text: "text-rose-300", bar: "bg-rose-400" },
  }[tone];

  return (
    <PreviewFrame label="Scam check">
      <form onSubmit={scan}>
        <label htmlFor="demo-url" className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal-200/60">
          Test a link or message
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="demo-url"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="h-12 min-w-0 flex-1 rounded-xl border border-teal-300/15 bg-white/5 px-4 font-mono text-sm text-teal-50 outline-none transition-colors placeholder:text-teal-200/30 focus:border-teal-300/45"
            placeholder="Paste a link here"
            autoComplete="off"
          />
          <Button
            type="submit"
            disabled={busy || !value.trim()}
            className="h-12 rounded-xl bg-teal-300 px-5 text-sm font-bold text-[#06201F] hover:bg-teal-200"
          >
            <Search className="h-4 w-4" />
            {busy ? "Checking…" : "Check sample"}
          </Button>
        </div>
      </form>

      <div className={`mt-6 min-h-[168px] rounded-2xl border p-5 transition-colors duration-500 ${result ? `${styles.border} ${styles.bg}` : "border-teal-300/10 bg-white/[0.025]"}`}>
        {busy ? (
          <div className="flex h-32 flex-col items-center justify-center gap-3 text-teal-200">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-teal-300/20 border-t-teal-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">Analyzing sample</span>
          </div>
        ) : result ? (
          <div className="preview-enter">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-lg font-bold ${styles.text}`}>{result.verdict}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-teal-100/65">{result.detail}</p>
              </div>
              <span className={`font-display text-5xl leading-none ${styles.text}`}>{result.score}</span>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full rounded-full transition-[width] duration-700 ${styles.bar}`} style={{ width: `${result.score}%` }} />
            </div>
          </div>
        ) : (
          <div className="flex h-32 flex-col items-center justify-center text-center">
            <ShieldCheck className="h-6 w-6 text-teal-300/60" strokeWidth={1.5} />
            <p className="mt-3 text-sm text-teal-100/55">Your verdict will appear here.</p>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-teal-200/45">
        Local rule-based demo only — it does not perform MauSafe’s production AI or Trustpilot analysis.
      </p>
    </PreviewFrame>
  );
}

function SosPreview() {
  const [progress, setProgress] = useState(0);
  const [sent, setSent] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = () => {
    if (interval.current) clearInterval(interval.current);
    interval.current = null;
  };

  useEffect(() => clear, []);

  const start = () => {
    clear();
    setSent(false);
    setProgress(0);
    const started = Date.now();
    interval.current = setInterval(() => {
      const next = Math.min(((Date.now() - started) / 1400) * 100, 100);
      setProgress(next);
      if (next >= 100) {
        clear();
        setSent(true);
      }
    }, 30);
  };

  const stop = () => {
    clear();
    if (!sent) setProgress(0);
  };

  return (
    <PreviewFrame label="Emergency SOS">
      <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center">
          <button
            type="button"
            onPointerDown={start}
            onPointerUp={stop}
            onPointerLeave={stop}
            onPointerCancel={stop}
            onKeyDown={(event) => {
              if ((event.key === " " || event.key === "Enter") && !event.repeat) {
                event.preventDefault();
                start();
              }
            }}
            onKeyUp={(event) => {
              if (event.key === " " || event.key === "Enter") stop();
            }}
            className="relative flex h-32 w-32 touch-none select-none flex-col items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_20px_50px_-20px_rgba(244,63,94,0.5)] outline-none ring-rose-300/40 transition-transform focus-visible:ring-4 active:scale-95"
            aria-label="Hold to preview an SOS alert"
          >
            <span className="absolute inset-2 rounded-full border border-white/25" style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }} />
            <Siren className="h-7 w-7" />
            <span className="mt-1 font-mono text-sm font-bold tracking-[0.18em]">{sent ? "READY" : "HOLD"}</span>
          </button>
          <p className="mt-4 max-w-40 text-center text-xs leading-relaxed text-teal-100/55">
            Hold for 1.4 seconds to preview. No alert is sent.
          </p>
        </div>

        <div className="space-y-3">
          {["Amina · Sister", "Kaushal · Brother", "Divesh · Friend"].map((contact, i) => (
            <div key={contact} className="flex items-center justify-between gap-3 rounded-xl border border-teal-300/10 bg-white/[0.035] px-4 py-3.5">
              <span className="text-sm text-teal-50/85">{contact}</span>
              <span className={`flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] ${sent ? "text-emerald-300" : "text-teal-200/40"}`}>
                {sent ? <Check className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
                {sent ? "Preview sent" : progress > 0 ? `Preparing ${Math.round(progress)}%` : `Contact 0${i + 1}`}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-2 text-xs text-teal-100/55">
            <MapPin className="h-4 w-4 text-teal-300" />
            {sent ? "Location included in this preview" : "Live location would be included"}
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

const havens = [
  { name: "Maple Corner Café", type: "Café", distance: "120 m", open: true },
  { name: "Port Louis Community Shop", type: "Shop", distance: "350 m", open: true },
  { name: "Harbour Bookstore", type: "Shop", distance: "600 m", open: false },
];

function HavenPreview() {
  const [openOnly, setOpenOnly] = useState(false);
  const visible = openOnly ? havens.filter((haven) => haven.open) : havens;

  return (
    <PreviewFrame label="Safe havens">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal-200/60">Nearby preview</p>
          <p className="mt-1 text-sm text-teal-50">Port Louis · sample area</p>
        </div>
        <button
          type="button"
          aria-pressed={openOnly}
          onClick={() => setOpenOnly((value) => !value)}
          className={`rounded-full border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${openOnly ? "border-emerald-300/40 bg-emerald-400/15 text-emerald-300" : "border-teal-300/15 text-teal-100/60 hover:bg-white/5"}`}
        >
          Open now
        </button>
      </div>

      <div className="relative mt-5 h-40 overflow-hidden rounded-2xl border border-teal-300/10 bg-[#0A2B29]">
        <svg viewBox="0 0 600 200" className="h-full w-full" aria-hidden="true">
          <path d="M-20 145 C 120 70, 230 180, 640 85" fill="none" stroke="#16413C" strokeWidth="28" strokeLinecap="round" />
          <path d="M160 -20 C 135 55, 210 120, 160 220" fill="none" stroke="#16413C" strokeWidth="23" />
          <path d="M440 -20 C 405 65, 490 140, 435 230" fill="none" stroke="#16413C" strokeWidth="23" />
          <path d="M175 155 C 235 110, 310 130, 410 62" fill="none" stroke="#5EEAD4" strokeWidth="4" strokeDasharray="3 12" strokeLinecap="round" />
        </svg>
        <span className="absolute left-[27%] top-[70%] flex h-4 w-4"><span className="absolute h-4 w-4 animate-ping rounded-full bg-teal-300/40" /><span className="relative h-4 w-4 rounded-full border-2 border-white bg-teal-400" /></span>
        <span className="absolute left-[66%] top-[22%] flex h-9 w-9 items-center justify-center rounded-full bg-[#06201F] ring-2 ring-teal-300/30"><MapPin className="h-4 w-4 text-teal-300" /></span>
      </div>

      <div className="mt-4 space-y-2">
        {visible.map((haven) => (
          <div key={haven.name} className="preview-enter flex items-center gap-3 rounded-xl bg-white/[0.035] px-4 py-3">
            <Store className="h-4 w-4 shrink-0 text-teal-300" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-teal-50">{haven.name}</p>
              <p className="text-xs text-teal-100/45">{haven.type} · {haven.distance}</p>
            </div>
            <span className={`font-mono text-[9px] uppercase ${haven.open ? "text-emerald-300" : "text-teal-200/40"}`}>
              {haven.open ? "Open" : "Closed"}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-teal-200/45">Illustrative places for the product preview.</p>
    </PreviewFrame>
  );
}

function CallPreview() {
  const [verified, setVerified] = useState(true);

  return (
    <PreviewFrame label="Call detection">
      <div className="flex justify-center gap-2 rounded-xl bg-white/[0.035] p-1.5">
        <button type="button" onClick={() => setVerified(true)} className={`flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${verified ? "bg-teal-300 text-[#06201F]" : "text-teal-100/55 hover:text-teal-50"}`}>Registry match</button>
        <button type="button" onClick={() => setVerified(false)} className={`flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${!verified ? "bg-rose-400 text-[#06201F]" : "text-teal-100/55 hover:text-teal-50"}`}>Unknown number</button>
      </div>

      <div key={String(verified)} className="preview-enter mt-8 flex flex-col items-center text-center">
        <span className={`flex h-20 w-20 items-center justify-center rounded-full ${verified ? "bg-emerald-400/15 ring-4 ring-emerald-300/10" : "bg-rose-400/15 ring-4 ring-rose-300/10"}`}>
          <PhoneIncoming className={`h-8 w-8 ${verified ? "text-emerald-300" : "text-rose-300"}`} />
        </span>
        <p className="mt-5 text-xl font-bold text-teal-50">{verified ? "Bank of Mau" : "+230 5•• •• •••"}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-teal-200/50">Incoming call · example</p>
        <div className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${verified ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20" : "bg-rose-400/10 text-rose-300 ring-1 ring-rose-300/20"}`}>
          {verified ? <ShieldCheck className="h-4 w-4" /> : <ShieldAlert className="h-4 w-4" />}
          {verified ? "Verified caller" : "No registry match"}
        </div>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-teal-100/55">
          {verified
            ? "This sample matches an official business registry entry."
            : "This sample cannot be verified. Let it go to voicemail if you were not expecting it."}
        </p>
      </div>
    </PreviewFrame>
  );
}

function ActivePreview({ id }: { id: string }) {
  if (id === "sos") return <SosPreview />;
  if (id === "safe-havens") return <HavenPreview />;
  if (id === "call-detection") return <CallPreview />;
  return <ScamPreview />;
}

export function FeatureExplorer() {
  const [active, setActive] = useState(features[0].id);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1);
      if (features.some((feature) => feature.id === hash)) setActive(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <h2 className="text-balance text-5xl leading-[0.95] text-foreground sm:text-7xl lg:col-span-8">
              Explore the <em className="text-primary">safety toolkit.</em>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:col-span-4">
              Choose a capability, then try its interactive product preview.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Tabs value={active} onValueChange={setActive} className="mt-12 sm:mt-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <TabsList className="flex h-auto w-full flex-col items-stretch gap-0 rounded-none bg-transparent p-0 lg:col-span-4">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    id={feature.id}
                    value={feature.id}
                    className="group relative h-auto justify-start whitespace-normal rounded-none border-t border-border bg-transparent px-4 py-5 text-left shadow-none transition-colors last:border-b hover:bg-white/60 data-[state=active]:bg-white data-[state=active]:shadow-none sm:px-5 sm:py-6"
                  >
                    <span
                      className="absolute bottom-0 left-0 top-0 w-1 origin-top scale-y-0 transition-transform duration-300 group-data-[state=active]:scale-y-100"
                      style={{ backgroundColor: feature.color }}
                    />
                    <span className="grid w-full grid-cols-[auto_1fr] gap-4">
                      <span className="font-mono text-[10px] text-muted-foreground">{feature.number}</span>
                      <span>
                        <span className="block font-display text-3xl leading-none text-foreground">{feature.title}</span>
                        <span className="mt-2 block text-sm font-normal leading-relaxed text-muted-foreground">{feature.summary}</span>
                      </span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="lg:col-span-8">
                {features.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id} className="mt-0">
                    <div className="preview-enter">
                      <ActivePreview id={feature.id} />
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
