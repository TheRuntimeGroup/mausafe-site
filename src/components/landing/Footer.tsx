import { ArrowUpRight, Download } from "lucide-react";
import { Logo } from "./Logo";
import { FlagStripe } from "./FlagStripe";
import { APK_URL, APP_URL } from "@/lib/download";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <FlagStripe className="h-1 w-full" />
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four essential safety tools, built by Mauritian students.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 md:col-span-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Explore
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm font-medium">
                <a href="#features" className="hover:text-primary">Features</a>
                <a href="#team" className="hover:text-primary">Team</a>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary"
              >
                Try online
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={APK_URL}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Android APK
              </a>
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground md:col-span-3 md:text-right">
            Polytechnics Mauritius
            <br />
            Middlesex University · 24HR
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} MauSafe · DEAD SIGNAL
        </div>
      </div>
    </footer>
  );
}
