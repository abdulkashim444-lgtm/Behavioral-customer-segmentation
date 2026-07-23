import { Link } from "@tanstack/react-router";
import { sections } from "@/lib/sections";
import type { ReactNode } from "react";

type Props = {
  num: string;
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
  slug: string;
};

export function PageShell({ num, kicker, title, lede, children, slug }: Props) {
  const idx = sections.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 lg:px-14 py-16 lg:py-24">
      <header className="mb-14 border-b border-border pb-10">
        <div className="flex items-center gap-3 text-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-accent">§ {num}</span>
          <span className="h-px w-8 bg-border" />
          <span>{kicker}</span>
        </div>
        <h1 className="mt-6 text-serif text-5xl md:text-6xl leading-[1.02] tracking-tight text-foreground">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lede}
          </p>
        )}
      </header>

      <div className="prose-block space-y-6 text-[15.5px] leading-[1.75] text-foreground/90">
        {children}
      </div>

      <nav className="mt-24 grid grid-cols-2 gap-4 border-t border-border pt-8">
        <div>
          {prev && (
            <Link to={prev.path} className="group block">
              <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                ← Prev · {prev.num}
              </div>
              <div className="mt-1 text-foreground group-hover:text-accent transition-colors">
                {prev.title}
              </div>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link to={next.path} className="group block">
              <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Next · {next.num} →
              </div>
              <div className="mt-1 text-foreground group-hover:text-accent transition-colors">
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

export function Callout({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-accent bg-surface/60 px-5 py-4">
      {label && (
        <div className="text-mono text-[10px] uppercase tracking-widest text-accent mb-2">
          {label}
        </div>
      )}
      <div className="text-foreground/90">{children}</div>
    </aside>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-md border border-border bg-surface/80 p-5 text-[13px] leading-relaxed text-foreground/90 text-mono">
      <code>{children}</code>
    </pre>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 mb-4 text-serif text-3xl text-foreground tracking-tight">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 mb-3 text-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </h3>
  );
}
