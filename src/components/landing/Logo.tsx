import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="MauSafe"
      draggable={false}
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <LogoMark className={compact ? "h-8" : "h-10"} />
    </span>
  );
}
