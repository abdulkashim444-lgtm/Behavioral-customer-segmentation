import { createFileRoute } from "@tanstack/react-router";
import { H2, H3, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "§02 · Feature set — Segmentation build guide" },
      {
        name: "description",
        content:
          "Core scope, differentiators recruiters notice, and stretch goals for a senior-level RFM + CLV segmentation project.",
      },
      { property: "og:title", content: "§02 · Feature set" },
      { property: "og:description", content: "Core, differentiators, and stretch — what actually ships." },
    ],
  }),
  component: Page,
});

const core = [
  "Reproducible pipeline: raw transactions → cleaned data → customer-level RFM features, as a script/package, not a notebook you ran once.",
  "RFM scoring (quantile-based 1–5 scores) as an interpretable baseline segmentation.",
  "K-Means clustering with proper preprocessing (log-transform + standardization).",
  "k selection justified by silhouette score AND elbow method AND cluster stability — not silhouette alone.",
  "Persona generation: translate numeric clusters into named, described personas (Champions, At-Risk High-Value, New, Lost…) with summary statistics.",
  "Interactive persona explorer dashboard: filter and drill into personas, see distributions, sample customers.",
  "Customer lifetime value tiers per persona.",
  "Reproducible notebook-to-dashboard flow: notebooks explore, but the actual pipeline lives in tested, importable Python modules that both the notebooks and the dashboard call.",
];

const diff = [
  ["Probabilistic CLV", "BG/NBD (frequency) + Gamma-Gamma (monetary) instead of naive AOV × expected purchases. The single biggest signal of applied DS maturity in this project."],
  ["Temporal validation", "Hold out the most recent time period, fit on earlier data, and check whether persona assignments and CLV predictions actually held up against what customers did next."],
  ["Cluster stability analysis", "Bootstrap-resample the customer base and refit K-Means repeatedly; report how consistently customers land in the same cluster. Proves it isn't an artifact of one lucky random seed."],
  ["Extended features beyond RFM", "Category diversity, discount sensitivity, preferred channel, purchase seasonality — makes personas feel like real customer behavior, not three numbers."],
  ["Campaign ROI simulation", "Simulate targeting each persona with different campaign types and estimate lift with honest uncertainty ranges, not single point estimates."],
  ["Budget allocation optimizer", "Given a fixed marketing budget and estimated ROI per persona, solve a constrained optimization for how to allocate spend. Directly answers 'used to drive marketing spend.'"],
  ["MLflow experiment tracking", "Every clustering run (k value, preprocessing choice, silhouette score, stability score) logged and comparable."],
];

const stretch = [
  "Lightweight scoring API that assigns a new customer to a persona using stored cluster centroids, without retraining.",
  "Uplift/causal modeling instead of naive ROI simulation, to estimate true incremental lift rather than correlation.",
  "Segment drift monitoring: alert when persona composition shifts meaningfully month over month.",
];

function Page() {
  return (
    <PageShell
      num="02"
      slug="features"
      kicker="Core, differentiators, stretch"
      title="Feature set."
      lede="What ships in the core scope, what makes recruiters stop scrolling, and what to add only if month three has room."
    >
      <H2>Core</H2>
      <p className="text-muted-foreground">This is the actual assessment criteria.</p>
      <ul className="not-prose mt-4 space-y-3">
        {core.map((c, i) => (
          <li key={i} className="flex gap-4 border-b border-border pb-3">
            <span className="text-mono text-[10px] tabular-nums text-accent pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground/90">{c}</span>
          </li>
        ))}
      </ul>

      <H2>Differentiators</H2>
      <p className="text-muted-foreground">What makes recruiters stop scrolling.</p>
      <div className="not-prose mt-4 grid gap-3">
        {diff.map(([title, body]) => (
          <div key={title} className="border border-border bg-surface/40 p-5">
            <div className="text-mono text-[11px] uppercase tracking-widest text-accent">
              {title}
            </div>
            <p className="mt-2 text-foreground/90">{body}</p>
          </div>
        ))}
      </div>

      <H2>Stretch</H2>
      <H3>Only if time allows in month 3</H3>
      <ul className="not-prose space-y-2">
        {stretch.map((s, i) => (
          <li key={i} className="flex gap-3 text-foreground/85">
            <span className="text-accent">◆</span>
            {s}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
