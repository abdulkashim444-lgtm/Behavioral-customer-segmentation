export type Section = {
  num: string;
  slug: string;
  path: string;
  title: string;
  kicker: string;
};

export const sections: Section[] = [
  { num: "00", slug: "overview", path: "/", title: "Overview", kicker: "The pitch" },
  { num: "01", slug: "dataset", path: "/dataset", title: "Pick your dataset", kicker: "Real data, real signal" },
  { num: "02", slug: "features", path: "/features", title: "Feature set", kicker: "Core, differentiators, stretch" },
  { num: "03", slug: "stack", path: "/stack", title: "Tech stack", kicker: "What signals well" },
  { num: "04", slug: "pipeline", path: "/pipeline", title: "Pipeline sketch", kicker: "Stage by stage" },
  { num: "05", slug: "decision", path: "/decision", title: "Core technical decision", kicker: "Log-transform + k selection" },
  { num: "06", slug: "plan", path: "/plan", title: "10-week build plan", kicker: "Week by week" },
  { num: "07", slug: "prompts", path: "/prompts", title: "AI coding prompts", kicker: "Copy-ready per phase" },
  { num: "08", slug: "checklist", path: "/checklist", title: "Recruiter checklist", kicker: "What makes it land" },
  { num: "09", slug: "interview", path: "/interview", title: "Interview talking points", kicker: "What this unlocks" },
];
