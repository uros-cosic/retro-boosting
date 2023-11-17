"use client";
import React, { useContext } from "react";
import { OrderDataContent, OrderDataContext } from "@/lib/OrderDataContext";
import { divisionsOrdered, tierMapping } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ChooseRankContainer({ idx }: { idx: number }) {
  const { from, to, setOrderData } =
    useContext<OrderDataContent>(OrderDataContext);

  const handleChange = (idx: number, val: string) => {
    if (idx === 0) {
      setOrderData({
        from: val,
        to,
      });
    } else {
      setOrderData({
        from,
        to: val,
      });
    }
  };

  return (
    <div className="px-10 py-5 bg-black rounded-xl h-[47%] flex items-center justify-between">
      <Image
        src={idx === 0 ? tierMapping[from].href : tierMapping[to].href}
        alt={idx === 0 ? tierMapping[from].label : tierMapping[to].label}
        height={150}
        width={150}
        className="h-2/3 w-auto"
      />
      <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
        <h2 className="font-bold capitalize text-lg">
          {idx === 0 ? "current rank" : "desired rank"}
        </h2>
        <div className="flex space-x-3">
          <Button
            className="text-white"
            onClick={() =>
              handleChange(
                idx,
                divisionsOrdered[
                  divisionsOrdered.indexOf(idx === 0 ? from : to) - 1
                ] || divisionsOrdered[0]
              )
            }
          >
            <FaMinus aria-label="lower division" />
          </Button>
          <Select onValueChange={(val) => handleChange(idx, val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className="uppercase"
                placeholder={
                  idx === 0
                    ? tierMapping[from].label.toUpperCase()
                    : tierMapping[to].label.toUpperCase()
                }
              />
            </SelectTrigger>
            <SelectContent>
              {divisionsOrdered.map((key, idx) => (
                <SelectItem value={key}>
                  {tierMapping[key].label.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className="text-white"
            onClick={() =>
              handleChange(
                idx,
                divisionsOrdered[
                  divisionsOrdered.indexOf(idx === 0 ? from : to) + 1
                ] || divisionsOrdered[divisionsOrdered.length - 1]
              )
            }
          >
            <FaPlus aria-label="higher division" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseRankContainer;
