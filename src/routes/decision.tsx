import { createFileRoute } from "@tanstack/react-router";
import { Callout, H2, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/decision")({
  head: () => ({
    meta: [
      { title: "§05 · The core technical decision — Segmentation build guide" },
      {
        name: "description",
        content:
          "Log-transform and scale before K-Means, and validate k with elbow, silhouette, business interpretability, and bootstrap stability — not silhouette alone.",
      },
      { property: "og:title", content: "§05 · The core technical decision" },
      { property: "og:description", content: "The paragraph that separates you from every K-Means-on-raw-RFM tutorial clone." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      num="05"
      slug="decision"
      kicker="Log-transform + k selection"
      title="The core technical decision."
      lede="Write this paragraph down. It's the one that separates you from every 'ran K-Means on raw RFM' tutorial clone — and the one an interviewer will push on."
    >
      <H2>Log-transform and scale before clustering</H2>
      <p>
        K-Means assumes roughly spherical, similarly-scaled clusters — it minimizes
        Euclidean distance to centroids. Raw retail monetary and frequency data is
        heavily right-skewed. A handful of high-value customers will dominate the
        distance calculations and distort the clusters if you feed in raw values.
      </p>
      <p>
        The fix: log-transform monetary and frequency (recency is usually already
        reasonably behaved), then standardize all three to zero mean / unit variance
        before clustering. Show the before/after cluster quality difference in your
        README — this comparison is a genuinely strong, specific thing to walk through
        in an interview.
      </p>

      <H2>Don't stop at silhouette score for choosing k</H2>
      <p>
        Silhouette alone can favor a k that's statistically "cleaner" but useless for
        marketing (e.g. k=2, which is rarely actionable). Combine three signals:
      </p>

      <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
        {[
          ["Elbow method", "Watch inertia. Look for the diminishing-returns bend, not just the minimum."],
          ["Silhouette score", "Statistical cluster separation. Useful, but never on its own."],
          ["Business interpretability", "Does each cluster actually correspond to a distinct, actionable persona?"],
        ].map(([t, b]) => (
          <div key={t} className="border border-border bg-surface/40 p-5">
            <div className="text-mono text-[10px] uppercase tracking-widest text-accent">
              {t}
            </div>
            <p className="mt-2 text-sm text-foreground/85">{b}</p>
          </div>
        ))}
      </div>

      <p>
        Then confirm the choice holds up under a bootstrap stability check. If cluster
        membership is wildly unstable across resamples, the chosen k is fragile even if
        the metrics look fine on one run.
      </p>

      <Callout label="Why this matters">
        Being explicit that you checked <em>stability</em>, not just fit one model and
        reported the silhouette score, is the single detail that convinces a reviewer
        you've actually validated unsupervised output before. Most candidates haven't.
      </Callout>
    </PageShell>
  );
}
