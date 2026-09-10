import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function TubuleLab() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    let raf = 0;
    let running = true;

    const draw = (time: number) => {
      if (!running) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cssW = wrap.clientWidth;
      const cssH = wrap.clientHeight;
      const w = Math.max(1, Math.floor(cssW * dpr));
      const h = Math.max(1, Math.floor(cssH * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);

      ctx.fillStyle = "#071122";
      ctx.fillRect(0, 0, cssW, cssH);

      const cx = cssW * 0.5;
      const top = Math.max(78, cssH * 0.22);
      const bot = cssH * 0.9;
      const len = bot - top;
      const tnorm = reduced ? 0.35 : (time % 2400) / 2400;
      const collapse = !reduced && tnorm > 0.78 && tnorm < 0.88;

      // soma
      ctx.beginPath();
      ctx.arc(cx, top - 8, 22, 0, Math.PI * 2);
      ctx.fillStyle = "#16304a";
      ctx.fill();
      ctx.strokeStyle = "#5ec4d4";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 6, top - 12, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#d4b45a";
      ctx.fill();

      // dendrites
      ctx.strokeStyle = "#5ec4d4";
      ctx.lineWidth = 1.2;
      for (const dir of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(cx, top - 18);
        ctx.quadraticCurveTo(cx + dir * 50, top - 50, cx + dir * 70, top - 28);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + dir * 36, top - 38);
        ctx.lineTo(cx + dir * 52, top - 58);
        ctx.stroke();
      }

      // microtubule body — stacked dimers
      const rows = 18;
      const cols = 7;
      const tubeW = 54;
      for (let r = 0; r < rows; r++) {
        const y = top + 18 + (r / (rows - 1)) * (len - 40);
        const pulsePos = top + 18 + tnorm * (len - 40);
        const dist = Math.abs(y - pulsePos);
        const glow = Math.max(0, 1 - dist / 46);
        for (let c = 0; c < cols; c++) {
          const offset = r % 2 === 0 ? 0 : tubeW / cols / 2;
          const x = cx - tubeW / 2 + (c + 0.5) * (tubeW / cols) + offset;
          const isAlpha = (r + c) % 2 === 0;
          ctx.beginPath();
          ctx.ellipse(x, y, 4.2, 5.4, 0, 0, Math.PI * 2);
          ctx.fillStyle = isAlpha ? "#d4b45a" : "#c4a056";
          ctx.globalAlpha = 0.55 + glow * 0.45;
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.strokeStyle = collapse ? "#f3ead2" : "#5ec4d4";
          ctx.lineWidth = collapse ? 1.4 : 0.7;
          ctx.stroke();
        }
      }

      // waveguide envelope
      ctx.beginPath();
      ctx.roundRect(cx - 32, top + 10, 64, len - 20, 20);
      ctx.strokeStyle = "rgba(94,196,212,0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // traveling wave
      if (!reduced) {
        const wy = top + 18 + tnorm * (len - 40);
        ctx.beginPath();
        ctx.moveTo(cx - 40, wy);
        for (let i = 0; i <= 24; i++) {
          const x = cx - 40 + (i / 24) * 80;
          ctx.lineTo(x, wy + Math.sin(i * 0.9 + time / 120) * 5);
        }
        ctx.strokeStyle = collapse ? "#f3ead2" : "#d4b45a";
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      if (collapse) {
        const g = ctx.createRadialGradient(cx, cssH * 0.55, 4, cx, cssH * 0.55, 90);
        g.addColorStop(0, "rgba(243,234,210,0.35)");
        g.addColorStop(1, "rgba(243,234,210,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cssW, cssH);
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="flex h-full min-h-[280px] flex-col gap-3">
      <div ref={wrapRef} className="relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      </div>
      <ul className="flex flex-wrap gap-2 text-xs">
        <li className="rounded-md bg-surface px-3 py-2 text-gold shadow-border">
          {t.chambers.hardware.dimer}
        </li>
        <li className="rounded-md bg-surface px-3 py-2 text-cyan shadow-border">
          {t.chambers.hardware.waveguide}
        </li>
        <li className="rounded-md bg-surface px-3 py-2 text-cream shadow-border">
          {t.chambers.hardware.collapse}
        </li>
      </ul>
    </div>
  );
}
