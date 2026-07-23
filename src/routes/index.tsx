import { createFileRoute, Link } from "@tanstack/react-router";
import { sections } from "@/lib/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Behavioral Customer Segmentation — Build Guide" },
      {
        name: "description",
        content:
          "A flagship senior-level data science portfolio project: RFM + K-Means with probabilistic CLV, validated segmentation, and a budget optimizer.",
      },
      { property: "og:title", content: "Behavioral Customer Segmentation — Build Guide" },
      {
        property: "og:description",
        content:
          "A flagship senior-level data science portfolio project: RFM + K-Means with probabilistic CLV, validated segmentation, and a budget optimizer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const chapters = sections.slice(1);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-3xl px-6 lg:px-14 py-20 lg:py-32">
        <div className="flex items-center gap-3 text-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-accent">◆</span>
          <span>A portfolio project brief</span>
          <span className="h-px flex-1 bg-border" />
          <span>10 weeks</span>
        </div>

        <h1 className="mt-10 text-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
          Behavioral<br />
          customer<br />
          <span className="italic text-accent">segmentation</span>.
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          A flagship, senior-level data science portfolio project. RFM plus K-Means, but
          past the tutorial ceiling — <span className="text-foreground">validated,
          probabilistic, and pointed at a real marketing decision</span>.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            ["10", "weeks"],
            ["3", "validation methods"],
            ["50+", "bootstrap resamples"],
            ["1", "budget optimizer"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-5">
              <div className="text-serif text-3xl text-accent">{n}</div>
              <div className="mt-1 text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/dataset"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Start reading <span aria-hidden>→</span>
          </Link>
          <Link
            to="/decision"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:bg-surface transition"
          >
            Jump to the core decision
          </Link>
        </div>

        <section className="mt-24">
          <div className="text-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Table of contents
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {chapters.map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.path}
                  className="group flex items-baseline gap-6 py-5 hover:bg-surface/60 px-2 -mx-2 transition"
                >
                  <span className="text-mono text-xs tabular-nums text-accent w-8">
                    {s.num}
                  </span>
                  <span className="flex-1">
                    <div className="text-serif text-2xl text-foreground group-hover:text-accent transition">
                      {s.title}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">{s.kicker}</div>
                  </span>
                  <span className="text-mono text-xs text-muted-foreground group-hover:text-accent transition">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-24 pt-8 border-t border-border text-mono text-[11px] uppercase tracking-widest text-muted-foreground flex justify-between">
          <span>Build guide / v1</span>
          <span>Senior DS portfolio</span>
        </footer>
      </div>
    </div>
  );
}
