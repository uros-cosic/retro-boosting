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
import { Input } from "./ui/input";

function ChooseRankContainer({ idx }: { idx: number }) {
  const { from, to, setOrderData } =
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

  const filterDivisions = (arr: Array<string>) => {
    if (idx === 0) {
      let end = arr.indexOf(to);
      if (end > arr.length) return arr.slice(0, arr.length - 1);
      return arr.slice(0, end);
    }
    let end = arr.length;
    let start = arr.indexOf(from) + 1;
    if (start < 0) return arr.slice(1, end);
    return arr.slice(start, end);
  };

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-[47%] flex items-center justify-between border border-primary">
      <Image
        src={idx === 0 ? tierMapping[from].href : tierMapping[to].href}
        alt={idx === 0 ? tierMapping[from].label : tierMapping[to].label}
        height={150}
        width={150}
        className="h-2/3 w-auto"
      />
      <div className="flex flex-col items-center justify-center text-center w-full space-y-5">
        <h2 className="font-bold capitalize text-2xl">
          {idx === 0 ? "current rank" : "desired rank"}
        </h2>
        <div>
          <Select onValueChange={(val) => handleChange(idx, val)}>
            <SelectTrigger className="w-40 font-black border border-primary">
              <SelectValue
                className="uppercase"
                placeholder={
                  idx === 0
                    ? tierMapping[from].label.toUpperCase()
                    : tierMapping[to].label.toUpperCase()
                }
              />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              {filterDivisions(divisionsOrdered).map((key: string) => (
                <SelectItem key={tierMapping[key].label} value={key}>
                  {tierMapping[key].label.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ChooseRankContainer;
