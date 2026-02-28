import { Fragment } from "react";

const resources = [
  {
    icon: "📚",
    title: "AWS Skill Builder",
    desc: "Official AWS learning platform. Free courses, practice exams, and labs.",
    link: "skillbuilder.aws",
    href: "https://skillbuilder.aws",
  },
  {
    icon: "🛠",
    title: "AWS Workshops",
    desc: "Free hands-on labs. Build real things on actual AWS accounts.",
    link: "workshops.aws",
    href: "https://workshops.aws",
  },
  {
    icon: "🆓",
    title: "AWS Free Tier",
    desc: "12 months free on most services. Set a $5 billing alert first.",
    link: "aws.amazon.com/free",
    href: "https://aws.amazon.com/free",
  },
  {
    icon: "⚡",
    title: "Amplify Docs",
    desc: "Official Amplify documentation with guides and tutorials.",
    link: "docs.amplify.aws",
    href: "https://docs.amplify.aws",
  },
];

const certs = [
  {
    level: "Beginner",
    color: "bg-success/15 text-success",
    title: "Cloud Practitioner",
    sub: "CLF-C02 · ~2 months · ₹8,500 exam",
  },
  {
    level: "Associate",
    color: "bg-brand/15 text-brand",
    title: "Solutions Architect",
    sub: "SAA-C03 · Best overall · Most recognized",
  },
  {
    level: "Associate",
    color: "bg-brand/15 text-brand",
    title: "Developer Associate",
    sub: "DVA-C02 · Best for this seminar's topics",
  },
  {
    level: "Specialty",
    color: "bg-accent/15 text-sky-400",
    title: "Security Specialty",
    sub: "SCS-C02 · Advanced · High salary bump",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-dark py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Free Learning Resources
          </h2>
          <p className="text-muted text-lg">
            Everything you need to go from here to AWS certified.
          </p>
        </div>

        {/* Resource cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(({ icon, title, desc, link, href }, i) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-enter block rounded-xl border border-white/8 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/35"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 text-3xl">{icon}</div>
              <h4 className="mb-2 font-bold">{title}</h4>
              <p className="mb-4 text-sm leading-relaxed text-muted">{desc}</p>
              <span className="text-xs font-semibold text-brand">{link} →</span>
            </a>
          ))}
        </div>

        {/* Certification path */}
        <div className="rounded-xl border border-white/8 bg-card p-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted">
            Certification Path
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {certs.map(({ level, color, title, sub }, i) => (
              <Fragment key={title}>
                <div className="flex-1 rounded-xl border border-white/8 bg-surface p-5">
                  <span className={`mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide ${color}`}>
                    {level}
                  </span>
                  <h4 className="mb-1 text-sm font-bold">{title}</h4>
                  <p className="text-xs text-muted">{sub}</p>
                </div>
                {i < certs.length - 1 && (
                  <div className="hidden text-xl text-white/15 md:block">→</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
