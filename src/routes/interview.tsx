import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/interview")({
  head: () => ({
    meta: [
      { title: "§09 · Interview talking points — Segmentation build guide" },
      {
        name: "description",
        content:
          "The conversations this project unlocks: feature scaling for distance-based clustering, validating unsupervised output, probabilistic CLV, temporal validation, and turning models into decisions.",
      },
      { property: "og:title", content: "§09 · Interview talking points" },
      { property: "og:description", content: "Exactly the 'ML into a decision' conversation DS interviews probe for." },
    ],
  }),
  component: Page,
});

const points = [
  ["Feature scaling for distance-based clustering", "Why log-transform + standardization actually matters when Euclidean distance drives your model — and what breaks when it doesn't."],
  ["Validating unsupervised learning", "Silhouette + elbow + business interpretability + bootstrap stability. Four signals, not one. What each one hides."],
  ["Probabilistic vs. naive CLV", "BG/NBD + Gamma-Gamma against 'AOV × expected orders.' When the naive version is wrong, and by how much."],
  ["Temporal validation", "How holding out the most recent window exposes segmentations that only work in retrospect."],
  ["Model → decision", "Translating a clustering output into a budget optimizer with a real spend constraint. This is the conversation DS interviews at Google and Microsoft probe for — and very few candidates can defend their k-selection under questioning."],
];

function Page() {
  return (
    <PageShell
      num="09"
      slug="interview"
      kicker="What this unlocks"
      title="Interview talking points."
      lede="The specific conversations this project prepares you to have — and win — in a senior data science loop."
    >
      <div className="not-prose grid gap-4 mt-2">
        {points.map(([t, b], i) => (
          <div key={i} className="flex gap-5 border border-border bg-surface/40 p-6">
            <div className="text-serif text-4xl text-accent leading-none tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-serif text-2xl text-foreground leading-tight">{t}</h3>
              <p className="mt-2 text-foreground/85">{b}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-serif text-2xl leading-snug text-foreground/90">
        This is exactly the <span className="italic text-accent">"can you turn ML
        output into a decision, not just a chart"</span> conversation that senior data
        science loops probe for. Build it, and defend it.
      </p>
    </PageShell>
  );
}
