"use client";
import React, { useState } from "react";
import { CoachingOrderDataContext } from "@/lib/CoachingDataContext";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import ChooseCoachDataContainer from "./ChooseCoachDataContainer";
import CoachingSmallCheckoutContainer from "./CoachingSmallCheckoutContainer";

function CoachingContainer() {
  const [coachingData, setCoachingData] = useState<any>({
    coachingHours: 1,
    server: "EUW",
    role: "JG",
    language: "en",
    coach: {
      name: "any",
      avatar: "/img/temp/coaches/any.png",
    },
    options: {
      priorityOrder: false,
    },
  });

  const handleRoleChange = (val: string) => {
    setCoachingData((prev: any) => {
      return {
        ...prev,
        role: val,
      };
    });
  };

  const handleServerChange = (val: string) => {
    setCoachingData((prev: any) => {
      return {
        ...prev,
        server: val,
      };
    });
  };

  const handleLanguageChange = (val: string) => {
    setCoachingData((prev: any) => {
      return {
        ...prev,
        language: val,
      };
    });
  };

  return (
    <div className="w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:h-[60vh]">
      <CoachingOrderDataContext.Provider
        value={{
          coachingOrderData: coachingData,
          setCoachingOrderData: setCoachingData,
        }}
      >
        <div className="w-full lg:w-4/6 h-full lg:pr-5">
          <div className="h-2/3 w-full pb-5 flex flex-col justify-between space-y-5 lg:space-y-0">
            <ChooseCoachDataContainer />
          </div>
          <div className="lg:h-1/3 w-full space-y-3 flex flex-col justify-end">
            <h1 className="text-3xl font-normal">Set Other Info</h1>
            <div className="flex w-full justify-between">
              <div className="w-1/4 space-y-2 flex flex-col justify-end">
                <h2 className="text-lg font-normal">Role</h2>
                <Select onValueChange={handleRoleChange}>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-bold border border-primary">
                    <SelectValue placeholder="Jungle" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="jg">Jungle</SelectItem>
                    <SelectItem value="mid">Midlane</SelectItem>
                    <SelectItem value="top">Toplane</SelectItem>
                    <SelectItem value="supp">Support</SelectItem>
                    <SelectItem value="adc">AD Carry</SelectItem>
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
                <h2 className="text-lg font-normal">Language</h2>
                <Select onValueChange={handleLanguageChange}>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-bold border border-primary">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="sr">Serbian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 h-full bg-black text-white rounded-xl p-10 border border-primary shadow-base shadow-primary">
          <CoachingSmallCheckoutContainer />
        </div>
      </CoachingOrderDataContext.Provider>
    </div>
  );
}

export default CoachingContainer;
