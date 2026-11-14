import { Reveal } from "./Reveal";

const members = [
  { name: "Sulakshna Devi Chinniah", role: "Team leader", initials: "SC" },
  { name: "Vencatasen Vrishni", role: "Team member", initials: "VV" },
  { name: "Lallbeeharry Kaushal", role: "Team member", initials: "LK" },
  { name: "Mandhub Divesh", role: "Team member", initials: "MD" },
];

export function Team() {
  return (
    <section id="team" className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">The people behind MauSafe</p>
          <h2 className="text-balance mt-4 text-4xl leading-[1.04] sm:text-5xl">Four students. One shared purpose.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            DEAD SIGNAL built MauSafe at Polytechnics Mauritius for the “Life Powered by Tech” 24-hour hackathon organised by Middlesex University.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/25">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-xs font-extrabold text-primary">
                  {member.initials}
                </span>
                <h3 className="mt-5 text-sm font-extrabold leading-relaxed text-foreground">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
