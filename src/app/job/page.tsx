import JobForm from "@/components/JobForm";
import React from "react";

function Page() {
  return (
    <div className="py-10 max-w-7xl text-light mx-auto space-y-5 px-1">
      <h1 className="text-2xl text-center">We Are Hiring</h1>
      <p className="text-grayed text-center">
        If you meet the following requirements, please fill out the form which
        is located below.
      </p>
      <JobForm />
    </div>
  );
}

export default Page;
