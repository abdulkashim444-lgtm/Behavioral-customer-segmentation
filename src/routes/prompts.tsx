import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";

export const Route = createFileRoute("/prompts")({
  head: () => ({
    meta: [
      { title: "§07 · AI coding prompts — Segmentation build guide" },
      {
        name: "description",
        content:
          "Copy-ready AI coding prompts for each phase: RFM, K-Means with k selection, CLV, Streamlit dashboard, ROI simulator, MLflow tracking.",
      },
      { property: "og:title", content: "§07 · AI coding prompts" },
      { property: "og:description", content: "Six copy-into-Claude-Code prompts, one per phase." },
    ],
  }),
  component: Page,
});

const prompts = [
  {
    title: "RFM feature engineering",
    tag: "Phase 1",
    body: `Write a reproducible pandas pipeline that takes raw retail transaction data
(customer_id, order_date, order_value) and computes RFM features per
customer: recency (days since last purchase, relative to a reference date),
frequency (number of distinct orders), and monetary (total or average
order value). Structure it as a testable function with a clear input/output
schema, and include a pandera schema to validate the output.`,
  },
  {
    title: "K-Means with proper preprocessing and k selection",
    tag: "Phase 2",
    body: `Implement a K-Means clustering pipeline on RFM features that: log-transforms
frequency and monetary (recency left as-is or log-transformed if also
skewed), standardizes all features, fits K-Means for k in range 2-10,
and reports inertia and silhouette score for each k. Plot the elbow curve
and silhouette scores side by side. Then implement a bootstrap stability
check: resample the customer base with replacement N times, refit K-Means
at the chosen k, and report the average adjusted Rand index between runs
as a stability metric.`,
  },
  {
    title: "Probabilistic CLV modeling",
    tag: "Phase 3",
    body: `Using the lifetimes Python library, fit a BG/NBD model on customer
purchase frequency and recency, and a Gamma-Gamma model on average order
value, to estimate probabilistic customer lifetime value. Validate the
model with a train/test split by time (fit on data up to date X, predict
forward, compare against actual behavior after date X). Report the
calibration: are predicted vs actual purchase counts well-aligned?`,
  },
  {
    title: "Streamlit persona explorer dashboard",
    tag: "Phase 4",
    body: `Build a Streamlit dashboard that lets a user select a persona from a
segmentation output table, and shows: the persona's size and share of
total customers, summary statistics (avg recency/frequency/monetary/CLV),
a distribution chart for each RFM dimension within the persona, and a
sample table of real customers in that segment. Use Plotly for interactive
charts and structure the app so persona data loads from a single Parquet
file, not a live database call.`,
  },
  {
    title: "Campaign ROI simulation & budget optimizer",
    tag: "Phase 5",
    body: `Write a simulation that estimates expected ROI from targeting each customer
persona with a marketing campaign, given assumed response rates and margins
per persona (parameterized, not hardcoded), and reports an uncertainty
range using a simple Monte Carlo approach. Then implement a budget
allocation optimizer using PuLP that, given a total budget constraint and
the simulated ROI per persona, solves for the spend allocation that
maximizes expected return, subject to a minimum spend floor per persona.`,
  },
  {
    title: "MLflow experiment tracking",
    tag: "Cross-cutting",
    body: `Wire MLflow tracking into a K-Means clustering pipeline: log the
preprocessing choices (log-transform yes/no), k value, inertia, silhouette
score, and stability score as parameters/metrics for every run, and log
the fitted model as an artifact. Set up a simple script to query MLflow
runs and produce a comparison table across all tried k values and
preprocessing configurations.`,
  },
];

function Page() {
  return (
    <PageShell
      num="07"
      slug="prompts"
      kicker="Copy-ready per phase"
      title="AI coding prompts."
      lede="Paste any of these into Claude Code, Cursor, or an assistant of choice. Each maps to one phase of the build plan."
    >
      <div className="not-prose grid gap-5">
        {prompts.map((p) => (
          <PromptCard key={p.title} {...p} />
        ))}
      </div>
    </PageShell>
  );
}

function PromptCard({ title, tag, body }: { title: string; tag: string; body: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="border border-border bg-surface/50">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3">
        <div className="flex items-baseline gap-3">
          <span className="text-mono text-[10px] uppercase tracking-widest text-accent">
            {tag}
          </span>
          <h4 className="text-foreground text-[15px]">{title}</h4>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(body);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[12.5px] leading-relaxed text-foreground/85 text-mono whitespace-pre-wrap">
        {body}
      </pre>
    </div>
  );
}
