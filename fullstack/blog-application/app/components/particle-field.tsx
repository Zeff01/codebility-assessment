"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.35,
  vy: (Math.random() - 0.5) * 0.35,
  size: Math.random() * 2 + 0.5,
  alpha: Math.random() * 0.6 + 0.2,
});

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ParticleField({ density = 90 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      return;
    }

    let animationFrame: number;
    const pointer: PointerState = { x: 0, y: 0, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    let particles: Particle[] = Array.from({ length: density }, () => createParticle(canvas.width, canvas.height));

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          Object.assign(particle, createParticle(canvas.width, canvas.height));
        }

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = clamp(120 / distance, 0, 0.8);
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
        } else {
          particle.vx *= 0.99;
          particle.vy *= 0.99;
        }

        particle.vx = clamp(particle.vx, -0.8, 0.8);
        particle.vy = clamp(particle.vy, -0.8, 0.8);

        ctx.beginPath();
        ctx.fillStyle = `rgba(90, 94, 104, ${particle.alpha})`;
        ctx.shadowColor = "rgba(255,255,255,0.4)";
        ctx.shadowBlur = 12;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />;
}
