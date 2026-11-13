import { Logo } from "./Logo";

const columns = [
  {
    title: "Explore",
    links: ["Features", "Highlights", "Team"],
    hrefs: ["#features", "#scam-check", "#team"],
  },
  {
    title: "Features",
    links: ["Scam check", "Emergency SOS", "Safe havens", "Call detection"],
    hrefs: ["#scam-check", "#sos", "#features", "#features"],
  },
  {
    title: "Credits",
    links: ["DEAD SIGNAL", "Polytechnics Mauritius", "Middlesex University"],
    hrefs: ["#team", "#team", "#team"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A safety companion concept that scans scams, triggers SOS alerts,
              maps safe havens, and verifies calls.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MauSafe · DEAD SIGNAL
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            24HR Hackathon · Middlesex University
          </p>
        </div>
      </div>
    </footer>
  );
}
