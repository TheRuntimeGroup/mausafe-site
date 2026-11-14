import { Reveal } from "./Reveal";

const members = [
  { name: "Sulakshna Devi Chinniah", role: "Team leader" },
  { name: "Vencatasen Vrishni", role: "Team member" },
  { name: "Lallbeeharry Kaushal", role: "Team member" },
  { name: "Mandhub Divesh", role: "Team member" },
];

const facts = [
  { label: "Group", value: "DEAD SIGNAL" },
  { label: "Institution", value: "Polytechnics Mauritius" },
  { label: "Event", value: "Life Powered by Tech" },
  { label: "Organiser", value: "Middlesex University" },
];

export function Team() {
  return (
    <section id="team" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <h2 className="text-balance text-5xl leading-[0.95] text-foreground sm:text-7xl lg:col-span-8">
              Four students. <em className="text-primary">24 hours.</em>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:col-span-4">
              A Mauritian student team turning one simple idea into a working
              safety app.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal direction="left" className="lg:col-span-4">
            <div className="border-t border-border">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-border py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            {members.map((member, i) => (
              <Reveal key={member.name} delay={i * 90} direction="right">
                <div className="flex items-center justify-between gap-4 border-t border-border py-5 last:border-b sm:py-6">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {member.name}
                  </h3>
                  <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
