const items = [
  "Scam check",
  "SOS alerts",
  "Safe havens",
  "Call detection",
  "Trust scores",
];

export function Marquee() {
  const row = [...items, ...items, ...items, ...items];

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-teal-900/20 bg-teal-900 py-4"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal-200"
          >
            <span className="px-7">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
