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

      {/* Aurora — soft drifting color fields */}
      <div className="animate-aurora-a absolute -left-[12%] -top-[18%] h-[48rem] w-[48rem] rounded-full bg-teal-300/30 blur-[130px]" />
      <div className="animate-aurora-b absolute -right-[14%] top-[6%] h-[42rem] w-[42rem] rounded-full bg-emerald-300/25 blur-[130px]" />
      <div className="animate-aurora-c absolute -bottom-[22%] left-[20%] h-[46rem] w-[46rem] rounded-full bg-cyan-300/20 blur-[140px]" />

      {/* Fading grid */}
      <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Connected particles */}
      <ParticleField className="absolute inset-0" />

      {/* Cursor halo */}
      <MouseGlow />
    </div>
  );
}
