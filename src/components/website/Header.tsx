"use client";
import { useEffect, useState } from "react";
const links = [
  ["About", "about"],
  ["Leadership", "leadership"],
  ["Research", "science"],
  ["Speaking", "speaking"],
  ["Media", "media"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="/#home"
        onClick={() => setOpen(false)}
        aria-label="Verena Claudia Haage, home"
      >
        <span className="wordmark-symbol" aria-hidden="true">
          v<span>h</span>
        </span>
        <span>
          <strong>VERENA CLAUDIA HAAGE</strong>
          <small>Neuroscientist. Facilitator. Changemaker.</small>
        </span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">{open ? "Close" : "Open"} menu</span>
        <i />
        <i />
      </button>
      <nav
        id="site-nav"
        className={open ? "nav-open" : ""}
        aria-label="Primary navigation"
      >
        {links.map(([label, id]) => (
          <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/#contact" onClick={() => setOpen(false)}>
        Let’s connect <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
