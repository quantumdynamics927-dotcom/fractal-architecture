import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

function hash(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

export function SymmetryLab() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState(0.72);
  const reduced = usePrefersReducedMotion();
  const orderRef = useRef(order);
  orderRef.current = order;

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
      ctx.fillStyle = "#071122";
      ctx.fillRect(0, 0, cssW, cssH);

      const cx = cssW / 2;
      const cy = cssH / 2;
      const o = orderRef.current;
      const t = reduced ? 0 : time / 1000;
      const arms = 4;
      const points = 90;

      ctx.save();
      ctx.translate(cx, cy);

      for (let a = 0; a < arms; a++) {
        ctx.save();
        ctx.rotate((a * Math.PI) / 2);

        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const u = i / points;
          const baseR = 18 + u * Math.min(cx, cy) * 0.82;
          const spiral = u * Math.PI * 1.6;
          const chaos = (hash(i * 17.2 + a) - 0.5) * 48 * (1 - o);
          const wobble = Math.sin(spiral * 3 + t * 1.4) * 10 * o;
          const r = baseR + chaos + wobble;
          const ang = spiral * (0.35 + o * 0.25) + (1 - o) * (hash(i * 9.1) - 0.5);
          const x = Math.cos(ang) * r * 0.28;
          const y = -r * 0.55 + Math.sin(ang) * r * 0.12;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = a % 2 === 0 ? "#d4b45a" : "#5ec4d4";
        ctx.globalAlpha = 0.55 + o * 0.4;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }

      // inner node
      ctx.beginPath();
      ctx.arc(0, 0, 7 + o * 4, 0, Math.PI * 2);
      ctx.fillStyle = "#d4b45a";
      ctx.globalAlpha = 1;
      ctx.fill();

      // chaotic particles
      const n = 70;
      ctx.globalAlpha = 1 - o;
      for (let i = 0; i < n; i++) {
        const seed = hash(i * 3.1);
        const ang = seed * Math.PI * 2 + t * (0.2 + seed);
        const rad = 20 + hash(i * 5.7) * Math.min(cx, cy) * 0.7;
        ctx.beginPath();
        ctx.arc(Math.cos(ang) * rad, Math.sin(ang) * rad, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = seed > 0.5 ? "#5ec4d4" : "#d4b45a";
        ctx.fill();
      }
      ctx.restore();

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
      <label className="flex flex-col gap-1 text-xs text-muted">
        <span className="flex justify-between">
          <span>{t.chambers.symmetry.chaos}</span>
          <span>{t.chambers.symmetry.order}</span>
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
          className="h-8 w-full accent-gold"
        />
      </label>
    </div>
  );
}
