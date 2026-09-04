"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { XMark } from "@/components/XMark";
import { asset } from "@/lib/asset";
import { footerNav, primaryNav, site } from "@/lib/site";

function pathOf(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function isCurrent(pathname: string, href: string): boolean {
  const here = pathOf(pathname);
  if (href === "/") return here === "/";
  return here === href || here.startsWith(href);
}

export function FollowCosAnalyst({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className="follow-x"
      href={site.xUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow CosAnalyst on X"
    >
      <XMark />
      {compact ? (
        <span className="follow-x-short">Follow</span>
      ) : (
        <>
          <span className="follow-x-full">Follow {site.handle}</span>
          <span className="follow-x-short">Follow</span>
        </>
      )}
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={`mast${open ? " nav-open" : ""}`}>
      <div className="wrap mast-inner">
        <Link className="brand" href="/" aria-label="CosAnalyst home">
          <img
            src={asset("/brand/fox-mark-arrow.png")}
            alt=""
            width={36}
            height={36}
          />
          <span className="brand-name">{site.name}</span>
        </Link>
        <nav className="mast-nav" id={menuId} aria-label="Primary">
          {primaryNav.map((item) => {
            const current = isCurrent(pathname, item.href);
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div className="nav-item" key={item.href}>
                <Link
                  className="nav-link"
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </Link>
                <div className="nav-sub" role="list">
                  {item.children.map((child) =>
                    child.external ? (
                      <a key={child.href} href={child.href} role="listitem">
                        {child.label}
                      </a>
                    ) : (
                      <Link key={child.href} href={child.href} role="listitem">
                        {child.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="mast-end">
          <FollowCosAnalyst />
          {site.membershipActivated ? (
            <Link className="btn" href="/members/">
              Sign in
            </Link>
          ) : null}
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-brand">{site.name}</p>
          <p>
            <strong>{site.bookFact}</strong>
          </p>
          <p>
            Independent market research. Simulated. {site.publisherLine}. Not
            advice and not a ticket. Oil is $WTI.
          </p>
        </div>
        <div>
          <nav className="foot-nav" aria-label="Footer">
            {footerNav.map((item) =>
              "external" in item && item.external ? (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
            <a href={site.xUrl} target="_blank" rel="noopener noreferrer">
              {site.handle}
            </a>
          </nav>
          <p>
            Desk: <a href={`mailto:${site.email}`}>{site.email}</a>.{" "}
            {site.newsletter} is a separate opt-in. Sector Selector lives at{" "}
            <a href={site.sectorSelectorUrl}>sectorselector.ai</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
