"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  as?: React.ElementType;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  variant?: "default" | "tilt";
  once?: boolean;
}>;

export default function Reveal({
  as = "div",
  delayMs = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  className = "",
  variant = "default",
  once = true,
  children,
}: RevealProps) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    if (hasAppeared && once) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      setHasAppeared(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              setVisible(true);
              setHasAppeared(true);
            }, Math.max(0, delayMs));
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs, threshold, rootMargin, once, hasAppeared]);

  const base = variant === "tilt" ? "reveal-tilt" : "reveal";
  const classes = `${base} ${visible ? "is-visible" : ""} ${className}`.trim();

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={classes}>
      {children}
    </Tag>
  );
}

