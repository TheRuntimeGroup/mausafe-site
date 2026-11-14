import { useEffect, useState } from "react";

const panels = [
  "var(--flag-red)",
  "var(--flag-blue)",
  "var(--flag-yellow)",
  "var(--flag-green)",
];

export function Intro() {
  const [visible, setVisible] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), 1950);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[100] overflow-hidden">
      <div className="grid h-full grid-cols-4">
        {panels.map((color, i) => (
          <span
            key={color}
            className="intro-panel block"
            style={{
              backgroundColor: color,
              animationDelay: `${650 + i * 130}ms`,
            }}
          />
        ))}
      </div>
      <div className="intro-brand absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl bg-background px-8 py-6 text-center shadow-2xl sm:px-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            Dead Signal presents
          </p>
          <p className="mt-2 font-display text-5xl leading-none text-foreground sm:text-6xl">
            MauSafe<span className="text-primary">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
