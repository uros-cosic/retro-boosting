import React from "react";
import BoostContainer from "@/components/BoostContainer";
import { duoBoostSwitchableOptions } from "@/lib/data";

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
