import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale" | "tilt";
  delay?: number;
  blur?: boolean;
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  blur = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "",
    left: "from-left",
    right: "from-right",
    scale: "scale-in",
    tilt: "tilt-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        directionClass,
        blur && "reveal-blur",
        visible && "is-visible",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
