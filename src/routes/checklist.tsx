import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "§08 · Recruiter checklist — Segmentation build guide" },
      {
        name: "description",
        content:
          "The eight artifacts that make this project recruiter-attractive — from a live dashboard to a stability chart and a blog post.",
      },
      { property: "og:title", content: "§08 · Recruiter checklist" },
      { property: "og:description", content: "Eight artifacts. Ship all of them." },
    ],
  }),
  component: Page,
});

const items = [
  "Live deployed dashboard with the real dataset loaded — no setup required for reviewers.",
  "2–3 minute video walking through a persona, its CLV tier, and the budget allocation output.",
  "Architecture diagram in the README + the log-transform / k-selection decision write-up.",
  'Stability analysis result shown explicitly (e.g. "clusters were 87% stable across 50 bootstrap resamples").',
  "CLV model calibration chart (predicted vs. actual on the holdout period) — proves it's validated, not just fit.",
  "MLflow run comparison table or screenshot showing multiple k / preprocessing configurations were actually tried.",
  "Clean commit history; notebooks kept separate from the production pipeline code.",
  'Blog post: "why I almost picked the wrong k, and what silhouette score alone hides." This is the one that gets remembered.',
];

function Page() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const doneCount = Object.values(done).filter(Boolean).length;

  return (
    <PageShell
      num="08"
      slug="checklist"
      kicker="What makes it land"
      title="Recruiter checklist."
      lede="Eight concrete artifacts. Tick them off as you go — the last one is the one that gets remembered."
    >
      <div className="not-prose mt-2 mb-6 flex items-center justify-between border-b border-border pb-3">
        <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Progress
        </div>
        <div className="text-mono text-sm text-accent tabular-nums">
          {doneCount} / {items.length}
        </div>
      </div>

      <ul className="not-prose divide-y divide-border border-y border-border">
        {items.map((it, i) => {
          const checked = !!done[i];
          return (
            <li key={i}>
              <button
                onClick={() => setDone((d) => ({ ...d, [i]: !d[i] }))}
                className="flex w-full items-start gap-4 px-2 py-4 text-left hover:bg-surface/60 transition"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${
                    checked ? "border-accent bg-accent text-accent-foreground" : "border-border"
                  }`}
                >
                  {checked ? "✓" : ""}
                </span>
                <span
                  className={`text-[15px] transition ${
                    checked ? "text-muted-foreground line-through" : "text-foreground"
                  }`}
                >
                  {it}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
