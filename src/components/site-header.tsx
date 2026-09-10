import { useLanguage } from "@/lib/language";
import { useOrch } from "@/lib/orch";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#equation", key: "equation" as const },
  { href: "#hardware", key: "hardware" as const },
  { href: "#pulse", key: "pulse" as const },
  { href: "#symmetry", key: "symmetry" as const },
];

export function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const windowMs = useOrch((s) => s.windowMs);
  const reduced = usePrefersReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" className="font-display text-sm tracking-wide text-gold sm:text-base">
          {t.wordmark}
        </a>
        <div className="ml-1 hidden items-center gap-2 sm:flex">
          <span
            className={cn("size-2 rounded-full bg-gold", !reduced && "or-dot")}
            style={{ ["--or-ms" as string]: `${windowMs}ms` }}
            aria-hidden
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {t.pulseBadge} {windowMs}
            {t.chambers.pulse.ms}
          </span>
        </div>
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Chambers">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-xs uppercase tracking-[0.16em] text-muted transition-colors duration-150 hover:text-cream"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          aria-label={t.langAria}
          className="ml-auto h-10 rounded-md px-3 font-mono text-xs text-gold shadow-border transition-transform duration-150 ease-out md:ml-3 active:scale-[0.96]"
        >
          {t.langLabel}
        </button>
      </div>
    </header>
  );
}
