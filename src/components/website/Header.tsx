"use client";
import { useEffect, useRef, useState } from "react";
const links = [
  ["About", "about"],
  ["Leadership", "leadership"],
  ["Research", "science"],
  ["Speaking", "speaking"],
  ["Media", "media"],
  ["Resources", "resources"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (e.target instanceof Node && !header.current?.contains(e.target))
        setOpen(false);
    };
    window.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  useEffect(() => {
    const sections = ["home", ...links.map(([, id]) => id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-18% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header" ref={header}>
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
        ref={menuButton}
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
          <a
            key={id}
            href={`/#${id}`}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        className="header-cta"
        href="/#contact"
        aria-current={active === "contact" ? "location" : undefined}
        onClick={() => setOpen(false)}
      >
        Let’s connect <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
