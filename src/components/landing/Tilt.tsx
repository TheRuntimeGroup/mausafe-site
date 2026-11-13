import {
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export function Tilt({ children, className, max = 9 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const moving = useRef(false);
  const [style, setStyle] = useState<CSSProperties>({
    transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",
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
      transform: `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
    }));
  };

  const handleLeave = () => {
    moving.current = false;
    setStyle({
      transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
