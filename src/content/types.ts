import type { SectionId } from "@/lib/site";

export type Stat = {
  label: string;
  value: string;
  note?: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "lede"; text: string }
  | { type: "stats"; items: Stat[] }
  | {
      type: "figure";
      src: string;
      alt: string;
      /** Caption supports the same inline markdown links as paragraphs. */
      caption?: string;
      width?: number;
      height?: number;
      /** Responsive variants: [src, intrinsic width in px]. */
      srcSet?: [string, number][];
      /** Photo credit line for schema (creditText). */
      credit?: string;
      license?: string;
      /** License or rights page (schema license / acquireLicensePage). */
      licenseUrl?: string;
      /** Original file page (DVIDS, Wikimedia Commons). */
      sourcePage?: string;
    }
  | { type: "callout"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "table"; columns: string[]; rows: string[][]; caption?: string };

export type Article = {
  slug: string;
  title: string;
  /** Document title when it should differ from the H1. */
  titleTag?: string;
  dek: string;
  /** Search, social, and schema description when it should differ from the visible dek. */
  metaDescription?: string;
  /** Schema.org headline when it should differ from the H1. */
  schemaHeadline?: string;
  date: string;
  section: SectionId;
  also: SectionId[];
  kicker?: string;
  asOf?: string;
  /** Visible clock when it should not be rendered in Eastern time. */
  displayTime?: string;
  publishedAt?: string;
  updatedAt?: string;
  ogImage: string;
  ogAlt: string;
  /** Extra NewsArticle schema images (16:9, 4:3, 1:1 hero crops), site-relative. */
  schemaImages?: string[];
  body: Block[];
};
