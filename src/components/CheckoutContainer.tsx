"use client";
import React from "react";
import CheckoutInformation from "./CheckoutInformation";
import CheckoutForm from "./CheckoutForm";

function CheckoutContainer({ data }: { data: any }) {
  return (
    <div className="min-h-[60vh] w-full text-white bg-white overflow-hidden border rounded-xl shadow flex">
      <CheckoutForm />
      <CheckoutInformation data={data} />
    </div>
  );
}

export default CheckoutContainer;
