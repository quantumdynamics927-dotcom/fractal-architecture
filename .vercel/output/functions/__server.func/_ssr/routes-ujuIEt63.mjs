import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Infinity$1, i as Radio, o as ArrowDown, r as Spline, t as Waypoints } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ujuIEt63.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BrainMaze({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 280",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
			id: "brain-glow",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
				stdDeviation: "2.5",
				result: "b"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			filter: "url(#brain-glow)",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 140 C 110 138, 72 108, 68 64 C 66 36, 92 18, 128 28 C 148 34, 156 58, 158 88 C 150 70, 128 58, 108 68 C 92 76, 90 98, 112 108 C 132 118, 148 112, 158 98",
					stroke: "var(--color-gold)",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 140 C 210 138, 248 108, 252 64 C 254 36, 228 18, 192 28 C 172 34, 164 58, 162 88 C 170 70, 192 58, 212 68 C 228 76, 230 98, 208 108 C 188 118, 172 112, 162 98",
					stroke: "var(--color-cyan)",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 140 C 110 142, 72 172, 68 216 C 66 244, 92 262, 128 252 C 148 246, 156 222, 158 192 C 150 210, 128 222, 108 212 C 92 204, 90 182, 112 172 C 132 162, 148 168, 158 182",
					stroke: "var(--color-cyan)",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 140 C 210 142, 248 172, 252 216 C 254 244, 228 262, 192 252 C 172 246, 164 222, 162 192 C 170 210, 192 222, 212 212 C 228 204, 230 182, 208 172 C 188 162, 172 168, 162 182",
					stroke: "var(--color-gold)",
					strokeWidth: "2.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 52 C 138 48, 118 56, 108 74",
					stroke: "var(--color-gold)",
					strokeWidth: "1.4",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 52 C 182 48, 202 56, 212 74",
					stroke: "var(--color-cyan)",
					strokeWidth: "1.4",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 228 C 138 232, 118 224, 108 206",
					stroke: "var(--color-cyan)",
					strokeWidth: "1.4",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 228 C 182 232, 202 224, 212 206",
					stroke: "var(--color-gold)",
					strokeWidth: "1.4",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "140",
					r: "10",
					fill: "var(--color-gold)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "140",
					r: "18",
					stroke: "var(--color-gold)",
					strokeWidth: "1.2",
					opacity: "0.5"
				})
			]
		})]
	});
}
var copy = {
	es: {
		wordmark: "Conciencia Fractal",
		kicker: "Un modelo exploratorio",
		title: "La arquitectura fractal de la conciencia",
		subtitle: "La conciencia humana como una serie de pulsos fractales discretos generados por actividad cuántica dentro del hardware biológico.",
		enter: "Entrar a las cámaras",
		poster: "El cartel",
		sources: "Fuentes",
		langLabel: "EN",
		langAria: "Cambiar a inglés",
		nav: {
			equation: "Ecuación",
			hardware: "Hardware",
			pulse: "Pulso",
			symmetry: "Simetría"
		},
		pulseBadge: "Reducción objetiva",
		chambers: {
			equation: {
				kicker: "01",
				title: "La ecuación de la creación infinita",
				formula: "f(z) = z² + c",
				lead: "La fórmula del conjunto de Julia demuestra cómo una regla simple produce complejidad infinita y autosemejante.",
				body: "Arrastra el plano para cambiar la constante c. Cada punto del plano complejo se itera con la misma regla. Lo que no escapa al infinito forma el conjunto; lo que escapa pinta el borde — una costa de longitud infinita a cualquier escala.",
				hint: "Arrastra para mutar c · rueda para acercar",
				re: "Re(c)",
				im: "Im(c)",
				zoom: "Zoom",
				reset: "Reiniciar",
				presetsLabel: "Conjuntos"
			},
			hardware: {
				kicker: "02",
				title: "Microtúbulos: el hardware cuántico",
				lead: "Los microtúbulos intraneuronales actúan como guías de onda para el entrelazamiento cuántico, el sustrato físico de la mente «orquestada».",
				body: "Cada microtúbulo es un cilindro de dímeros de tubulina α/β. En Orch-OR, esos dímeros son bits cuánticos cuya superposición se mantiene el tiempo suficiente para que la gravedad —no un observador— colapse el estado. El destello es una reducción objetiva.",
				dimer: "Dímeros de tubulina",
				waveguide: "Guía de onda",
				collapse: "Colapso OR"
			},
			pulse: {
				kicker: "03",
				title: "La conciencia como pulso rítmico",
				lead: "La percepción ocurre en ventanas discretas de 100–200 ms de «reducción objetiva», no como un flujo continuo.",
				body: "Cada ventana es un fotograma de experiencia. A 150 ms hay ~6.7 eventos por segundo: lo bastante lento para la fisiología, lo bastante rápido para que el cine de la mente se sienta continuo. Ajusta la duración y observa cómo el ritmo de la conciencia se espesa o se aclara.",
				window: "Ventana OR",
				ms: "ms",
				hz: "eventos / s",
				running: "En curso",
				paused: "Pausado"
			},
			symmetry: {
				kicker: "04",
				title: "Simetría que equilibra caos y orden",
				lead: "Así como los fractales revelan simetrías rotacionales en cruz, la mente humana filtra entradas caóticas hacia una realidad ordenada y simulada.",
				body: "El deslizador mezcla ruido con simetría de orden 4. A la izquierda, el campo es turbulento. A la derecha, el mismo material se pliega en una cruz autosemejante. La percepción hace ese trabajo en cada pulso: colapsar lo posible en lo simétrico.",
				chaos: "Caos",
				order: "Orden"
			}
		},
		synthesis: {
			kicker: "Síntesis",
			title: "Cuatro escalas, una arquitectura",
			items: [
				{
					title: "Regla",
					text: "Una ecuación mínima — z² + c — basta para engendrar infinitud. La mente no necesita un mapa enorme: necesita una regla que se itere."
				},
				{
					title: "Sustrato",
					text: "La regla se instancia en tubulina. El hardware no es la sinapsis sola; es el citoesqueleto que vibra por debajo de ella."
				},
				{
					title: "Tiempo",
					text: "La regla no corre en continuo. Corre a golpes de 100–200 ms. Cada golpe es un ahora."
				},
				{
					title: "Forma",
					text: "Cada ahora elige una simetría. El caos entra; una cruz — un orden — sale. Eso es percibir."
				}
			]
		},
		posterSection: {
			kicker: "Origen",
			title: "El cartel fuente",
			caption: "Infografía generada en Gemini Notebook. Este sitio la convierte en un instrumento: las cuatro cámaras son laboratorios, no viñetas."
		},
		sourcesSection: {
			kicker: "Marco",
			title: "Orch-OR y el borde fractal",
			body: "El modelo de reducción objetiva orquestada (Hameroff y Penrose, 1996) propone que la conciencia surge cuando superposiciones cuánticas en microtúbulos colapsan por gravedad. Las ventanas de 100–200 ms coinciden con ciclos perceptuales conocidos. El conjunto de Julia no es el cerebro: es la analogía formal de cómo una ley local produce una costa infinita. Este sitio presenta el modelo como arquitectura, no como consenso.",
			refs: [
				"Hameroff & Penrose — Orchestrated reduction of quantum coherence in brain microtubules (1996)",
				"Penrose — Shadows of the Mind (1994)",
				"Julia — Mémoire sur l’itération des fonctions rationnelles (1918)",
				"Friston — The free-energy principle (2010), dinámica cerebral autosemejante"
			],
			note: "Marco teórico exploratorio. No sustituye evidencia empírica ni diagnóstico."
		},
		stats: {
			kicker: "Notas de laboratorio",
			title: "Armónicos φ en los datos",
			items: [
				{
					value: "1.35–1.52",
					label: "Dimensión fractal"
				},
				{
					value: "0.99",
					label: "Resonancia Fibonacci"
				},
				{
					value: "100–200 ms",
					label: "Ventana OR"
				},
				{
					value: "φ ≈ 1.618",
					label: "Razón áurea"
				}
			]
		},
		footer: "Arquitectura fractal de la conciencia · modelo exploratorio"
	},
	en: {
		wordmark: "Fractal Consciousness",
		kicker: "An exploratory model",
		title: "The fractal architecture of consciousness",
		subtitle: "Human consciousness as a series of discrete, fractal pulses generated by quantum activity within biological hardware.",
		enter: "Enter the chambers",
		poster: "The poster",
		sources: "Sources",
		langLabel: "ES",
		langAria: "Switch to Spanish",
		nav: {
			equation: "Equation",
			hardware: "Hardware",
			pulse: "Pulse",
			symmetry: "Symmetry"
		},
		pulseBadge: "Objective reduction",
		chambers: {
			equation: {
				kicker: "01",
				title: "The equation of infinite creation",
				formula: "f(z) = z² + c",
				lead: "The Julia set formula shows how a simple rule produces infinite, self-similar complexity.",
				body: "Drag the plane to change the constant c. Every point in the complex plane is iterated with the same rule. What never escapes infinity is the set; what escapes paints the shoreline — infinite length at every scale.",
				hint: "Drag to mutate c · scroll to zoom",
				re: "Re(c)",
				im: "Im(c)",
				zoom: "Zoom",
				reset: "Reset",
				presetsLabel: "Sets"
			},
			hardware: {
				kicker: "02",
				title: "Microtubules: the quantum hardware",
				lead: "Intraneuronal microtubules act as waveguides for quantum entanglement, the physical substrate of the “orchestrated” mind.",
				body: "Each microtubule is a cylinder of α/β tubulin dimers. In Orch-OR those dimers are qubits whose superposition holds long enough for gravity — not an observer — to collapse the state. The flash is an objective reduction.",
				dimer: "Tubulin dimers",
				waveguide: "Waveguide",
				collapse: "OR collapse"
			},
			pulse: {
				kicker: "03",
				title: "Consciousness as a rhythmic pulse",
				lead: "Perception occurs in discrete 100–200 ms ‘objective reduction’ windows rather than a continuous flow.",
				body: "Each window is a frame of experience. At 150 ms there are ~6.7 events per second: slow enough for physiology, fast enough for the mind’s cinema to feel continuous. Change the duration and watch consciousness thicken or thin.",
				window: "OR window",
				ms: "ms",
				hz: "events / s",
				running: "Running",
				paused: "Paused"
			},
			symmetry: {
				kicker: "04",
				title: "Symmetry balancing chaos and order",
				lead: "Just as fractals reveal cross-like rotational symmetries, the human mind filters chaotic inputs into an ordered, simulated reality.",
				body: "The slider mixes noise with four-fold symmetry. On the left the field is turbulent. On the right the same material folds into a self-similar cross. Perception does that work every pulse: collapse the possible into the symmetric.",
				chaos: "Chaos",
				order: "Order"
			}
		},
		synthesis: {
			kicker: "Synthesis",
			title: "Four scales, one architecture",
			items: [
				{
					title: "Rule",
					text: "A minimal equation — z² + c — is enough to breed infinity. Mind does not need a giant map. It needs a rule that iterates."
				},
				{
					title: "Substrate",
					text: "The rule is instantiated in tubulin. The hardware is not the synapse alone; it is the cytoskeleton humming beneath it."
				},
				{
					title: "Time",
					text: "The rule does not run continuously. It runs in 100–200 ms strokes. Each stroke is a now."
				},
				{
					title: "Form",
					text: "Each now chooses a symmetry. Chaos in; a cross — an order — out. That is perceiving."
				}
			]
		},
		posterSection: {
			kicker: "Source",
			title: "The source poster",
			caption: "Infographic from Gemini Notebook. This site turns it into an instrument: the four chambers are laboratories, not vignettes."
		},
		sourcesSection: {
			kicker: "Framework",
			title: "Orch-OR and the fractal edge",
			body: "Orchestrated objective reduction (Hameroff and Penrose, 1996) proposes that consciousness arises when quantum superpositions in microtubules collapse under gravity. The 100–200 ms windows line up with known perceptual cycles. The Julia set is not the brain: it is the formal analogy of how a local law grows an infinite shoreline. This site presents the model as architecture, not consensus.",
			refs: [
				"Hameroff & Penrose — Orchestrated reduction of quantum coherence in brain microtubules (1996)",
				"Penrose — Shadows of the Mind (1994)",
				"Julia — Mémoire sur l’itération des fonctions rationnelles (1918)",
				"Friston — The free-energy principle (2010), self-similar brain dynamics"
			],
			note: "Exploratory theoretical frame. Not empirical proof, and not a diagnosis."
		},
		stats: {
			kicker: "Lab notes",
			title: "φ harmonics in the data",
			items: [
				{
					value: "1.35–1.52",
					label: "Fractal dimension"
				},
				{
					value: "0.99",
					label: "Fibonacci resonance"
				},
				{
					value: "100–200 ms",
					label: "OR window"
				},
				{
					value: "φ ≈ 1.618",
					label: "Golden ratio"
				}
			]
		},
		footer: "Fractal architecture of consciousness · exploratory model"
	}
};
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "fractal-mind-lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("es");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "en" || stored === "es") setLangState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const value = (0, import_react.useMemo)(() => {
		return {
			lang,
			setLang: (next) => {
				setLangState(next);
				window.localStorage.setItem(STORAGE_KEY, next);
			},
			t: copy[lang]
		};
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PRESETS = [
	{
		id: "spiral",
		re: -.745,
		im: .186
	},
	{
		id: "dendrite",
		re: -.8,
		im: .156
	},
	{
		id: "rabbit",
		re: -.123,
		im: .745
	},
	{
		id: "sanmarco",
		re: -.75,
		im: 0
	},
	{
		id: "siegel",
		re: -.391,
		im: -.587
	}
];
var DEFAULT = PRESETS[0];
function colorAt(t, inSet, out, i) {
	if (inSet) {
		out[i] = 7;
		out[i + 1] = 17;
		out[i + 2] = 34;
		out[i + 3] = 255;
		return;
	}
	const x = Math.min(1, Math.max(0, t));
	let r, g, b;
	if (x < .35) {
		const u = x / .35;
		r = 7 + u * 87;
		g = 17 + u * 179;
		b = 34 + u * 178;
	} else if (x < .7) {
		const u = (x - .35) / .35;
		r = 94 + u * 118;
		g = 196 + u * -16;
		b = 212 + u * -122;
	} else {
		const u = (x - .7) / .3;
		r = 212 + u * 31;
		g = 180 + u * 54;
		b = 90 + u * 120;
	}
	out[i] = r;
	out[i + 1] = g;
	out[i + 2] = b;
	out[i + 3] = 255;
}
function renderJulia(ctx, w, h, cx, cy, zoom, maxIter) {
	const img = ctx.createImageData(w, h);
	const data = img.data;
	const aspect = w / h;
	const scale = 1.8 / zoom;
	for (let py = 0; py < h; py++) {
		const y0 = ((py + .5) / h - .5) * 2 * scale;
		for (let px = 0; px < w; px++) {
			let zx = ((px + .5) / w - .5) * 2 * scale * aspect;
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
			if (iter === maxIter) colorAt(0, true, data, i);
			else {
				const logzn = Math.log(zx2 + zy2) / 2;
				const nu = Math.log(logzn / Math.log(2)) / Math.log(2);
				colorAt((iter + 1 - nu) / maxIter, false, data, i);
			}
		}
	}
	ctx.putImageData(img, 0, 0);
}
function JuliaLab() {
	const { t } = useLanguage();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const [re, setRe] = (0, import_react.useState)(DEFAULT.re);
	const [im, setIm] = (0, import_react.useState)(DEFAULT.im);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const drag = (0, import_react.useRef)(null);
	const params = (0, import_react.useRef)({
		re: DEFAULT.re,
		im: DEFAULT.im,
		zoom: 1
	});
	params.current = {
		re,
		im,
		zoom
	};
	const paint = (0, import_react.useCallback)(() => {
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
	(0, import_react.useEffect)(() => {
		paint();
	}, [
		re,
		im,
		zoom,
		paint
	]);
	(0, import_react.useEffect)(() => {
		const wrap = wrapRef.current;
		if (!wrap) return;
		const ro = new ResizeObserver(() => paint());
		ro.observe(wrap);
		return () => ro.disconnect();
	}, [paint]);
	function onPointerDown(e) {
		e.currentTarget.setPointerCapture(e.pointerId);
		drag.current = {
			x: e.clientX,
			y: e.clientY,
			re,
			im
		};
	}
	function onPointerMove(e) {
		if (!drag.current) return;
		const dx = (e.clientX - drag.current.x) / 220;
		const dy = (e.clientY - drag.current.y) / 220;
		setRe(drag.current.re + dx);
		setIm(drag.current.im + dy);
	}
	function onPointerUp() {
		drag.current = null;
	}
	function onWheel(e) {
		e.preventDefault();
		const next = Math.min(8, Math.max(.5, zoom * (e.deltaY > 0 ? .9 : 1.1)));
		setZoom(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-[280px] flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				className: "relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "absolute inset-0 size-full cursor-crosshair touch-none",
					onPointerDown,
					onPointerMove,
					onPointerUp,
					onPointerCancel: onPointerUp,
					onWheel,
					"aria-label": t.chambers.equation.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pointer-events-none absolute bottom-3 left-3 font-mono text-xs text-cream/80",
					children: [
						"c = ",
						re.toFixed(3),
						" ",
						im >= 0 ? "+" : "−",
						" ",
						Math.abs(im).toFixed(3),
						"i"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: t.chambers.equation.hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-xs text-muted",
						children: [t.chambers.equation.re, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: -1.2,
							max: .6,
							step: .001,
							value: re,
							onChange: (e) => setRe(Number(e.target.value)),
							className: "h-8 w-full accent-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-xs text-muted",
						children: [t.chambers.equation.im, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: -.9,
							max: .9,
							step: .001,
							value: im,
							onChange: (e) => setIm(Number(e.target.value)),
							className: "h-8 w-full accent-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-xs text-muted",
						children: [t.chambers.equation.zoom, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: .5,
							max: 8,
							step: .05,
							value: zoom,
							onChange: (e) => setZoom(Number(e.target.value)),
							className: "h-8 w-full accent-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setRe(DEFAULT.re);
							setIm(DEFAULT.im);
							setZoom(1);
						},
						className: "mt-4 h-10 rounded-md bg-surface text-sm text-gold shadow-border transition-transform duration-150 ease-out active:scale-[0.96]",
						children: t.chambers.equation.reset
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setRe(p.re);
						setIm(p.im);
					},
					className: cn("h-9 rounded-md px-3 font-mono text-xs transition-colors duration-150", re === p.re && im === p.im ? "bg-gold text-bg" : "bg-surface text-muted shadow-border hover:text-cream"),
					children: [
						p.re.toFixed(2),
						" ",
						p.im >= 0 ? "+" : "−",
						" ",
						Math.abs(p.im).toFixed(2),
						"i"
					]
				}, p.id))
			})
		]
	});
}
var useOrch = create((set) => ({
	windowMs: 150,
	setWindowMs: (windowMs) => set({ windowMs: Math.min(200, Math.max(100, windowMs)) })
}));
function subscribe(onStoreChange) {
	const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
	mq.addEventListener("change", onStoreChange);
	return () => mq.removeEventListener("change", onStoreChange);
}
function usePrefersReducedMotion() {
	return (0, import_react.useSyncExternalStore)(subscribe, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
}
function PulseLab() {
	const { t } = useLanguage();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const windowMs = useOrch((s) => s.windowMs);
	const setWindowMs = useOrch((s) => s.setWindowMs);
	const [running, setRunning] = (0, import_react.useState)(true);
	const reduced = usePrefersReducedMotion();
	const windowRef = (0, import_react.useRef)(windowMs);
	const runningRef = (0, import_react.useRef)(running);
	windowRef.current = windowMs;
	runningRef.current = running;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		let raf = 0;
		let runningLoop = true;
		const start = performance.now();
		const draw = (time) => {
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
			const phase = elapsed % win / win;
			const flashes = Math.floor(elapsed / win);
			const spanMs = 1e3;
			const pxPerMs = innerW / spanMs;
			ctx.fillStyle = "rgba(212,180,90,0.08)";
			for (let ms = 0; ms < spanMs; ms += win) {
				const x = padL + ms * pxPerMs;
				ctx.fillRect(x, padT, win * pxPerMs * .5, innerH);
			}
			ctx.strokeStyle = "rgba(94,196,212,0.12)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(padL, mid);
			ctx.lineTo(cssW - padR, mid);
			ctx.stroke();
			ctx.beginPath();
			for (let i = 0; i <= innerW; i++) {
				const local = i / innerW * spanMs + elapsed % spanMs;
				const y = mid - (.55 + .45 * Math.sin(2 * Math.PI * local / win)) * (Math.sin(local / 18) * .35 + Math.sin(local / 7.5) * .18) * innerH * .42;
				if (i === 0) ctx.moveTo(padL + i, y);
				else ctx.lineTo(padL + i, y);
			}
			ctx.strokeStyle = "#5ec4d4";
			ctx.lineWidth = 1.6;
			ctx.stroke();
			const headX = padL + elapsed % spanMs / spanMs * innerW;
			ctx.strokeStyle = "#d4b45a";
			ctx.beginPath();
			ctx.moveTo(headX, padT);
			ctx.lineTo(headX, padT + innerH);
			ctx.stroke();
			if (!reduced && runningRef.current && phase > .92) {
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
	const hz = 1e3 / windowMs;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-[280px] flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: wrapRef,
			className: "relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 size-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-w-[180px] flex-1 flex-col gap-1 text-xs text-muted",
					children: [t.chambers.pulse.window, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 100,
						max: 200,
						step: 5,
						value: windowMs,
						onChange: (e) => setWindowMs(Number(e.target.value)),
						className: "h-8 w-full accent-gold"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2 font-mono",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl text-gold tabular-nums",
							children: windowMs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: t.chambers.pulse.ms
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-3 text-2xl text-cyan tabular-nums",
							children: hz.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: t.chambers.pulse.hz
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRunning((v) => !v),
					className: "h-10 rounded-md bg-surface px-4 text-sm text-cream shadow-border transition-transform duration-150 ease-out active:scale-[0.96]",
					children: running ? t.chambers.pulse.running : t.chambers.pulse.paused
				})
			]
		})]
	});
}
var LINKS = [
	{
		href: "#equation",
		key: "equation"
	},
	{
		href: "#hardware",
		key: "hardware"
	},
	{
		href: "#pulse",
		key: "pulse"
	},
	{
		href: "#symmetry",
		key: "symmetry"
	}
];
function SiteHeader() {
	const { t, lang, setLang } = useLanguage();
	const windowMs = useOrch((s) => s.windowMs);
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-sm tracking-wide text-gold sm:text-base",
					children: t.wordmark
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-1 hidden items-center gap-2 sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("size-2 rounded-full bg-gold", !reduced && "or-dot"),
						style: { ["--or-ms"]: `${windowMs}ms` },
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
						children: [
							t.pulseBadge,
							" ",
							windowMs,
							t.chambers.pulse.ms
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-1 md:flex",
					"aria-label": "Chambers",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-md px-3 py-2 text-xs uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-cream",
						children: t.nav[link.key]
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLang(lang === "es" ? "en" : "es"),
					"aria-label": t.langAria,
					className: "ml-auto h-10 rounded-md px-3 font-mono text-xs text-gold shadow-border transition-transform duration-150 ease-out md:ml-3 active:scale-[0.96]",
					children: t.langLabel
				})
			]
		})
	});
}
function hash(n) {
	const x = Math.sin(n * 127.1) * 43758.5453;
	return x - Math.floor(x);
}
function SymmetryLab() {
	const { t } = useLanguage();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const [order, setOrder] = (0, import_react.useState)(.72);
	const reduced = usePrefersReducedMotion();
	const orderRef = (0, import_react.useRef)(order);
	orderRef.current = order;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		let raf = 0;
		let running = true;
		const draw = (time) => {
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
			const t = reduced ? 0 : time / 1e3;
			const arms = 4;
			const points = 90;
			ctx.save();
			ctx.translate(cx, cy);
			for (let a = 0; a < arms; a++) {
				ctx.save();
				ctx.rotate(a * Math.PI / 2);
				ctx.beginPath();
				for (let i = 0; i <= points; i++) {
					const u = i / points;
					const baseR = 18 + u * Math.min(cx, cy) * .82;
					const spiral = u * Math.PI * 1.6;
					const chaos = (hash(i * 17.2 + a) - .5) * 48 * (1 - o);
					const wobble = Math.sin(spiral * 3 + t * 1.4) * 10 * o;
					const r = baseR + chaos + wobble;
					const ang = spiral * (.35 + o * .25) + (1 - o) * (hash(i * 9.1) - .5);
					const x = Math.cos(ang) * r * .28;
					const y = -r * .55 + Math.sin(ang) * r * .12;
					if (i === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.strokeStyle = a % 2 === 0 ? "#d4b45a" : "#5ec4d4";
				ctx.globalAlpha = .55 + o * .4;
				ctx.lineWidth = 1.2;
				ctx.stroke();
				ctx.restore();
			}
			ctx.beginPath();
			ctx.arc(0, 0, 7 + o * 4, 0, Math.PI * 2);
			ctx.fillStyle = "#d4b45a";
			ctx.globalAlpha = 1;
			ctx.fill();
			const n = 70;
			ctx.globalAlpha = 1 - o;
			for (let i = 0; i < n; i++) {
				const seed = hash(i * 3.1);
				const ang = seed * Math.PI * 2 + t * (.2 + seed);
				const rad = 20 + hash(i * 5.7) * Math.min(cx, cy) * .7;
				ctx.beginPath();
				ctx.arc(Math.cos(ang) * rad, Math.sin(ang) * rad, 1.4, 0, Math.PI * 2);
				ctx.fillStyle = seed > .5 ? "#5ec4d4" : "#d4b45a";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-[280px] flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: wrapRef,
			className: "relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 size-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex flex-col gap-1 text-xs text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.chambers.symmetry.chaos }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.chambers.symmetry.order })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 1,
				step: .01,
				value: order,
				onChange: (e) => setOrder(Number(e.target.value)),
				className: "h-8 w-full accent-gold"
			})]
		})]
	});
}
function TubuleLab() {
	const { t } = useLanguage();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		let raf = 0;
		let running = true;
		const draw = (time) => {
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
			const cx = cssW * .5;
			const top = Math.max(78, cssH * .22);
			const len = cssH * .9 - top;
			const tnorm = reduced ? .35 : time % 2400 / 2400;
			const collapse = !reduced && tnorm > .78 && tnorm < .88;
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
			const rows = 18;
			const cols = 7;
			const tubeW = 54;
			for (let r = 0; r < rows; r++) {
				const y = top + 18 + r / 17 * (len - 40);
				const pulsePos = top + 18 + tnorm * (len - 40);
				const dist = Math.abs(y - pulsePos);
				const glow = Math.max(0, 1 - dist / 46);
				for (let c = 0; c < cols; c++) {
					const offset = r % 2 === 0 ? 0 : tubeW / cols / 2;
					const x = cx - tubeW / 2 + (c + .5) * (tubeW / cols) + offset;
					const isAlpha = (r + c) % 2 === 0;
					ctx.beginPath();
					ctx.ellipse(x, y, 4.2, 5.4, 0, 0, Math.PI * 2);
					ctx.fillStyle = isAlpha ? "#d4b45a" : "#c4a056";
					ctx.globalAlpha = .55 + glow * .45;
					ctx.fill();
					ctx.globalAlpha = 1;
					ctx.strokeStyle = collapse ? "#f3ead2" : "#5ec4d4";
					ctx.lineWidth = collapse ? 1.4 : .7;
					ctx.stroke();
				}
			}
			ctx.beginPath();
			ctx.roundRect(cx - 32, top + 10, 64, len - 20, 20);
			ctx.strokeStyle = "rgba(94,196,212,0.45)";
			ctx.lineWidth = 1.5;
			ctx.stroke();
			if (!reduced) {
				const wy = top + 18 + tnorm * (len - 40);
				ctx.beginPath();
				ctx.moveTo(cx - 40, wy);
				for (let i = 0; i <= 24; i++) {
					const x = cx - 40 + i / 24 * 80;
					ctx.lineTo(x, wy + Math.sin(i * .9 + time / 120) * 5);
				}
				ctx.strokeStyle = collapse ? "#f3ead2" : "#d4b45a";
				ctx.lineWidth = 1.6;
				ctx.stroke();
			}
			if (collapse) {
				const g = ctx.createRadialGradient(cx, cssH * .55, 4, cx, cssH * .55, 90);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-[280px] flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: wrapRef,
			className: "relative min-h-[280px] flex-1 overflow-hidden rounded-lg bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 size-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "flex flex-wrap gap-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-surface px-3 py-2 text-gold shadow-border",
					children: t.chambers.hardware.dimer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-surface px-3 py-2 text-cyan shadow-border",
					children: t.chambers.hardware.waveguide
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-surface px-3 py-2 text-cream shadow-border",
					children: t.chambers.hardware.collapse
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) });
}
function App() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chamber, {
				id: "equation",
				kicker: t.chambers.equation.kicker,
				title: t.chambers.equation.title,
				lead: t.chambers.equation.lead,
				body: t.chambers.equation.body,
				formula: t.chambers.equation.formula,
				icon: Infinity$1,
				image: "/julia.jpg",
				reverse: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JuliaLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chamber, {
				id: "hardware",
				kicker: t.chambers.hardware.kicker,
				title: t.chambers.hardware.title,
				lead: t.chambers.hardware.lead,
				body: t.chambers.hardware.body,
				icon: Waypoints,
				image: "/microtubules.jpg",
				reverse: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TubuleLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chamber, {
				id: "pulse",
				kicker: t.chambers.pulse.kicker,
				title: t.chambers.pulse.title,
				lead: t.chambers.pulse.lead,
				body: t.chambers.pulse.body,
				icon: Radio,
				image: "/pulse.jpg",
				reverse: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chamber, {
				id: "symmetry",
				kicker: t.chambers.symmetry.kicker,
				title: t.chambers.symmetry.title,
				lead: t.chambers.symmetry.lead,
				body: t.chambers.symmetry.body,
				icon: Spline,
				image: "/symmetry.jpg",
				reverse: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymmetryLab, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Synthesis, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sources, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10 text-center font-mono text-xs text-muted",
				children: t.footer
			})
		]
	});
}
function Hero() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-40",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-bg/40 via-bg/70 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
							children: t.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-gold sm:text-5xl lg:text-6xl",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-fg sm:text-lg",
							children: t.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#equation",
							className: "mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
							children: [t.enter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainMaze, { className: "w-full text-gold" })
				})]
			})
		]
	});
}
function Chamber({ id, kicker, title, lead, body, formula, icon: Icon, image, reverse, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-20 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20", reverse && "lg:[&>*:first-child]:order-2"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 overflow-hidden rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image,
							alt: "",
							className: "h-36 w-full object-cover sm:h-44",
							crossOrigin: "anonymous"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-gold" }), kicker]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl leading-tight text-cream sm:text-4xl",
						children: title
					}),
					formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-lg text-gold",
						children: formula
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-fg",
						children: lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: body
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-surface p-3 shadow-border sm:p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-[320px] sm:min-h-[380px]",
					children
				})
			})]
		})
	});
}
function Synthesis() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
					children: t.synthesis.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-3xl text-cream sm:text-4xl",
					children: t.synthesis.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: t.synthesis.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-bg p-5 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-gold",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl text-cream",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: item.text
							})
						]
					}, item.title))
				})
			]
		})
	});
}
function Stats() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
					children: t.stats.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-cream",
					children: t.stats.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4",
					children: t.stats.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-surface px-4 py-5 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-mono text-2xl text-gold tabular-nums",
							children: item.value
						})]
					}, item.label))
				})
			]
		})
	});
}
function Poster() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "poster",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
					children: t.posterSection.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-cream",
					children: t.posterSection.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-8 overflow-hidden rounded-xl bg-surface p-2 shadow-border sm:p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/infographic.jpg",
						alt: t.title,
						className: "w-full rounded-lg",
						crossOrigin: "anonymous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-2 py-4 text-sm leading-relaxed text-muted",
						children: t.posterSection.caption
					})]
				})
			]
		})
	});
}
function Sources() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sources",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.28em] text-cyan",
					children: t.sourcesSection.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-cream",
					children: t.sourcesSection.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-fg",
					children: t.sourcesSection.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: t.sourcesSection.refs.map((ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-gold/40 pl-4 text-sm text-muted",
						children: ref
					}, ref))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs text-muted",
					children: t.sourcesSection.note
				})
			]
		})
	});
}
//#endregion
export { Home as component };
