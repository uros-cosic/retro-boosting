import React from "react";
import BoostContainer from "@/components/BoostContainer";

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Choose Your Rank</h1>
      <BoostContainer
        switchableOptions={[
          {
            label: "Priority Order (+20%)",
            detail: "Your order will get done faster",
          },
        ]}
        extraOptions={false}
      />
    </div>
  );
}

export default Page;
