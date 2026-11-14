import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { FlagStripe } from "./FlagStripe";
import { APP_URL } from "@/lib/download";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#team", label: "Team" },
  { href: "#download", label: "Download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-border/60 bg-background/80 backdrop-blur-sm",
      )}
    >
      <FlagStripe className="h-1 w-full" />
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="MauSafe home">
          <Logo />
        </a>

        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            size="sm"
            className="hidden h-10 rounded-xl px-4 text-xs font-semibold md:inline-flex"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Try the app
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-5 h-12 w-full rounded-xl text-sm font-semibold">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Try the app
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
