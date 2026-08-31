import type { Metadata } from "next";
import { SectionPage } from "@/app/section-page";

export const metadata: Metadata = {
  title: "Macro",
  description: "CMT, blackout, jobs, and Japan. No invented FedWatch.",
  alternates: { canonical: "/macro/" },
};

export default function Page() {
  return <SectionPage id="macro" />;
}
