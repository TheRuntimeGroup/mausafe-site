import { ArrowUpRight, Download } from "lucide-react";
import { Logo } from "./Logo";
import { APK_URL, APP_URL } from "@/lib/download";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Calm, practical safety tools designed by students in Mauritius.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">Explore</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="#features" className="hover:text-primary">Features</a>
                <a href="#how-it-works" className="hover:text-primary">How it works</a>
                <a href="#team" className="hover:text-primary">Team</a>
                <a href="#faq" className="hover:text-primary">FAQ</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">Get MauSafe</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                  Open web app <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a href={APK_URL} className="inline-flex items-center gap-1.5 hover:text-primary">
                  Android APK <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:text-right">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">DEAD SIGNAL</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Polytechnics Mauritius<br />Middlesex University · 24HR</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MauSafe · DEAD SIGNAL</p>
          <a href="#top" className="font-bold text-foreground hover:text-primary">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
