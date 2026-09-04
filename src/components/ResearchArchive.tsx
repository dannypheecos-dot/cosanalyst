"use client";

import { useMemo, useState } from "react";
import { NoteCard } from "@/components/NoteCard";
import { SectorSelectorBanner } from "@/components/SectorSelectorBanner";
import type { ArticleTeaser } from "@/content/articles";
import { formatDate, sectionLabel } from "@/lib/format";
import type { SectionId } from "@/lib/site";

const FILTERS: { id: "all" | SectionId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "markets", label: "Markets" },
  { id: "macro", label: "Macro" },
  { id: "equities", label: "Equities" },
  { id: "options", label: "Options" },
  { id: "commodities", label: "Commodities" },
  { id: "crypto", label: "Crypto" },
];

export function ResearchArchive({ articles }: { articles: ArticleTeaser[] }) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<(typeof FILTERS)[number]["id"]>("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const sectionOk = section === "all" || article.section === section;
      if (!sectionOk) return false;
      if (!needle) return true;
      return (
        article.title.toLowerCase().includes(needle) ||
        article.dek.toLowerCase().includes(needle) ||
        sectionLabel(article.section).toLowerCase().includes(needle) ||
        formatDate(article.date).toLowerCase().includes(needle)
      );
    });
  }, [articles, query, section]);

  return (
    <>
      <form className="archive-tools" role="search" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="research-query">Search research</label>
          <input
            id="research-query"
            type="search"
            name="q"
            autoComplete="off"
            placeholder="Headline, date, or desk"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div>
          <p className="kicker" id="research-filters">
            Filter
          </p>
          <div className="filter-row" role="group" aria-labelledby="research-filters">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={section === item.id}
                onClick={() => setSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </form>
      <SectorSelectorBanner placement="archive" />
      <div className="grid" style={{ marginTop: "1.4rem" }}>
        {filtered.map((article) => (
          <NoteCard key={article.slug} article={article} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="empty">No Cos-verified notes match that filter.</p>
      ) : null}
    </>
  );
}
