import { createFileRoute } from "@tanstack/react-router";
import { Callout, H3, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/dataset")({
  head: () => ({
    meta: [
      { title: "§01 · Pick your dataset — Segmentation build guide" },
      {
        name: "description",
        content:
          "Which public retail transaction dataset to use for a credible RFM segmentation portfolio project.",
      },
      { property: "og:title", content: "§01 · Pick your dataset" },
      {
        property: "og:description",
        content: "UCI Online Retail II, Olist, or Instacart — and which one recruiters will believe.",
      },
    ],
  }),
  component: Page,
});

const options = [
  {
    name: "UCI Online Retail II",
    tag: "The classic",
    body:
      "~1M UK e-commerce transactions. The standard for RFM work — worth going deeper than the average tutorial that ships with it.",
  },
  {
    name: "Olist Brazilian E-Commerce",
    tag: "Recommended",
    body:
      "Richer than the UCI set. Includes reviews, delivery times, product categories — the dataset that lets extended feature engineering have real substance beyond three RFM numbers.",
  },
  {
    name: "Instacart Market Basket",
    tag: "Basket-heavy",
    body:
      "Strong for frequency and basket-composition features, weaker on monetary value. Pair with a synthetic price table if you go this route.",
  },
];

function Page() {
  return (
    <PageShell
      num="01"
      slug="dataset"
      kicker="Real data, real signal"
      title="Pick your dataset."
      lede="Use a real public retail transaction dataset so recency, frequency, and monetary numbers are genuine — not simulated. Reviewers can tell the difference."
    >
      <H3>Three credible options</H3>
      <div className="grid gap-4 not-prose">
        {options.map((o, i) => (
          <div
            key={o.name}
            className="border border-border bg-surface/50 p-6 flex gap-6"
          >
            <div className="text-mono text-xs text-muted-foreground w-10 tabular-nums pt-1">
              0{i + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h4 className="text-serif text-2xl text-foreground">{o.name}</h4>
                <span className="text-mono text-[10px] uppercase tracking-widest text-accent">
                  {o.tag}
                </span>
              </div>
              <p className="mt-2 text-foreground/85">{o.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout label="Recommendation">
        Go with <strong className="text-foreground">Olist</strong> if you want the
        extended-feature and category-diversity story to have real substance — it's
        the dataset that makes this read as applied commerce analytics rather than a
        stats-class exercise.
      </Callout>
    </PageShell>
  );
}
