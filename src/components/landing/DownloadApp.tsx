import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { APK_URL, APP_URL } from "@/lib/download";

export function DownloadApp() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--navy)] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[48px] border-white/[0.035]" />
            <div className="absolute -bottom-28 right-32 h-64 w-64 rounded-full border-[48px] border-white/[0.025]" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-bold text-white/75 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Web + Android
                </span>
                <h2 className="text-balance mt-6 text-4xl leading-[1.03] sm:text-6xl">
                  Peace of mind, right in your pocket.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
                  Open MauSafe in your browser or take it with you on Android.
                  Four essential safety tools, ready when you need them.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                <Magnetic className="w-full sm:w-auto lg:w-full">
                  <Button asChild size="lg" className="h-12 w-full rounded-xl bg-white px-6 text-sm font-extrabold text-[var(--navy)] hover:bg-white/90">
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      Try MauSafe online
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-white/15 bg-transparent px-6 text-sm font-extrabold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={APK_URL}>
                    <Download className="h-4 w-4" />
                    Download APK
                  </a>
                </Button>
              </div>
            </div>
            <p className="relative mt-8 text-[11px] leading-relaxed text-white/40">
              APK installation requires allowing installs from unknown sources. Browser access works without installation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
