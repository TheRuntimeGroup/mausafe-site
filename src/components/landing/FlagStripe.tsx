import { cn } from "@/lib/utils";

export function FlagStripe({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("grid grid-cols-4", className)}>
      <span className="bg-[var(--flag-red)]" />
      <span className="bg-[var(--flag-blue)]" />
      <span className="bg-[var(--flag-yellow)]" />
      <span className="bg-[var(--flag-green)]" />
    </div>
  );
}
