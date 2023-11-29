import ContentTop from "@/components/ContentTop";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - Boosters & Coaches",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentTop heading="boosters & coaches" />
      {children}
    </>
  );
}
