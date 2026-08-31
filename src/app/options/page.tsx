import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Options",
  description: "GEX snapshots, weekly OPEX, and books that do not agree on delta.",
  alternates: { canonical: "/options/" },
};

export default function Page() {
  return <SectionPage id="options" />;
}
