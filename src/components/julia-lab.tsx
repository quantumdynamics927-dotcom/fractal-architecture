import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

type Preset = { id: string; re: number; im: number };

const PRESETS: Preset[] = [
  { id: "spiral", re: -0.745, im: 0.186 },
  { id: "dendrite", re: -0.8, im: 0.156 },
  { id: "rabbit", re: -0.123, im: 0.745 },
  { id: "sanmarco", re: -0.75, im: 0 },
  { id: "siegel", re: -0.391, im: -0.587 },
];

const DEFAULT = PRESETS[0];

function colorAt(t: number, inSet: boolean, out: Uint8ClampedArray, i: number) {
  if (inSet) {
    out[i] = 7;
    out[i + 1] = 17;
    out[i + 2] = 34;
    out[i + 3] = 255;
    return;
  }
  const x = Math.min(1, Math.max(0, t));
  // navy → cyan → gold → cream
  let r: number, g: number, b: number;
  if (x < 0.35) {
    const u = x / 0.35;
    r = 7 + u * (94 - 7);
    g = 17 + u * (196 - 17);
    b = 34 + u * (212 - 34);
  } else if (x < 0.7) {
    const u = (x - 0.35) / 0.35;
    r = 94 + u * (212 - 94);
    g = 196 + u * (180 - 196);
    b = 212 + u * (90 - 212);
  } else {
    const u = (x - 0.7) / 0.3;
    r = 212 + u * (243 - 212);
    g = 180 + u * (234 - 180);
    b = 90 + u * (210 - 90);
  }
  out[i] = r;
  out[i + 1] = g;
  out[i + 2] = b;
  out[i + 3] = 255;
}

function renderJulia(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  cx: number,
  cy: number,
  zoom: number,
  maxIter: number,
) {
  const img = ctx.createImageData(w, h);
  const data = img.data;
  const aspect = w / h;
  const scale = 1.8 / zoom;
  for (let py = 0; py < h; py++) {
    const y0 = ((py + 0.5) / h - 0.5) * 2 * scale;
    for (let px = 0; px < w; px++) {
      const x0 = ((px + 0.5) / w - 0.5) * 2 * scale * aspect;
      let zx = x0;
      let zy = y0;
      let iter = 0;
      let zx2 = zx * zx;
      let zy2 = zy * zy;
      while (zx2 + zy2 < 16 && iter < maxIter) {
        zy = 2 * zx * zy + cy;
        zx = zx2 - zy2 + cx;
        zx2 = zx * zx;
        zy2 = zy * zy;
        iter++;
      }
      const i = (py * w + px) * 4;
      if (iter === maxIter) {
        colorAt(0, true, data, i);
      } else {
        const logzn = Math.log(zx2 + zy2) / 2;
        const nu = Math.log(logzn / Math.log(2)) / Math.log(2);
        const t = (iter + 1 - nu) / maxIter;
        colorAt(t, false, data, i);
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

export function JuliaLab() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [re, setRe] = useState(DEFAULT.re);
  const [im, setIm] = useState(DEFAULT.im);
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; re: number; im: number } | null>(null);
  const params = useRef({ re: DEFAULT.re, im: DEFAULT.im, zoom: 1 });
  params.current = { re, im, zoom };

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    const cssW = wrap.clientWidth;
    const cssH = wrap.clientHeight;
    const w = Math.max(1, Math.floor(cssW * dpr));
    const h = Math.max(1, Math.floor(cssH * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const iter = w > 700 ? 90 : 70;
    renderJulia(ctx, w, h, params.current.re, params.current.im, params.current.zoom, iter);
  }, []);

  useEffect(() => {
    paint();
  }, [re, im, zoom, paint]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => paint());
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [paint]);

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, re, im };
  }
  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drag.current) return;
    const dx = (e.clientX - drag.current.x) / 220;
    const dy = (e.clientY - drag.current.y) / 220;
    setRe(drag.current.re + dx);
    setIm(drag.current.im + dy);
  }
  function onPointerUp() {
    drag.current = null;
  }
  function onWheel(e: React.WheelEvent<HTMLCanvasElement>) {
    e.preventDefault();
    const next = Math.min(8, Math.max(0.5, zoom * (e.deltaY > 0 ? 0.9 : 1.1)));
    setZoom(next);
  }

  return (
    <div className="flex h-full min-h-[280px] flex-col gap-3">
      <div
        ref={wrapRef}
        className="relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full cursor-crosshair touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
          aria-label={t.chambers.equation.title}
        />
        <p className="pointer-events-none absolute bottom-3 left-3 font-mono text-xs text-cream/80">
          c = {re.toFixed(3)} {im >= 0 ? "+" : "−"} {Math.abs(im).toFixed(3)}i
        </p>
      </div>
      <p className="text-xs text-muted">{t.chambers.equation.hint}</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label className="flex flex-col gap-1 text-xs text-muted">
          {t.chambers.equation.re}
          <input
            type="range"
            min={-1.2}
            max={0.6}
            step={0.001}
            value={re}
            onChange={(e) => setRe(Number(e.target.value))}
            className="h-8 w-full accent-gold"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-muted">
          {t.chambers.equation.im}
          <input
            type="range"
            min={-0.9}
            max={0.9}
            step={0.001}
            value={im}
            onChange={(e) => setIm(Number(e.target.value))}
            className="h-8 w-full accent-gold"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-muted">
          {t.chambers.equation.zoom}
          <input
            type="range"
            min={0.5}
            max={8}
            step={0.05}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="h-8 w-full accent-gold"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setRe(DEFAULT.re);
            setIm(DEFAULT.im);
            setZoom(1);
          }}
          className="mt-4 h-10 rounded-md bg-surface text-sm text-gold shadow-border transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          {t.chambers.equation.reset}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              setRe(p.re);
              setIm(p.im);
            }}
            className={cn(
              "h-9 rounded-md px-3 font-mono text-xs transition-colors duration-150",
              re === p.re && im === p.im
                ? "bg-gold text-bg"
                : "bg-surface text-muted shadow-border hover:text-cream",
            )}
          >
            {p.re.toFixed(2)} {p.im >= 0 ? "+" : "−"} {Math.abs(p.im).toFixed(2)}i
          </button>
        ))}
      </div>
    </div>
  );
}
