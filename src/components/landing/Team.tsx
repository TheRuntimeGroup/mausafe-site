import { BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const members = [
  { name: "Sulakshna Devi Chinniah", role: "Team Leader", initials: "SC", leader: true },
  { name: "Vencatasen Vrishni", role: "Team Member", initials: "VV", leader: false },
  { name: "Lallbeeharry Kaushal", role: "Team Member", initials: "LK", leader: false },
  { name: "Mandhub Divesh", role: "Team Member", initials: "MD", leader: false },
];

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[360px] w-[360px] rounded-full bg-teal-200/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            07 · The team
          </p>
          <h2 className="text-balance mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Brought to life by DEAD SIGNAL
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A student team from Polytechnics Mauritius, competing in the
            “Life Powered by Tech” 24-hour hackathon organised by Middlesex
            University.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid opacity-40"
            />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Group name
                </span>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  DEAD <span className="text-primary">SIGNAL</span>
                </p>
              </div>
              <div className="h-px w-full max-w-[180px] bg-border sm:hidden" />
              <div className="sm:text-right">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Institution
                </span>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  Polytechnics Mauritius
                </p>
                <p className="text-sm text-muted-foreground">
                  24HR Hackathon · Middlesex University
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col items-center rounded-[1.75rem] border border-border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-200/70 hover:shadow-[0_24px_60px_-32px_rgba(15,23,42,0.14)]">
                <div className="relative">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl font-display text-lg font-bold text-white ${
                      member.leader ? "bg-primary" : "bg-[#0B3B37]"
                    }`}
                  >
                    {member.initials}
                  </span>
                  {member.leader && (
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                      <BadgeCheck className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-sm font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
