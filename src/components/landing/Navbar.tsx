import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/download";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="MauSafe home" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden h-10 rounded-xl px-4 text-xs font-bold sm:inline-flex">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Try MauSafe
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base font-semibold text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-5 h-12 w-full rounded-xl text-sm font-bold">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Try MauSafe
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
