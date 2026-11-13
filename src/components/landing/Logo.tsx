import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/logo.png"
        alt="MauSafe"
        draggable={false}
        className="h-9 w-auto object-contain sm:h-10"
      />
    </span>
  );
}
