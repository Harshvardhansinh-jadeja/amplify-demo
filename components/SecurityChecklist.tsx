const groups = [
  {
    title: "IAM",
    items: [
      "Root account MFA enabled",
      "No access keys for root account",
      "IAM users have MFA",
      "Use Roles for services, not Users",
      "Least privilege policy applied",
      "Access keys rotated every 90 days",
      "No hardcoded credentials in code",
    ],
  },
  {
    title: "S3",
    items: [
      "Block Public Access enabled",
      "No wildcard Principal in bucket policy",
      "Server-side encryption enabled",
      "Versioning enabled for critical data",
      "Access logging enabled",
      "Lifecycle rules configured",
    ],
  },
  {
    title: "Amplify / General",
    items: [
      "HTTPS enforced (no HTTP)",
      "Secrets in Amplify env vars, not code",
      "Production secrets in Secrets Manager",
      ".env files in .gitignore",
      "Billing alert set (at $5 minimum)",
      "Staging branch password-protected",
    ],
  },
];

export default function SecurityChecklist() {
  return (
    <section id="security" className="bg-surface py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Cloud Security Checklist
          </h2>
          <p className="text-muted text-lg">Before you ship anything to production, verify these.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map(({ title, items }, i) => (
            <div
              key={title}
              className="card-enter rounded-xl border border-white/8 bg-card p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-0.5 shrink-0 font-bold text-success">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
