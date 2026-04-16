import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YCB Weekend Edition",
  description:
    "A fast-paced, 3-day experience where students move from ideas to action — YCB Weekend Edition across leading institutions in India.",
};

export default function WeekendEditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
