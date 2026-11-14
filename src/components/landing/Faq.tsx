import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Can I try MauSafe right now?",
    a: "Yes. Use the “Try MauSafe online” button to open the live web app, or download the Android APK from this page. Browser access does not require installation.",
  },
  {
    q: "How do I install the Android APK?",
    a: "Download the APK and open it on your Android phone. Android will ask you to allow installs from your browser or unknown sources before installing. Only use the download link provided on this site.",
  },
  {
    q: "What do the interactive previews on this page do?",
    a: "They are local product demonstrations. The scam checker uses simple demo rules, SOS never sends a real alert, and the places and callers shown are illustrative. Use the live app for the actual MauSafe experience.",
  },
  {
    q: "How does scam detection work in MauSafe?",
    a: "The product concept combines AI signals, known threat patterns, and Trustpilot review signals to help assess suspicious messages and links before you trust them.",
  },
  {
    q: "Who built MauSafe?",
    a: "MauSafe was built by DEAD SIGNAL, a student team from Polytechnics Mauritius, for the “Life Powered by Tech” 24-hour hackathon organised by Middlesex University.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Good to know
            </p>
            <h2 className="mt-4 text-5xl leading-[0.95] text-foreground sm:text-6xl">
              Questions, <em className="text-primary">answered.</em>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
              Access, installation, and what you can try on this site.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline sm:text-xl">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
