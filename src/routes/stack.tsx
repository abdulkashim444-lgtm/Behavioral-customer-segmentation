import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "§03 · Tech stack — Segmentation build guide" },
      {
        name: "description",
        content:
          "Layer-by-layer stack for an RFM + CLV segmentation project: pandas/Polars/DuckDB, scikit-learn, lifetimes, MLflow, Streamlit, PuLP.",
      },
      { property: "og:title", content: "§03 · Tech stack" },
      { property: "og:description", content: "Every layer, every choice, and why it signals well." },
    ],
  }),
  component: Page,
});

const rows = [
  ["Data processing", "Python, pandas, Polars or DuckDB for larger aggregations", "DuckDB/Polars shows you're not naively looping over a million rows in pandas."],
  ["Clustering", "scikit-learn (KMeans, StandardScaler, silhouette_score)", "Standard, well-understood, easy for reviewers to verify your methodology."],
  ["CLV modeling", "the lifetimes library (BG/NBD, Gamma-Gamma)", "Purpose-built, credible, avoids reinventing a fragile custom model."],
  ["Experiment tracking", "MLflow", "Logs every clustering run's parameters and scores — a real MLOps habit, not just a portfolio flourish."],
  ["Dashboard", "Streamlit (fastest) or Plotly Dash (more customizable)", "Streamlit for a 2–3 month timeline; mention Dash as the 'if I were productionizing this' alternative."],
  ["Visualization", "Plotly", "Interactive charts embed cleanly in Streamlit and read as polished, not static matplotlib."],
  ["Optimization", "PuLP or scipy.optimize", "Powers the budget allocation linear program."],
  ["Data validation", "pandera or Great Expectations", "Schema/quality checks on the pipeline — proves the pipeline is trustworthy, not just 'it ran.'"],
  ["Storage", "Parquet for intermediate artifacts; Postgres/DuckDB file for final feature and persona tables", "—"],
  ["CI", "GitHub Actions running the pipeline end-to-end + data validation on every PR", "—"],
  ["Deployment", "Streamlit Community Cloud, or Docker + Fly.io/Render", "—"],
];

function Page() {
  return (
    <PageShell
      num="03"
      slug="stack"
      kicker="What signals well"
      title="Tech stack."
      lede="Every choice picked to be verifiable, credible, and defensible in an interview — not just resume tokens."
    >
      <div className="not-prose mt-2 border border-border">
        <div className="grid grid-cols-12 gap-4 border-b border-border bg-surface/70 px-5 py-3 text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div className="col-span-3">Layer</div>
          <div className="col-span-4">Choice</div>
          <div className="col-span-5">Why it signals well</div>
        </div>
        {rows.map(([layer, choice, why], i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-surface/40 transition-colors"
          >
            <div className="col-span-3 text-mono text-xs text-accent">{layer}</div>
            <div className="col-span-4 text-foreground text-[14px]">{choice}</div>
            <div className="col-span-5 text-muted-foreground text-[14px]">{why}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
