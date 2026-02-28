"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about",     label: "About" },
  { href: "#services",  label: "What We Covered" },
  { href: "#security",  label: "Security" },
  { href: "#resources", label: "Resources" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-brand text-lg font-bold tracking-tight">☁ CloudReady</span>
        <ul className="hidden gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors duration-150 ${
                  active === href.slice(1) ? "text-brand" : "text-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
