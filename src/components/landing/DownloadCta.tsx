import { ShieldCheck } from "lucide-react";
import { StoreBadges } from "./store-badges";

export function DownloadCta() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-teal-800 px-6 py-16 text-center shadow-[0_32px_80px_-24px_rgba(15,118,110,0.6)] sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal-600/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-teal-500/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <h2 className="text-balance mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to feel safer every day?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-teal-100 sm:text-lg">
              Download MauSafe and let protection work quietly in the background
              — so you can focus on living, not worrying.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges variant="dark" />
            </div>
            <p className="mt-6 text-xs text-teal-200/80">
              Free to download · Available on iOS & Android
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
