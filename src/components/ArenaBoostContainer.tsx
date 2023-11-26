"use client";
import { ArenaOrderDataContext } from "@/lib/ArenaDataContext";
import React, { useState } from "react";
import ChooseArenaRankContainer from "./ChooseArenaRankContainer";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import ArenaSmallCheckoutContainer from "./ArenaSmallCheckoutContainer";

function ArenaBoostContainer() {
  const [arenaOrderData, setArenaOrderData] = useState<any>({
    currentRank: "G1",
    numOfGames: 1,
    options: {
      serviceType: "solo",
      server: "euw",
      queue: "arena",
      offlineMode: false,
      champion: false,
      priorityOrder: false,
      streamGames: false,
      extraOptions: {
        lane: "any",
        flashPlacement: "any",
      },
    },
  });

  const handleTypeChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          serviceType: val,
        },
      };
    });
  };

  const handleServerChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          server: val,
        },
      };
    });
  };

  const handleQueueChange = (val: string) => {
    setArenaOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          queue: val,
        },
      };
    });
  };

  return (
    <div className="w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:h-[60vh]">
      <ArenaOrderDataContext.Provider
        value={{
          arenaOrderData,
          setArenaOrderData,
        }}
      >
        <div className="w-full lg:w-4/6 h-full lg:pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between space-y-5 lg:space-y-0">
            <ChooseArenaRankContainer />
          </div>
          <div className="lg:h-1/3 w-full space-y-3 flex flex-col justify-end">
            <h1 className="text-3xl font-normal">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-normal">Type of Service</h2>
                <Select onValueChange={handleTypeChange}>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-bold border border-primary">
                    <SelectValue placeholder="Solo" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="solo">Solo</SelectItem>
                    <SelectItem value="duo">Duo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-normal">Server</h2>
                <Select onValueChange={handleServerChange}>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-bold border border-primary">
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
                <h2 className="text-lg font-normal">Queue</h2>
                <Select onValueChange={handleQueueChange}>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-bold border border-primary">
                    <SelectValue placeholder="Arena" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="arena">Arena</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 h-full bg-black text-white rounded-xl p-10 border border-primary">
          <ArenaSmallCheckoutContainer />
        </div>
      </ArenaOrderDataContext.Provider>
    </div>
  );
}

export default ArenaBoostContainer;
