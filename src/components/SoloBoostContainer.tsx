"use client";
import React, { useState } from "react";
import ChooseRankContainer from "./ChooseRankContainer";
import { OrderDataContext } from "@/lib/OrderDataContext";

function SoloBoostContainer() {
  const [orderData, setOrderData] = useState<any>({
    from: "D4",
    to: "M1",
  });

  return (
    <div className="w-full flex h-[60vh]">
      <OrderDataContext.Provider
        value={{ from: orderData.from, to: orderData.to, setOrderData }}
      >
        <div className="w-4/6 h-full pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between">
            <ChooseRankContainer idx={0} />
            <ChooseRankContainer idx={1} />
          </div>
          <div className="h-1/3 w-full bg-white"></div>
        </div>
        <div className="w-2/6 h-full bg-accent">123</div>
      </OrderDataContext.Provider>
    </div>
  );
}

export default SoloBoostContainer;
