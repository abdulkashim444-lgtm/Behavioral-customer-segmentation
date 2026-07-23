import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "§06 · 10-week build plan — Segmentation build guide" },
      {
        name: "description",
        content:
          "A concrete 10-week schedule from raw data pipeline foundation to deployed dashboard and write-up.",
      },
      { property: "og:title", content: "§06 · 10-week build plan" },
      { property: "og:description", content: "Week-by-week milestones for the full 2–3 month build." },
    ],
  }),
  component: Page,
});

const weeks = [
  {
    label: "Weeks 1–2",
    title: "Data pipeline foundation",
    items: [
      "Ingest and clean the raw dataset; exploratory analysis.",
      "Build the RFM feature engineering module (recency, frequency, monetary per customer).",
      "Data validation checks (pandera/Great Expectations) wired into the pipeline.",
    ],
  },
  {
    label: "Weeks 3–4",
    title: "Clustering & validation",
    items: [
      "Preprocessing: log-transform + standardization, with the before/after comparison documented.",
      "K-Means with k selection via elbow + silhouette + business interpretability.",
      "Bootstrap stability analysis across resamples.",
      "MLflow tracking wired in from the first clustering run.",
    ],
  },
  {
    label: "Weeks 5–6",
    title: "Personas & CLV",
    items: [
      "Translate clusters into named personas with descriptive stats and example customers.",
      "Extended feature engineering (category diversity, discount sensitivity, channel, seasonality).",
      "BG/NBD + Gamma-Gamma CLV modeling, validated against a held-out recent time period.",
    ],
  },
  {
    label: "Weeks 7–8",
    title: "Interactive dashboard",
    items: [
      "Streamlit persona explorer: filters, drill-downs, distribution charts, customer sample tables.",
      "CLV tier visualization per persona.",
      "Polish: clear narrative flow, not a grid of charts dumped on a page.",
    ],
  },
  {
    label: "Week 9",
    title: "Campaign ROI simulation & optimization",
    items: [
      "Simulate campaign lift per persona with honest uncertainty ranges.",
      "Budget allocation optimizer (linear program) given a fixed spend constraint.",
      "Results panel added to the dashboard.",
    ],
  },
  {
    label: "Week 10",
    title: "Reproducibility, deploy, write-up",
    items: [
      "Ensure the full pipeline runs end-to-end from raw data to dashboard with one command.",
      "Deploy the dashboard, seed with the real dataset.",
      "Write the README + architecture doc + a blog post on the k-selection and validation story.",
    ],
  },
];

function Page() {
  return (
    <PageShell
      num="06"
      slug="plan"
      kicker="Week by week"
      title="10-week build plan."
      lede="Ten weeks from raw transactions to a deployed dashboard, an optimizer, and a blog post recruiters will remember."
    >
      <div className="not-prose grid gap-6 mt-4">
        {weeks.map((w, i) => (
          <section key={w.label} className="border border-border bg-surface/40 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
              <div className="flex items-baseline gap-3">
                <span className="text-mono text-[10px] tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-mono text-xs uppercase tracking-widest text-accent">
                  {w.label}
                </span>
              </div>
              <h3 className="text-serif text-2xl text-foreground">{w.title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {w.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-foreground/90">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
