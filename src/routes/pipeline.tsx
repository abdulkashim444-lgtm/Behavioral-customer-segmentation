import { createFileRoute } from "@tanstack/react-router";
import { Callout, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "§04 · Pipeline sketch — Segmentation build guide" },
      {
        name: "description",
        content:
          "Stage-by-stage sketch of the segmentation pipeline: raw transactions through cluster assignments to a budget allocation optimizer.",
      },
      { property: "og:title", content: "§04 · Pipeline sketch" },
      { property: "og:description", content: "Every stage as a typed module with a defined input/output schema." },
    ],
  }),
  component: Page,
});

const stages = [
  ["raw_transactions", "the source of truth"],
  ["cleaned_transactions", "dedupe, currency/return handling, date parsing"],
  ["customer_rfm_features", "recency, frequency, monetary per customer"],
  ["customer_extended_features", "category diversity, discount sensitivity, channel, seasonality"],
  ["cluster_assignments", "K-Means output + silhouette/stability metadata → MLflow"],
  ["personas", "named, described segments with summary stats"],
  ["clv_estimates", "BG/NBD + Gamma-Gamma per customer, rolled up per persona"],
  ["campaign_simulations", "simulated lift/ROI per persona × campaign type"],
  ["budget_allocation", "optimizer output: recommended spend per persona"],
];

function Page() {
  return (
    <PageShell
      num="04"
      slug="pipeline"
      kicker="Stage by stage"
      title="Pipeline sketch."
      lede="Each stage is a function/module with a defined input/output schema. That's what makes the 'reproducible notebook-to-dashboard flow' claim actually true instead of aspirational."
    >
      <div className="not-prose my-8">
        <ol className="relative">
          {stages.map(([name, desc], i) => (
            <li key={name} className="relative flex gap-6 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent bg-background text-mono text-[11px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < stages.length - 1 && (
                  <div className="flex-1 w-px bg-border mt-1" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="text-mono text-sm text-foreground">{name}</div>
                <div className="text-sm text-muted-foreground mt-1">{desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <Callout label="Discipline">
        Notebooks are for exploration. The pipeline lives in tested, importable modules
        that both the notebooks and the dashboard call. Every stage has a schema check.
      </Callout>
    </PageShell>
  );
}
