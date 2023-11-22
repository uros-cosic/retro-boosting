"use client";
import React, { useState } from "react";
import ChooseRankContainer from "./ChooseRankContainer";
import { OrderDataContext } from "@/lib/OrderDataContext";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import SmallCheckoutContainer from "./SmallCheckoutContainer";

function SoloBoostContainer({
  extraOptions,
  switchableOptions,
}: {
  extraOptions: boolean;
  switchableOptions: Array<any>;
}) {
  const [orderData, setOrderData] = useState<any>({
    from: "D4",
    to: "M1",
  });

  return (
    <div className="w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:h-[60vh]">
      <OrderDataContext.Provider
        value={{ from: orderData.from, to: orderData.to, setOrderData }}
      >
        <div className="w-full lg:w-4/6 h-full lg:pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between space-y-5 lg:space-y-0">
            <ChooseRankContainer idx={0} />
            <ChooseRankContainer idx={1} />
          </div>
          <div className="lg:h-1/3 w-full space-y-3 flex flex-col justify-end">
            <h1 className="text-3xl font-bold">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-bold">Current LP</h2>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border border-primary">
                    <SelectValue placeholder="LP 0-20" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="0-20">LP 0-20</SelectItem>
                    <SelectItem value="21-40">LP 21-40</SelectItem>
                    <SelectItem value="41-60">LP 41-60</SelectItem>
                    <SelectItem value="61-80">LP 61-80</SelectItem>
                    <SelectItem value="81-100">LP 81-100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-bold">Server</h2>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border border-primary">
                    <SelectValue placeholder="Europe West" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="EUW">Europe West</SelectItem>
                    <SelectItem value="NA">North America</SelectItem>
                    <SelectItem value="EUNE">Europe Nordic East</SelectItem>
                    <SelectItem value="RU">Russia</SelectItem>
                    <SelectItem value="TR">Turkey</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-bold">Queue</h2>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border border-primary">
                    <SelectValue placeholder="Solo/Duo" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="solo">Solo/Duo</SelectItem>
                    <SelectItem value="flex">Flex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 h-full bg-black text-white rounded-xl p-10 border border-primary">
          <SmallCheckoutContainer
            extraOptions={extraOptions}
            switchableOptions={switchableOptions}
          />
        </div>
      </OrderDataContext.Provider>
    </div>
  );
}

export default SoloBoostContainer;
