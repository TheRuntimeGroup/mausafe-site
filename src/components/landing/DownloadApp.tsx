import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { FlagStripe } from "./FlagStripe";
import { APK_URL } from "@/lib/download";

export function DownloadApp() {
  return (
    <section id="download" className="bg-[var(--flag-green)] text-white">
      <FlagStripe className="h-1.5 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal direction="left" className="lg:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            Android APK / Free download
          </p>
          <h2 className="text-balance mt-5 text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.9]">
            Ready when <em className="text-[var(--flag-yellow)]">it matters.</em>
          </h2>
        </Reveal>

        <Reveal direction="right" delay={120} className="lg:col-span-4">
          <p className="max-w-sm text-base leading-relaxed text-white/80">
            Get the hackathon build on your Android phone and put four safety
            tools within reach.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 h-14 w-full rounded-xl bg-white px-7 text-sm font-bold text-[var(--ink)] hover:bg-white/90 sm:w-auto"
          >
            <a href={APK_URL}>
              <Download className="h-5 w-5" />
              Download APK
            </a>
          </Button>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/65">
            Direct Android download. Allow installs from unknown sources when
            your phone asks. iOS is coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
