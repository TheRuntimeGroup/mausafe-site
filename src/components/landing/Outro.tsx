import { ArrowUpRight, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Outro() {
  return (
    <section id="launch" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#06201F] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-30" />
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300 ring-1 ring-teal-300/20">
                <Radio className="h-7 w-7" />
              </span>

              <h2 className="text-balance mt-6 text-3xl font-bold text-white sm:text-4xl">
                Stay on signal. Stay safe.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-teal-100/80 sm:text-lg">
                MauSafe is a student concept in active development — built by
                the DEAD SIGNAL team at Polytechnics Mauritius.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href="#team">
                    Meet the team
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-teal-300/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
                  <a href="#concept">Explore the concept</a>
                </Button>
              </div>

              <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-teal-200/80 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                Coming soon to iOS & Android
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
