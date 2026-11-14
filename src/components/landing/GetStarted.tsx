import { ArrowRight, Download, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { APP_URL } from "@/lib/download";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Open the app",
    text: "Start in your browser, with nothing to install.",
  },
  {
    number: "02",
    icon: Users,
    title: "Add your people",
    text: "Choose trusted contacts and prepare your safety tools.",
  },
  {
    number: "03",
    icon: Download,
    title: "Stay ready",
    text: "Use MauSafe online or install the Android build.",
  },
];

export function GetStarted() {
  return (
    <section id="how-it-works" className="border-y border-border bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Simple from the start</p>
            <h2 className="text-balance mt-4 text-4xl leading-[1.04] sm:text-5xl">Set up now. Feel prepared later.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              No complicated onboarding. Open MauSafe and take the first step toward a safer day.
            </p>
            <Button asChild className="mt-7 h-12 rounded-xl px-5 text-sm font-bold">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Start using MauSafe
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </Reveal>

          <ol className="space-y-4 lg:col-span-7 lg:pl-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100} direction="right">
                <li className="flex items-center gap-5 rounded-2xl border border-border bg-background p-5 sm:p-6">
                  <span className="font-mono text-xs font-semibold text-primary">{step.number}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-border">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
