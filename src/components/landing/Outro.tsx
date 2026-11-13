import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Outro() {
  return (
    <section id="launch" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-3xl bg-[#06201F] px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300">
              MauSafe · Dead Signal
            </p>
            <h2 className="text-balance mx-auto mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-[2.5rem]">
              Stay on signal. Stay safe.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-teal-100/75 sm:text-base">
              A student concept in active development — built by the DEAD
              SIGNAL team at Polytechnics Mauritius.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-full bg-white px-6 text-sm font-medium text-[#06201F] hover:bg-teal-50 sm:w-auto"
              >
                <a href="#team">
                  Meet the team
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-full border-white/20 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <a href="#features">Explore the features</a>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-teal-200/60">
              Coming soon to iOS & Android
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
