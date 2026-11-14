import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { APK_URL } from "@/lib/download";

export function DownloadApp() {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal direction="scale">
          <div className="rounded-3xl bg-[#06201F] px-6 py-16 text-center sm:px-12 sm:py-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300">
              02 — Download
            </p>
            <h2 className="text-balance mx-auto mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-[2.5rem]">
              Try MauSafe on Android.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-teal-100/75 sm:text-base">
              Download the hackathon build as an APK and test scam checks,
              one-tap SOS, safe havens, and call detection on your phone.
            </p>

            <div className="mt-9 flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-full bg-white px-7 text-sm font-semibold text-[#06201F] hover:bg-teal-50 sm:w-auto"
              >
                <a href={APK_URL}>
                  <Download className="h-4 w-4" />
                  Download APK for Android
                </a>
              </Button>
            </div>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-teal-200/60">
              Free download · Android only · iOS coming soon
            </p>

            <a
              href="#team"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-teal-200 transition-colors hover:text-white"
            >
              Built by DEAD SIGNAL
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
