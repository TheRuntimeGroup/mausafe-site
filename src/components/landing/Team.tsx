import { Reveal } from "./Reveal";

const members = [
  { name: "Sulakshna Devi Chinniah", role: "Team leader", initials: "SC" },
  { name: "Vencatasen Vrishni", role: "Team member", initials: "VV" },
  { name: "Lallbeeharry Kaushal", role: "Team member", initials: "LK" },
  { name: "Mandhub Divesh", role: "Team member", initials: "MD" },
];

const facts = [
  { label: "Group", value: "DEAD SIGNAL" },
  { label: "Institution", value: "Polytechnics Mauritius" },
  { label: "Event", value: "24HR Hackathon · Middlesex University" },
];

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            04 — The team
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold leading-tight text-foreground sm:text-[2.5rem]">
            Brought to life by DEAD SIGNAL
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A student team from Polytechnics Mauritius, competing in the “Life
            Powered by Tech” 24-hour hackathon organised by Middlesex
            University.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {fact.label}
                </span>
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <article key={member.name} className="bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-xs font-semibold text-secondary-foreground">
                  {member.initials}
                </span>
                <h3 className="mt-5 text-sm font-semibold leading-snug text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
