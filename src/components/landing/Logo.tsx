import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 3.2c.53 0 1.05.13 1.51.36l8.3 3.9c.7.33 1.16 1.04 1.16 1.83v7.75c0 5.5-3.48 10.52-8.82 12.8a4.5 4.5 0 0 1-4.3 0C8.51 27.56 5.03 22.54 5.03 17.04V9.29c0-.79.46-1.5 1.16-1.83l8.3-3.9c.46-.23.98-.36 1.51-.36Z"
        fill="#0F766E"
      />
      <path
        d="M11.2 16.35 14.4 19.6l6.8-6.9"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="8" r="2.4" fill="#5EEAD4" />
    </svg>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {!compact && (
        <span className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            MauSafe
          </span>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            DEAD SIGNAL
          </span>
        </span>
      )}
    </span>
  );
}
