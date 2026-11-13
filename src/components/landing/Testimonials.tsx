import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "MauSafe flagged a fake 'bank' message before I clicked. That trust score genuinely saved me from a scam.",
    name: "Maya K.",
    role: "Community member",
    initials: "MK",
    color: "bg-teal-600",
  },
  {
    quote:
      "The SOS button gives me peace of mind when I walk home late. My sister gets my location instantly.",
    name: "Amina D.",
    role: "University student",
    initials: "AD",
    color: "bg-amber-500",
  },
  {
    quote:
      "We added our shop as a Safe Haven. It feels good to know our sticker is a signal that people can find help here.",
    name: "Sara L.",
    role: "Café owner",
    initials: "SL",
    color: "bg-rose-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Loved by our community
          </span>
          <h2 className="text-balance mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Real stories, real peace of mind
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm"
            >
              <Quote className="h-7 w-7 text-teal-200" />
              <div className="mt-4 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground sm:text-base">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-xs font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
