import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Commodities",
  description: "Oil is $WTI. Never $CL. A headline is not a breakout.",
  alternates: { canonical: "/commodities/" },
};

export default function Page() {
  return <SectionPage id="commodities" />;
}
