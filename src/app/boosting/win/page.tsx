import WinBoostContainer from "@/components/WinBoostContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - League of Legends Win Boosting",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10 px-1 lg:px-0">
      <h1 className="text-3xl font-normal">Choose Your Rank</h1>
      <WinBoostContainer />
    </div>
  );
}

export default Page;
