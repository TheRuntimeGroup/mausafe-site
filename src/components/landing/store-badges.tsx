import { cn } from "@/lib/utils";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" aria-hidden="true">
      <path
        d="M4.2 2.6c-.4.3-.7.9-.7 1.5v15.8c0 .6.3 1.2.7 1.5l.1.1 8.8-8.8v-.4L4.3 2.5l-.1.1Z"
        fill="currentColor"
        opacity=".85"
      />
      <path
        d="m15.9 15.6-3-3v-.9l3-3 .1.1 3.6 2c1 .6 1 1.5 0 2.1l-3.6 2-.1-.3Z"
        fill="currentColor"
        opacity=".6"
      />
      <path
        d="m15.9 15.3-2.9-2.9L4.2 21.4c.4.4 1 .5 1.6.1l10.1-6.2Z"
        fill="currentColor"
        opacity=".7"
      />
      <path
        d="M15.9 8.7 5.8 2.5c-.6-.4-1.2-.3-1.6.1l12.9 12.9.7-.7c.8-.5.8-1.5 0-2.1l-1.9-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

type StoreBadgeProps = {
  variant: "light" | "dark";
  className?: string;
};

export function StoreBadges({ variant = "light", className }: StoreBadgeProps) {
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-left transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const lightClasses = "bg-foreground text-white hover:bg-foreground/90";
  const darkClasses = "bg-white text-foreground hover:bg-white/95";
  const theme = variant === "light" ? lightClasses : darkClasses;

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a href="#download" className={cn(base, theme)}>
        <AppleIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] font-medium opacity-80">Download on the</span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </a>
      <a href="#download" className={cn(base, theme)}>
        <GooglePlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] font-medium opacity-80">Get it on</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
