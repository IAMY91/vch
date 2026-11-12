"use client";
import { useMemo, useState } from "react";
import { publications } from "@/lib/profileSources";
const categories = [
  "All work",
  "Neuroimmunology",
  "Research culture",
  "Diagnostics",
];
export default function PublicationLibrary() {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      publications.filter(
        (p) =>
          (category === "All work" || p.category === category) &&
          `${p.title} ${p.year} ${p.journal} ${p.summary}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );
  return (
    <div className="publication-library">
      <div className="library-controls">
        <div className="filter-buttons" aria-label="Filter publications">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-label">
          <span className="sr-only">Search publications</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search title, topic or year"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {filtered.length} selected{" "}
        {filtered.length === 1 ? "publication" : "publications"}
      </p>
      <div className="publication-list">
        {filtered.map((p) => (
          <article className="publication" key={p.doi}>
            <div className="publication-year">
              {p.year}
              <span>{p.category}</span>
            </div>
            <div>
              <p className="eyebrow">{p.journal}</p>
              <h3>
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.title}
                </a>
              </h3>
              <p>{p.summary}</p>
              <small>{p.role}</small>
              <div className="publication-actions">
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  DOI ↗
                </a>
                <a href={p.fullText} target="_blank" rel="noreferrer">
                  Article / repository ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-result">
          <h3>No matching publications.</h3>
          <p>Try another topic or year.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All work");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
