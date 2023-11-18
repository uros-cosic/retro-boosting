import BoostContainer from "@/components/BoostContainer";
import React from "react";

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Choose Your Rank</h1>
      <BoostContainer
        switchableOptions={[
          {
            label: "Offline Mode (FREE)",
            detail: "Appear offline in league client chat",
          },
          {
            label: "Priority Order (+20%)",
            detail: "Your order will get done faster",
          },
          {
            label: "Stream Games (+15%)",
            detail: "Booster will stream the games for you",
          },
          {
            label: "Solo Only (+20%)",
            detail: "Booster won't play with a duo",
          },
        ]}
        extraOptions={true}
      />
    </div>
  );
}

export default Page;
