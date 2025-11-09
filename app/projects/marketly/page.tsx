// app/projects/marketly/page.tsx
import type { Metadata } from "next";
import MarketlyContent from "@/components/projects/MarketlyContent";

export const metadata: Metadata = {
  title: "Marketly — AI Forex Advisor",
  description:
    "Case study: Marketly uses AI to analyze forex markets and recommend the best currency pairs to buy with confidence.",
};

export default function MarketlyPage() {
  return <MarketlyContent />;
}
