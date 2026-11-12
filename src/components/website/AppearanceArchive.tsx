"use client";
import { useState } from "react";
import { appearances, profileSources } from "@/lib/profileSources";
export default function AppearanceArchive() {
  const [filter, setFilter] = useState("All formats");
  const items = appearances.filter(
    (a) => filter === "All formats" || a.kind === filter,
  );
  return (
    <div className="appearance-archive">
      <div
        className="filter-buttons light-filters"
        aria-label="Filter appearances"
      >
        {["All formats", "Workshop", "Panel", "Interview"].map((f) => (
          <button
            type="button"
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {items.length} appearances
      </p>
      <div>
        {items.map((a) => (
          <a
            className="appearance"
            key={a.title}
            href={profileSources[a.source].href}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span className="event-date">{a.date}</span>
              <span className="tag">{a.kind}</span>
            </div>
            <div>
              <p className="eyebrow">{a.venue}</p>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
            <span className="event-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
