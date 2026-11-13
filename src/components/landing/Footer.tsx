import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: ["Features", "Safe havens", "How it works", "Download"],
    hrefs: ["#features", "#safe-havens", "#how-it-works", "#download"],
  },
  {
    title: "Company",
    links: ["About", "Community", "Partners"],
    hrefs: ["#", "#", "#"],
  },
  {
    title: "Support",
    links: ["Help center", "Privacy", "Terms"],
    hrefs: ["#faq", "#", "#"],
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
              Your calm companion for staying safe, staying alert, and getting
              help when it matters most.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
            © {new Date().getFullYear()} MauSafe. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care for safer communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
