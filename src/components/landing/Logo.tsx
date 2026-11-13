import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mausafe-shield" x1="4" y1="3" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.6c.38 0 .75.09 1.08.25l6.1 2.87c.52.24.86.76.86 1.34v5.75c0 4.06-2.57 7.78-6.53 9.46a3.32 3.32 0 0 1-3.02 0C5.53 20.67 3 16.95 3 12.81V7.06c0-.58.34-1.1.86-1.34l6.1-2.87c.33-.16.66-.25 1.04-.25Z"
        fill="url(#mausafe-shield)"
      />
      <path
        d="m8.3 12.35 2.35 2.35 5.05-5.05"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Mau<span className="text-primary">Safe</span>
      </span>
    </span>
  );
}
