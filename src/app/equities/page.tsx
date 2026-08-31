import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Equities",
  description:
    "Index cash, sector ranking, and what a Friday map will and will not do.",
  alternates: { canonical: "/equities/" },
};

export default function Page() {
  return <SectionPage id="equities" />;
}
