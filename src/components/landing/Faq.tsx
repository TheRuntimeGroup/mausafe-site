import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Can I use MauSafe right now?",
    a: "Yes. Open the live web app with “Try MauSafe online”, or download the Android APK. The web app works directly in your browser without installation.",
  },
  {
    q: "How do I install the Android APK?",
    a: "Download and open the APK on your Android phone. Android will ask you to allow installs from your browser or unknown sources. Only download the APK using the link on this site.",
  },
  {
    q: "What is the difference between the web app and APK?",
    a: "Both provide access to MauSafe. The web app is the quickest way to get started, while the APK gives Android users an installed experience. Capabilities may vary by device and build.",
  },
  {
    q: "Are the feature previews interactive?",
    a: "The feature cards are illustrative product previews. The Mauritian sculpture in the hero is interactive 3D. For the actual safety tools, open the live MauSafe app.",
  },
  {
    q: "Who created MauSafe?",
    a: "MauSafe was created by DEAD SIGNAL, a student team from Polytechnics Mauritius, for the “Life Powered by Tech” 24-hour hackathon organised by Middlesex University.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Need to know</p>
          <h2 className="mt-4 text-4xl leading-[1.04] sm:text-5xl">A few quick answers.</h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-background px-5 sm:px-7">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="py-5 text-left text-base font-extrabold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 text-sm leading-relaxed text-muted-foreground">
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
