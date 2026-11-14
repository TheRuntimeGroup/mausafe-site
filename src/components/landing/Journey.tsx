import { ArrowUpRight, Download, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { APK_URL, APP_URL } from "@/lib/download";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Open MauSafe",
    text: "Start immediately in your browser. No installation is needed to try the live app.",
    action: "Try online",
    href: APP_URL,
    external: true,
  },
  {
    number: "02",
    icon: Users,
    title: "Set up your circle",
    text: "Add the people you trust, review your safety tools, and make them ready before an emergency.",
    action: "Explore features",
    href: "#features",
    external: false,
  },
  {
    number: "03",
    icon: Download,
    title: "Keep it close",
    text: "Install the Android build for quick access, or come back to the web app whenever you need it.",
    action: "Get the APK",
    href: APK_URL,
    external: false,
  },
];

export function Journey() {
  return (
    <section id="how-it-works" className="border-y border-border bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <h2 className="text-balance text-5xl leading-[0.95] text-foreground sm:text-7xl lg:col-span-8">
              From first tap to <em className="text-primary">peace of mind.</em>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:col-span-4">
              Two ways to access MauSafe, one straightforward setup.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-border lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <article
                className={`relative h-full border-b border-border py-8 lg:border-b-0 ${
                  i === 0
                    ? "lg:pr-8"
                    : i === steps.length - 1
                      ? "lg:border-l lg:border-border lg:pl-8"
                      : "lg:border-l lg:border-border lg:px-8"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl leading-none text-border">{step.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-7 text-3xl text-foreground">{step.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-5 h-auto p-0 text-sm font-bold text-primary"
                >
                  <a
                    href={step.href}
                    {...(step.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {step.action}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
