import React from "react";
import BoostContainer from "@/components/BoostContainer";
import { duoBoostSwitchableOptions } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RETRO-BOOSTING - League of Legends Duo Boosting",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
};

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10 px-1 lg:px-0">
      <h1 className="text-3xl font-normal">Choose Your Rank</h1>
      <BoostContainer
        switchableOptions={duoBoostSwitchableOptions}
        extraOptions={false}
      />
    </div>
  );
}

export default Page;
