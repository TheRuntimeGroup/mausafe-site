import { Logo } from "./Logo";

const columns = [
  {
    title: "Concept",
    links: ["Overview", "Capabilities", "Team", "FAQ"],
    hrefs: ["#concept", "#features", "#team", "#faq"],
  },
  {
    title: "Features",
    links: ["Scam check", "Emergency SOS", "Safe havens", "Call detection"],
    hrefs: ["#scam-check", "#sos", "#safe-havens", "#call-detection"],
  },
  {
    title: "Credits",
    links: ["DEAD SIGNAL", "Polytechnics Mauritius", "Student project"],
    hrefs: ["#team", "#team", "#concept"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A safety companion concept that scans scams, triggers SOS alerts,
              maps safe havens, and verifies calls.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MauSafe · DEAD SIGNAL
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Concept app · Polytechnics Mauritius
          </p>
        </div>
      </div>
    </footer>
  );
}
