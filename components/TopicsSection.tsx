const topics = [
  {
    icon: "🚀",
    title: "AWS Amplify Hosting",
    desc: "Deploy frontend apps directly from GitHub with automatic CI/CD, custom domains, SSL certificates, and branch-based environments — all without touching a server.",
    tags: ["CI/CD", "Git Push Deploy", "Free SSL"],
  },
  {
    icon: "🔐",
    title: "IAM Best Practices",
    desc: "Least privilege, IAM Roles over Users, MFA enforcement, and access key hygiene. One misconfigured role cost Capital One $190 million — learn from it.",
    tags: ["Least Privilege", "Roles", "MFA"],
  },
  {
    icon: "🪣",
    title: "S3 Security",
    desc: "Block Public Access, bucket policies, server-side encryption, and access logging. Toyota leaked 2.15M customer records for 10 years from a misconfigured bucket.",
    tags: ["Encryption", "Bucket Policy", "Logging"],
  },
  {
    icon: "🔑",
    title: "Secrets Management",
    desc: "Never hardcode API keys. Use environment variables in Amplify, AWS Secrets Manager for production, and Parameter Store for config values.",
    tags: ["Secrets Manager", "Env Vars", "No Hardcoding"],
  },
  {
    icon: "🌐",
    title: "CloudFront CDN",
    desc: "400+ edge locations globally. Amplify uses CloudFront under the hood — your site loads fast in Mumbai, New York, and Tokyo without any extra config.",
    tags: ["Edge Locations", "Low Latency", "Global"],
  },
  {
    icon: "⚙️",
    title: "CI/CD Pipelines",
    desc: "Push code → tests run → automatic deploy. Branch strategy: feature → dev → staging → main. What real DevOps looks like day to day.",
    tags: ["DevOps", "Automation", "Branches"],
  },
];

export default function TopicsSection() {
  return (
    <section id="services" className="bg-surface py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            What We Covered Today
          </h2>
          <p className="text-muted text-lg">
            A practical look at modern cloud deployment and security.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon, title, desc, tags }, i) => (
            <div
              key={title}
              className="card-enter rounded-xl border border-white/8 bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/35"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/20 bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
