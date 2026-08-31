"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mast">
      <div className="wrap mast-inner">
        <Link className="brand" href="/">
          <img
            src={asset("/brand/fox-mark-arrow.png")}
            alt="CosAnalyst fox mark"
            width={36}
            height={36}
          />
          <span>
            <span className="brand-name">{site.name}</span>
            <span className="brand-tag">{site.tagline}</span>
          </span>
        </Link>
        <nav className="mast-nav" aria-label="Primary">
          {nav.map((item) => {
            const here = pathname.endsWith("/") ? pathname : `${pathname}/`;
            const current =
              item.href === "/"
                ? here === "/"
                : here === item.href || here.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <p>
          <strong>{site.tagline}</strong>
        </p>
        <p>
          {site.name} is a research desk publication. Simulated research.{" "}
          {site.publisherLine}. Not advice and not a ticket. Oil is $WTI.
          Desk: <a href={`mailto:${site.email}`}>{site.email}</a>. {site.handle}.
        </p>
      </div>
    </footer>
  );
}
