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
  dek: string;
  date: string;
  section: SectionId;
  also: SectionId[];
  kicker?: string;
  asOf?: string;
  ogImage: string;
  ogAlt: string;
  body: Block[];
};
