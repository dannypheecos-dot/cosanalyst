import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Crypto",
  description: "No Cos-verified crypto tape on the desk this week.",
  alternates: { canonical: "/crypto/" },
};

export default function Page() {
  return <SectionPage id="crypto" />;
}
