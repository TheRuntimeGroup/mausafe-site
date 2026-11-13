import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How does the scam check work?",
    a: "When you paste an SMS or link, MauSafe analyzes it with AI and cross-references it against Trustpilot reviews and known threat patterns. You get a clear trust score and a warning if anything looks suspicious.",
  },
  {
    q: "Will the SOS button alert my contacts automatically?",
    a: "Yes. Hold the SOS button and MauSafe instantly sends your live location and a help message to the custom emergency contacts you've added — no typing required.",
  },
  {
    q: "What is a Safe Haven?",
    a: "Safe Havens are verified local shops, cafés, and community spaces that display a MauSafe sticker. You can open the map to find and navigate to the nearest one whenever you feel unsafe.",
  },
  {
    q: "How does call detection know if a caller is legitimate?",
    a: "MauSafe checks incoming numbers in the background against official registries — including banks and trusted businesses — and shows you a verification badge before you answer.",
  },
  {
    q: "Is MauSafe available to download?",
    a: "Not yet. MauSafe is currently a student concept from Polytechnics Mauritius, built by the DEAD SIGNAL team. The team is working to bring the prototype to life.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            08 · FAQ
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Questions, answered
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="rounded-[1.75rem] border border-border bg-white px-6 shadow-sm"
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className={i === faqs.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
