"use client";
import React, { useState } from "react";
import ChooseRankContainer from "./ChooseRankContainer";
import { OrderDataContext } from "@/lib/OrderDataContext";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";

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
          <div className="h-1/3 w-full space-y-3 flex flex-col justify-end">
            <h1 className="text-3xl font-bold">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-medium">Current LP</h2>
                <Input
                  type="number"
                  min={0}
                  max={99}
                  className="bg-black text-white py-5 rounded-xl font-black border-gray-400 border opacity-100 placeholder:text-white"
                  placeholder="0-99LP"
                />
              </div>
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-medium">Server</h2>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border-gray-400 border">
                    <SelectValue placeholder="Europe West" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EUW">Europe West</SelectItem>
                    <SelectItem value="NA">North America</SelectItem>
                    <SelectItem value="EUNE">Europe Nordic East</SelectItem>
                    <SelectItem value="RU">Russia</SelectItem>
                    <SelectItem value="TR">Turkey</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-medium">Queue</h2>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border-gray-400 border">
                    <SelectValue placeholder="Solo/Duo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo/Duo</SelectItem>
                    <SelectItem value="flex">Flex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6 h-full bg-black text-white rounded-xl p-10">
          123
        </div>
      </OrderDataContext.Provider>
    </div>
  );
}

export default SoloBoostContainer;
