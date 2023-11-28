import ContentTop from "@/components/ContentTop";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContentTop heading="boosters & coaches" />
      {children}
    </>
  );
}
