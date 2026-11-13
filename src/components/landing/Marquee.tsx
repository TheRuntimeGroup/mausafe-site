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
      className="relative overflow-hidden border-y border-teal-300/10 bg-[#06201F] py-4"
    >
      <div className="flex w-max animate-marquee [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
