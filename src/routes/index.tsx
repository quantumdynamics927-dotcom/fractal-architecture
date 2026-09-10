import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Infinity as InfinityIcon, Radio, Spline, Waypoints } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { BrainMaze } from "@/components/brain-maze";
import { JuliaLab } from "@/components/julia-lab";
import { PulseLab } from "@/components/pulse-lab";
import { SiteHeader } from "@/components/site-header";
import { SymmetryLab } from "@/components/symmetry-lab";
import { TubuleLab } from "@/components/tubule-lab";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

function App() {
  const { t } = useLanguage();

  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <Hero />
      <Chamber
        id="equation"
        kicker={t.chambers.equation.kicker}
        title={t.chambers.equation.title}
        lead={t.chambers.equation.lead}
        body={t.chambers.equation.body}
        formula={t.chambers.equation.formula}
        icon={InfinityIcon}
        image="/julia.jpg"
        reverse={false}
      >
        <JuliaLab />
      </Chamber>
      <Chamber
        id="hardware"
        kicker={t.chambers.hardware.kicker}
        title={t.chambers.hardware.title}
        lead={t.chambers.hardware.lead}
        body={t.chambers.hardware.body}
        icon={Waypoints}
        image="/microtubules.jpg"
        reverse
      >
        <TubuleLab />
      </Chamber>
      <Chamber
        id="pulse"
        kicker={t.chambers.pulse.kicker}
        title={t.chambers.pulse.title}
        lead={t.chambers.pulse.lead}
        body={t.chambers.pulse.body}
        icon={Radio}
        image="/pulse.jpg"
        reverse={false}
      >
        <PulseLab />
      </Chamber>
      <Chamber
        id="symmetry"
        kicker={t.chambers.symmetry.kicker}
        title={t.chambers.symmetry.title}
        lead={t.chambers.symmetry.lead}
        body={t.chambers.symmetry.body}
        icon={Spline}
        image="/symmetry.jpg"
        reverse
      >
        <SymmetryLab />
      </Chamber>
      <Synthesis />
      <Stats />
      <Poster />
      <Sources />
      <footer className="border-t border-border py-10 text-center font-mono text-xs text-muted">
        {t.footer}
      </footer>
    </div>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-linear-to-b from-bg/40 via-bg/70 to-bg" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="stagger-in">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">{t.kicker}</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-gold sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg sm:text-lg">{t.subtitle}</p>
          <a
            href="#equation"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {t.enter}
            <ArrowDown className="size-4" />
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <BrainMaze className="w-full text-gold" />
        </div>
      </div>
    </section>
  );
}

function Chamber({
  id,
  kicker,
  title,
  lead,
  body,
  formula,
  icon: Icon,
  image,
  reverse,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  body: string;
  formula?: string;
  icon: LucideIcon;
  image: string;
  reverse: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="flex flex-col justify-center">
          <div className="mb-5 overflow-hidden rounded-lg">
            <img
              src={image}
              alt=""
              className="h-36 w-full object-cover sm:h-44"
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
            <Icon className="size-4 text-gold" />
            {kicker}
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-4xl">{title}</h2>
          {formula ? (
            <p className="mt-3 font-mono text-lg text-gold">{formula}</p>
          ) : null}
          <p className="mt-4 text-base leading-relaxed text-fg">{lead}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
        </div>
        <div className="rounded-xl bg-surface p-3 shadow-border sm:p-4">
          <div className="min-h-[320px] sm:min-h-[380px]">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Synthesis() {
  const { t } = useLanguage();
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
          {t.synthesis.kicker}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-cream sm:text-4xl">
          {t.synthesis.title}
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.synthesis.items.map((item, i) => (
            <li key={item.title} className="rounded-lg bg-bg p-5 shadow-border">
              <span className="font-mono text-xs text-gold">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useLanguage();
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">{t.stats.kicker}</p>
        <h2 className="mt-3 font-display text-3xl text-cream">{t.stats.title}</h2>
        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.stats.items.map((item) => (
            <div key={item.label} className="rounded-lg bg-surface px-4 py-5 shadow-border">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</dt>
              <dd className="mt-2 font-mono text-2xl text-gold tabular-nums">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Poster() {
  const { t } = useLanguage();
  return (
    <section id="poster" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
          {t.posterSection.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream">{t.posterSection.title}</h2>
        <figure className="mt-8 overflow-hidden rounded-xl bg-surface p-2 shadow-border sm:p-3">
          <img
            src="/infographic.jpg"
            alt={t.title}
            className="w-full rounded-lg"
            crossOrigin="anonymous"
          />
          <figcaption className="px-2 py-4 text-sm leading-relaxed text-muted">
            {t.posterSection.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Sources() {
  const { t } = useLanguage();
  return (
    <section id="sources" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
          {t.sourcesSection.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream">{t.sourcesSection.title}</h2>
        <p className="mt-5 text-base leading-relaxed text-fg">{t.sourcesSection.body}</p>
        <ul className="mt-8 space-y-3">
          {t.sourcesSection.refs.map((ref) => (
            <li key={ref} className="border-l-2 border-gold/40 pl-4 text-sm text-muted">
              {ref}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted">{t.sourcesSection.note}</p>
      </div>
    </section>
  );
}
