import { MouseGlow } from "./MouseGlow";
import { ParticleField } from "./ParticleField";

const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")`;

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      {/* Aurora — restrained, cool drifting fields */}
      <div className="animate-aurora-a absolute -left-[14%] -top-[20%] h-[40rem] w-[40rem] rounded-full bg-teal-300/15 blur-[120px]" />
      <div className="animate-aurora-b absolute -right-[16%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-emerald-200/15 blur-[120px]" />

      {/* Fading grid */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_55%_55%_at_50%_35%,black,transparent)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Connected particles */}
      <ParticleField
        className="absolute inset-0"
        density={16}
        dotColor="rgba(20, 184, 166, 0.26)"
        linkColor="rgba(20, 184, 166, 0.08)"
        maxDistance={100}
      />

      {/* Cursor halo */}
      <MouseGlow />
    </div>
  );
}
