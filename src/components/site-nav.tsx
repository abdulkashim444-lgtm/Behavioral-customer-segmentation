import { Link, useRouterState } from "@tanstack/react-router";
import { sections } from "@/lib/sections";
import { useState } from "react";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-5 py-3 backdrop-blur">
        <Link to="/" className="text-mono text-xs tracking-widest uppercase text-muted-foreground">
          <span className="text-accent">◆</span> Segmentation / Build guide
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-mono text-xs uppercase tracking-wider text-foreground"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <aside
        className={`${
          open ? "flex" : "hidden"
        } lg:flex fixed lg:sticky inset-x-0 top-[49px] lg:top-0 z-30 lg:z-auto h-[calc(100vh-49px)] lg:h-screen w-full lg:w-[300px] shrink-0 flex-col border-r border-border bg-surface/60 lg:bg-transparent backdrop-blur px-8 py-10`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="mb-10 hidden lg:block group"
        >
          <div className="text-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            A senior DS portfolio
          </div>
          <div className="mt-2 text-serif text-2xl leading-tight text-foreground">
            Behavioral<br />
            <span className="text-accent italic">segmentation</span>.
          </div>
          <div className="mt-2 text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Build guide / v1
          </div>
        </Link>

        <nav className="flex flex-col gap-0.5 overflow-y-auto pr-2">
          {sections.map((s) => {
            const active = pathname === s.path;
            return (
              <Link
                key={s.slug}
                to={s.path}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline gap-3 rounded-md px-3 py-2 transition-colors ${
                  active
                    ? "bg-surface-2 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-2/60"
                }`}
              >
                <span
                  className={`text-mono text-[10px] tabular-nums ${
                    active ? "text-accent" : "text-muted-foreground/70"
                  }`}
                >
                  {s.num}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm">{s.title}</span>
                  <span className="text-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    {s.kicker}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden lg:block pt-6">
          <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Timeline
          </div>
          <div className="text-serif text-xl text-foreground mt-1">2–3 months</div>
        </div>
      </aside>
    </>
  );
}
