"use client";

import Link from "next/link";

const orbitItems = [
  { label: "GitHub",     angle: 0 },
  { label: "S3",         angle: 60 },
  { label: "CloudFront", angle: 120 },
  { label: "ACM/SSL",    angle: 180 },
  { label: "CI/CD",      angle: 240 },
  { label: "IAM",        angle: 300 },
];

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-16 px-6 pt-28 pb-16 md:flex-row md:pt-32">
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div
          className="mb-6 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand"
          style={{ animation: "fade-in 0.5s ease forwards" }}
        >
          Live on AWS Amplify
        </div>

        <h1
          className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ animation: "fade-up 0.6s ease forwards", letterSpacing: "-1.5px" }}
        >
          From Code to Cloud
          <br />
          <span className="text-brand">in Under 3 Minutes.</span>
        </h1>

        <p
          className="mb-8 max-w-lg text-lg text-muted"
          style={{ animation: "fade-up 0.7s ease forwards" }}
        >
          This page was deployed using AWS Amplify — no servers configured, no
          Nginx, no SSL setup. Just a{" "}
          <code className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-sm text-brand">
            git push
          </code>
          .
        </p>

        <div
          className="mb-10 flex flex-wrap gap-4"
          style={{ animation: "fade-up 0.8s ease forwards" }}
        >
          <Link
            href="#services"
            className="rounded-lg bg-brand px-7 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_8px_24px_rgba(255,153,0,0.3)]"
          >
            Explore Topics
          </Link>
          <Link
            href="#resources"
            className="rounded-lg border border-white/10 px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
          >
            Free Resources
          </Link>
        </div>

        <p className="text-sm text-muted" style={{ animation: "fade-in 1s ease forwards" }}>
          🎓 DDIT Nadiad &nbsp;·&nbsp; IT 6th Semester &nbsp;·&nbsp; AWS Seminar 2025
        </p>
      </div>

      {/* Orbit Diagram */}
      <div className="flex flex-shrink-0 items-center justify-center md:w-80">
        <div className="relative h-72 w-72">
          {/* Center */}
          <div
            className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-center text-sm font-extrabold leading-tight text-black"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          >
            AWS
            <br />
            Amplify
          </div>

          {/* Orbit ring */}
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          {/* Orbit items */}
          {orbitItems.map(({ label, angle }) => (
            <div
              key={label}
              className="orbit-item"
              style={{ "--orbit-angle": `${angle}deg` } as React.CSSProperties}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
