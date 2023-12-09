"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import { NormalsOrderDataContext } from "@/lib/NormalsDataContext";
import ChooseNormalsRankContainer from "./ChooseNormalsRankContainer";
import NormalsSmallCheckoutContainer from "./NormalsSmallCheckoutContainer";
import { useSearchParams } from "next/navigation";

function NormalsBoostContainer() {
  const searchParams = useSearchParams();
  const [normalsOrderData, setNormalsOrderData] = useState<any>({
    boosterRank: "M1",
    numOfGames: 1,
    options: {
      server: "euw",
      queue: "summoners-rift",
      offlineMode: false,
      priorityOrder: false,
      streamGames: false,
      soloOnly: false,
      boosterID: searchParams.get("booster"),
    },
  });

  const handleServerChange = (val: string) => {
    setNormalsOrderData((prev: any) => {
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
    setNormalsOrderData((prev: any) => {
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
      <NormalsOrderDataContext.Provider
        value={{
          normalsOrderData,
          setNormalsOrderData,
        }}
      >
        <div className="w-full lg:w-4/6 h-full lg:pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between space-y-5 lg:space-y-0">
            <ChooseNormalsRankContainer />
          </div>
          <div className="lg:h-1/3 w-full space-y-3 flex flex-col justify-end">
            <h1 className="text-3xl font-normal">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-normal">Server</h2>
                <Select onValueChange={handleServerChange}>
                  <SelectTrigger className="bg-dark py-5 rounded-xl border border-primary">
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
                  <SelectTrigger className="bg-dark py-5 rounded-xl border border-primary">
                    <SelectValue placeholder="Summoners Rift" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="summoners-rift">
                      Summoners Rift
                    </SelectItem>
                    <SelectItem value="aram">Aram</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 h-full bg-dark text-light rounded-xl p-5 border border-primary shadow-base shadow-primary">
          <NormalsSmallCheckoutContainer />
        </div>
      </NormalsOrderDataContext.Provider>
    </div>
  );
}

export default NormalsBoostContainer;
