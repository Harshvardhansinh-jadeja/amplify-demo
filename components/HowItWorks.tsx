import { Fragment } from "react";

const steps = [
  {
    n: "1",
    title: "Code pushed to GitHub",
    desc: "HTML, CSS, and JS files in a repository. No build tool needed for a static site.",
  },
  {
    n: "2",
    title: "Amplify connected to GitHub",
    desc: "One-time setup: authorize Amplify → select repo → select branch. Done.",
  },
  {
    n: "3",
    title: "Build pipeline ran",
    desc: "Amplify detected the framework, ran the build, stored artifacts in S3.",
  },
  {
    n: "4",
    title: "Live in 2 minutes",
    desc: "CloudFront distribution created, SSL cert issued, URL generated. Site is live globally.",
  },
];

const hood = [
  { label: "S3", detail: "stores build files", color: "text-orange-400" },
  { label: "CloudFront", detail: "global CDN delivery", color: "text-sky-400" },
  { label: "ACM", detail: "free SSL certificate", color: "text-green-400" },
  { label: "CodeBuild", detail: "runs your build", color: "text-purple-400" },
  { label: "Route 53", detail: "DNS (optional)", color: "text-yellow-400" },
  { label: "IAM", detail: "access control", color: "text-red-400" },
];

export default function HowItWorks() {
  return (
    <section id="about" className="bg-dark py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            How This Page Got Deployed
          </h2>
          <p className="text-muted text-lg">The exact steps used — no magic, just Amplify.</p>
        </div>

        {/* Steps */}
        <div className="mb-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          {steps.map(({ n, title, desc }, i) => (
            <Fragment key={n}>
              <div
                className="card-enter flex flex-1 items-start gap-4 rounded-xl border border-white/8 bg-card p-5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-black">
                  {n}
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold">{title}</h4>
                  <p className="text-xs leading-relaxed text-muted">{desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden text-2xl text-white/15 md:block">→</div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Under the hood */}
        <div className="rounded-xl border border-white/8 bg-card p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
            What Amplify Uses Under the Hood
          </p>
          <div className="flex flex-wrap gap-3">
            {hood.map(({ label, detail, color }) => (
              <div
                key={label}
                className="rounded-lg border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-muted"
              >
                <span className={`font-bold ${color}`}>{label}</span> — {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
