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
  | { type: "figure"; src: string; alt: string; caption?: string }
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
  body: Block[];
};
