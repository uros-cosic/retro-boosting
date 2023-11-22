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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import SmallCheckoutPrice from "./SmallCheckoutPrice";

function SmallCheckoutContainer({
  extraOptions,
  switchableOptions,
}: {
  extraOptions: boolean;
  switchableOptions: Array<any>;
}) {
  const { from, to, setOrderData } =
    useContext<OrderDataContent>(OrderDataContext);

  return (
    <div className="h-full w-full flex flex-col items-center justify-between space-y-3 lg:space-y-0">
      <h1 className="font-black uppercase text-center text-2xl">checkout</h1>
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
      {extraOptions && (
        <Dialog>
          <DialogTrigger className="flex items-center space-x-1 justify-start p-0 w-full transition-colors hover:text-white/80">
            <FaGear className="text-xl" />
            <p className="uppercase font-medium text-xs">extra options</p>
          </DialogTrigger>
          <DialogContent className="bg-black border-primary border text-white">
            <DialogHeader className="space-y-3">
              <DialogTitle className="uppercase font-bold">
                extra options
              </DialogTitle>
              <DialogDescription className="text-secondary text-xs">
                Customize your order free of charge.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Lane</h3>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border border-primary text-center w-40">
                    <SelectValue placeholder="any" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="any">any</SelectItem>
                    <SelectItem value="jg">Jungle</SelectItem>
                    <SelectItem value="mid">Mid</SelectItem>
                    <SelectItem value="adc">Adc</SelectItem>
                    <SelectItem value="top">Top</SelectItem>
                    <SelectItem value="supp">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="text-lg font-bold">Flash Placement</h3>
                <Select>
                  <SelectTrigger className="bg-black py-5 rounded-xl font-black border border-primary text-center w-40">
                    <SelectValue placeholder="any" />
                  </SelectTrigger>
                  <SelectContent className="border border-primary">
                    <SelectItem value="any">any</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                    <SelectItem value="F">F</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
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
          className="uppercase border border-primary h-fit placeholder:text-white"
        />
        <Button className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-full h-fit bg-primary uppercase text-xs rounded-l-none hover:bg-primary/90 font-black">
          apply
        </Button>
      </div>
      <SmallCheckoutPrice />
      <Link
        href="/checkout"
        className="bg-primary uppercase w-full rounded-xl text-center py-2 font-bold text-sm hover:bg-primary/90 transition-colors"
      >
        purchase boost
      </Link>
    </div>
  );
}

export default SmallCheckoutContainer;
