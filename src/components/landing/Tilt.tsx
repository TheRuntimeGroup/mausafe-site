import {
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  glare?: boolean;
};

export function Tilt({
  children,
  className,
  max = 9,
  scale = 1.015,
  glare = true,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLSpanElement>(null);
  const moving = useRef(false);
  const [style, setStyle] = useState<CSSProperties>({
    transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    if (!moving.current) {
      moving.current = true;
      setStyle((s) => ({ ...s, transition: "transform 0.08s ease-out" }));
    }

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * max;
    const rotateY = (px - 0.5) * max;

    setStyle((s) => ({
      ...s,
      transform: `perspective(1100px) rotateX(${rotateX.toFixed(
        2,
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
    }));

    if (glareRef.current) {
      glareRef.current.style.opacity = "1";
      glareRef.current.style.setProperty("--gx", `${px * 100}%`);
      glareRef.current.style.setProperty("--gy", `${py * 100}%`);
    }
  };

  const handleLeave = () => {
    moving.current = false;
    setStyle({
      transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    });
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={cn("relative", className)}
    >
      {children}
      {glare && (
        <span
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-full opacity-0 mix-blend-soft-light transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(480px circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.75), transparent 55%)",
          }}
        />
      )}
    </div>
  );
}
