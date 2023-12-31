"use client";
import React, { useContext } from "react";
import { OrderDataContent, OrderDataContext } from "@/lib/OrderDataContext";
import { divisionsOrdered, tierMapping } from "@/lib/utils";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ChooseRankContainer({ idx }: { idx: number }) {
  const { orderData, setOrderData } =
    useContext<OrderDataContent>(OrderDataContext);

  const handleChange = (idx: number, val: string) => {
    if (idx === 0) {
      setOrderData((prev: any) => {
        return { ...prev, from: val };
      });
    } else {
      setOrderData((prev: any) => {
        return { ...prev, to: val };
      });
    }
  };

  const handleLpGainsChange = (val: string) => {
    setOrderData((prev: any) => {
      return {
        ...prev,
        lpGains: val,
      };
    });
  };

  const filterDivisions = (arr: Array<string>) => {
    if (idx === 0) {
      let end = arr.indexOf(orderData.to);
      if (end > arr.length) return arr.slice(0, arr.length - 1);
      return arr.slice(0, end);
    }
    let end = arr.length;
    let start = arr.indexOf(orderData.from) + 1;
    if (start < 0) return arr.slice(1, end);
    return arr.slice(start, end);
  };

  return (
    <div className="px-5 lg:px-10 py-5 bg-dark rounded-xl h-[47%] flex items-center justify-between border border-primary space-x-3 shadow-base shadow-primary">
      <Image
        src={
          idx === 0
            ? tierMapping[orderData.from].href
            : tierMapping[orderData.to].href
        }
        alt={
          idx === 0
            ? tierMapping[orderData.from].label
            : tierMapping[orderData.to].label
        }
        height={150}
        width={150}
        className="h-28 lg:h-36 w-auto"
      />
      <div className="flex flex-col items-center justify-center text-center w-full">
        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10 justify-center w-full items-center">
          <div className="space-y-5">
            <h2 className="font-normal   text-xl text-left">
              {idx === 0 ? "current rank" : "desired rank"}
            </h2>
            <Select onValueChange={(val) => handleChange(idx, val)}>
              <SelectTrigger className="w-40 border border-primary">
                <SelectValue
                  className=" "
                  placeholder={
                    idx === 0
                      ? tierMapping[orderData.from].label
                      : tierMapping[orderData.to].label
                  }
                />
              </SelectTrigger>
              <SelectContent className="border border-primary">
                {filterDivisions(divisionsOrdered).map((key: string) => (
                  <SelectItem key={tierMapping[key].label} value={key}>
                    {tierMapping[key].label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {idx === 0 && (
            <div className="space-y-5">
              <h2 className="font-normal   text-xl text-left">LP gains</h2>
              <Select onValueChange={handleLpGainsChange}>
                <SelectTrigger className="w-40 border border-primary">
                  <SelectValue className=" " placeholder="< 15" />
                </SelectTrigger>
                <SelectContent className="border border-primary">
                  <SelectItem value="<15">{`< 15`}</SelectItem>
                  <SelectItem value="15-20">{`15-20`}</SelectItem>
                  <SelectItem value=">20">{`> 20`}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseRankContainer;
