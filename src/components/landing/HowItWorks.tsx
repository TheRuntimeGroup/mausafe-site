import { Download, Users, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & set up",
    description:
      "Install MauSafe, allow the safety permissions, and it quietly starts monitoring in the background.",
  },
  {
    icon: Users,
    step: "02",
    title: "Add your people",
    description:
      "Choose your trusted emergency contacts and personalize how and when alerts are sent.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Stay protected",
    description:
      "MauSafe checks scams, verifies calls, and alerts you — automatically, around the clock.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="text-balance mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Up and protecting you in minutes
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px bg-teal-100 md:block"
          />
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-3xl border border-border bg-white p-7 text-center shadow-sm"
            >
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-primary ring-8 ring-background">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="mt-5 inline-block font-display text-sm font-bold text-teal-200">
                {step.step}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
