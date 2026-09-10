import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { useOrch } from "@/lib/orch";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function PulseLab() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const windowMs = useOrch((s) => s.windowMs);
  const setWindowMs = useOrch((s) => s.setWindowMs);
  const [running, setRunning] = useState(true);
  const reduced = usePrefersReducedMotion();
  const windowRef = useRef(windowMs);
  const runningRef = useRef(running);
  windowRef.current = windowMs;
  runningRef.current = running;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    let raf = 0;
    let runningLoop = true;
    const start = performance.now();

    const draw = (time: number) => {
      if (!runningLoop) return;
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

      const padL = 16;
      const padR = 16;
      const padT = 28;
      const padB = 28;
      const innerW = cssW - padL - padR;
      const innerH = cssH - padT - padB;
      const mid = padT + innerH / 2;
      const win = windowRef.current;
      const elapsed = reduced || !runningRef.current ? 0 : time - start;
      const phase = (elapsed % win) / win;
      const flashes = Math.floor(elapsed / win);

      const spanMs = 1000;
      const pxPerMs = innerW / spanMs;
      ctx.fillStyle = "rgba(212,180,90,0.08)";
      for (let ms = 0; ms < spanMs; ms += win) {
        const x = padL + ms * pxPerMs;
        ctx.fillRect(x, padT, win * pxPerMs * 0.5, innerH);
      }

      ctx.strokeStyle = "rgba(94,196,212,0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, mid);
      ctx.lineTo(cssW - padR, mid);
      ctx.stroke();

      ctx.beginPath();
      for (let i = 0; i <= innerW; i++) {
        const tMs = (i / innerW) * spanMs;
        const playhead = elapsed % spanMs;
        const local = tMs + playhead;
        const env = 0.55 + 0.45 * Math.sin((2 * Math.PI * local) / win);
        const carrier = Math.sin(local / 18) * 0.35 + Math.sin(local / 7.5) * 0.18;
        const y = mid - env * carrier * innerH * 0.42;
        if (i === 0) ctx.moveTo(padL + i, y);
        else ctx.lineTo(padL + i, y);
      }
      ctx.strokeStyle = "#5ec4d4";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      const headX = padL + ((elapsed % spanMs) / spanMs) * innerW;
      ctx.strokeStyle = "#d4b45a";
      ctx.beginPath();
      ctx.moveTo(headX, padT);
      ctx.lineTo(headX, padT + innerH);
      ctx.stroke();

      const inFlash = !reduced && runningRef.current && phase > 0.92;
      if (inFlash) {
        ctx.fillStyle = "rgba(243,234,210,0.12)";
        ctx.fillRect(0, 0, cssW, cssH);
      }

      ctx.fillStyle = "#d4b45a";
      ctx.font = "11px ui-monospace, monospace";
      ctx.fillText(`${win} ms`, padL, 16);
      ctx.fillStyle = "#8aa0b5";
      ctx.fillText(`${flashes} OR`, cssW - padR - 48, 16);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      runningLoop = false;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const hz = 1000 / windowMs;

  return (
    <div className="flex h-full min-h-[280px] flex-col gap-3">
      <div ref={wrapRef} className="relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      </div>
      <div className="flex flex-wrap items-end gap-4">
        <label className="flex min-w-[180px] flex-1 flex-col gap-1 text-xs text-muted">
          {t.chambers.pulse.window}
          <input
            type="range"
            min={100}
            max={200}
            step={5}
            value={windowMs}
            onChange={(e) => setWindowMs(Number(e.target.value))}
            className="h-8 w-full accent-gold"
          />
        </label>
        <div className="flex items-baseline gap-2 font-mono">
          <span className="text-2xl text-gold tabular-nums">{windowMs}</span>
          <span className="text-xs text-muted">{t.chambers.pulse.ms}</span>
          <span className="ml-3 text-2xl text-cyan tabular-nums">{hz.toFixed(1)}</span>
          <span className="text-xs text-muted">{t.chambers.pulse.hz}</span>
        </div>
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          className="h-10 rounded-md bg-surface px-4 text-sm text-cream shadow-border transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          {running ? t.chambers.pulse.running : t.chambers.pulse.paused}
        </button>
      </div>
    </div>
  );
}
