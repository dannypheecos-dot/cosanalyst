import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Markets",
  description: "Desk tape versus the echo. Cash close, not the midday card.",
  alternates: { canonical: "/markets/" },
};

export default function Page() {
  return <SectionPage id="markets" />;
}
