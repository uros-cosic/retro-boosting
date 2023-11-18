import SoloBoostContainer from "@/components/SoloBoostContainer";
import React from "react";

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold" id="boosting-menu">
        Choose Your Rank
      </h1>
      <SoloBoostContainer />
    </div>
  );
}

export default Page;
