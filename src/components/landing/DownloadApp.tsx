import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FlagStripe } from "./FlagStripe";
import { Magnetic } from "./Magnetic";
import { APK_URL, APP_URL } from "@/lib/download";

export function DownloadApp() {
  return (
    <section id="download" className="bg-[var(--flag-green)] text-white">
      <FlagStripe className="h-1.5 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal direction="left" className="lg:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            Web app + Android APK
          </p>
          <h2 className="text-balance mt-5 text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.9]">
            Ready when <em className="text-[var(--flag-yellow)]">it matters.</em>
          </h2>
        </Reveal>

        <Reveal direction="right" delay={120} className="lg:col-span-4">
          <p className="max-w-sm text-base leading-relaxed text-white/80">
            Open MauSafe in your browser or install the Android build. Four
            safety tools, ready when you need them.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Magnetic className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="group h-14 w-full rounded-xl bg-white px-7 text-sm font-bold text-[var(--ink)] hover:bg-white/90 sm:w-auto"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Try MauSafe online
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-xl border-white/30 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <a href={APK_URL}>
                <Download className="h-5 w-5" />
                Download APK
              </a>
            </Button>
          </div>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/65">
            Available in your browser and on Android. APK installs require
            allowing unknown sources. Native iOS app coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
