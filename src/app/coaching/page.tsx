import CoachingContainer from "@/components/CoachingContainer";
import React from "react";

function Page() {
  return (
    <div className="py-10 text-white max-w-5xl mx-auto space-y-10 px-1 lg:px-0">
      <h1 className="text-3xl font-normal">Coaching Order</h1>
      <CoachingContainer />
    </div>
  );
}

export default Page;
