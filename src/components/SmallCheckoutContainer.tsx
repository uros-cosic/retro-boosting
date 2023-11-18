"use client";
import { OrderDataContent, OrderDataContext } from "@/lib/OrderDataContext";
import { tierMapping } from "@/lib/utils";
import Image from "next/image";
import { FaGreaterThan, FaGear, FaCircleQuestion } from "react-icons/fa6";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "./ui/input";
import Link from "next/link";

function SmallCheckoutContainer() {
  const { from, to, setOrderData } =
    useContext<OrderDataContent>(OrderDataContext);

  const switchableOptions = [
    {
      label: "Offline Mode (FREE)",
      detail: "Appear offline in league client chat",
    },
    {
      label: "Priority Order (+20%)",
      detail: "Your order will get done faster",
    },
    {
      label: "Stream Games (+15%)",
      detail: "Booster will stream the games for you",
    },
    {
      label: "Solo Only (+20%)",
      detail: "Booster won't play with a duo",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-between space-y-3 lg:space-y-0">
      <h1 className="font-bold uppercase text-center text-2xl">checkout</h1>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center flex-col w-1/3 space-y-2">
          <Image
            src={tierMapping[from].href}
            alt={tierMapping[from].label}
            height={150}
            width={150}
          />
          <p className="uppercase text-center text-sm">
            {tierMapping[from].label}
          </p>
        </div>
        <FaGreaterThan className="text-3xl" />
        <div className="flex items-center justify-center flex-col w-1/3 space-y-2">
          <Image
            src={tierMapping[to].href}
            alt={tierMapping[to].label}
            height={150}
            width={150}
          />
          <p className="uppercase text-center text-sm">
            {tierMapping[to].label}
          </p>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-primary border-2" />
      </div>
      <Button className="flex items-center space-x-1 justify-start p-0 w-full transition-colors hover:text-white/80">
        <FaGear className="text-xl" />
        <p className="uppercase font-medium text-xs">extra options</p>
      </Button>
      <div className="flex flex-col w-full space-y-2">
        {switchableOptions.map((optionObj) => (
          <div key={optionObj.label} className="flex justify-between w-full">
            <div className="flex items-start space-x-1">
              <Label htmlFor={optionObj.label} className="cursor-pointer">
                {optionObj.label}
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaCircleQuestion className="text-primary text-xs" />
                  </TooltipTrigger>
                  <TooltipContent>{optionObj.detail}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Switch id={optionObj.label} />
          </div>
        ))}
      </div>
      <div className="w-full relative font-black">
        <Input
          maxLength={20}
          placeholder="discount code"
          className="uppercase border border-primary h-fit"
        />
        <Button className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-full h-fit bg-primary uppercase text-xs rounded-l-none hover:bg-primary/90 font-black">
          apply
        </Button>
      </div>
      <div className="flex flex-col w-full items-end space-y-1">
        {/* only show discounted price if good code is applied */}
        <p className="line-through text-sm font-black">420.50$</p>
        <div className="flex justify-between w-full items-center">
          <p className="font-bold">Total Price:</p>
          <p className="font-black text-lg">399.47$</p>
        </div>
      </div>
      <Link
        href="/checkout"
        className="bg-primary uppercase w-full rounded-xl text-center py-2 font-bold text-sm"
      >
        purchase boost
      </Link>
    </div>
  );
}

export default SmallCheckoutContainer;
