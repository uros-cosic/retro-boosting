"use client";
import { WinOrderDataContext } from "@/lib/WinDataContext";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import ChooseWinRankContainer from "./ChooseWinRankContainer";
import WinSmallCheckoutContainer from "./WinSmallCheckoutContainer";
import { useSearchParams } from "next/navigation";

function WinBoostContainer() {
  const searchParams = useSearchParams();
  const [winOrderData, setWinOrderData] = useState<any>({
    currentRank: "M1",
    numOfGames: 1,
    options: {
      currLP: "0-20",
      server: "euw",
      queue: "solo",
      offlineMode: false,
      priorityOrder: false,
      streamGames: false,
      soloOnly: false,
      extraOptions: {
        lane: "any",
        flashPlacement: "any",
      },
      boosterID: null,
    },
  });

  const handleLpChange = (val: string) => {
    setWinOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          currLP: val,
        },
      };
    });
  };

  const handleServerChange = (val: string) => {
    setWinOrderData((prev: any) => {
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
    setWinOrderData((prev: any) => {
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
      <WinOrderDataContext.Provider
        value={{
          winOrderData,
          setWinOrderData,
        }}
      >
        <div className="w-full lg:w-4/6 h-full lg:pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between space-y-5 lg:space-y-0">
            <ChooseWinRankContainer />
          </div>
          <div className="lg:h-1/3 w-full space-y-10 flex flex-col justify-end">
            <h1 className="text-3xl font-normal">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-sm lg:text-base">Current LP</h2>
                <Select onValueChange={handleLpChange}>
                  <SelectTrigger className="bg-dark text-sm lg:text-base py-5 rounded-xl border border-primary">
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
                <h2 className="text-sm lg:text-base">Server</h2>
                <Select onValueChange={handleServerChange}>
                  <SelectTrigger className="bg-dark text-sm lg:text-base py-5 rounded-xl border border-primary">
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
                <h2 className="text-sm lg:text-base">Queue</h2>
                <Select onValueChange={handleQueueChange}>
                  <SelectTrigger className="bg-dark text-sm lg:text-base py-5 rounded-xl border border-primary">
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
        <div className="w-full lg:w-2/6 h-full bg-dark text-light rounded-xl p-5 border border-primary shadow-base shadow-primary">
          <WinSmallCheckoutContainer />
        </div>
      </WinOrderDataContext.Provider>
    </div>
  );
}

export default WinBoostContainer;
