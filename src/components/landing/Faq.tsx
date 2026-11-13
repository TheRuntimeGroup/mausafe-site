import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the scam check work?",
    a: "When you paste an SMS or link, MauSafe analyzes it with AI and cross-references it against Trustpilot reviews and known threat databases. You get a clear trust score and a warning if anything looks suspicious.",
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
    q: "Is my personal data kept private?",
    a: "Your safety is personal, so we treat it that way. Location and contact data are only used for the alerts you trigger, and are never sold to third parties.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="text-balance mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-3xl border border-border bg-white px-6 shadow-sm"
        >
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
