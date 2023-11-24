import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NormalsOrderDataContent,
  NormalsOrderDataContext,
} from "@/lib/NormalsDataContext";
import { tierMapping } from "@/lib/utils";
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
import { FaGear, FaCircleQuestion } from "react-icons/fa6";
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
import SmallCheckoutPrice from "./SmallCheckoutPrice";
import { normalsSwitchableOptions as switchableOptions } from "@/lib/data";

function NormalsSmallCheckoutContainer() {
  const { normalsOrderData, setNormalsOrderData } =
    useContext<NormalsOrderDataContent>(NormalsOrderDataContext);

  const [priceObj, setPriceObj] = useState<any>({
    total: 420,
    discountedPrice: null,
    priceLoading: true,
  });

  // temp func simulating price loading from api
  const tempFunc = async () => {
    setPriceObj((prev: any) => {
      return {
        ...prev,
        priceLoading: true,
      };
    });
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total: 6969,
          discountedPrice: null,
          priceLoading: false,
        });
      }, 500);
    });
    setPriceObj((prev: any) => data);
  };

  useEffect(() => {
    tempFunc();
  }, [normalsOrderData]);

  const handleSwitchChange = (checked: boolean, id: string) => {
    setNormalsOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          [id]: checked,
        },
      };
    });
  };

  const handleLaneChange = (val: string) => {
    setNormalsOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          extraOptions: {
            ...prev.options.extraOptions,
            lane: val,
          },
        },
      };
    });
  };

  const handleFlashChange = (val: string) => {
    setNormalsOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          extraOptions: {
            ...prev.options.extraOptions,
            flashPlacement: val,
          },
        },
      };
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between space-y-3 lg:space-y-0">
      <h1 className="font-black uppercase text-center text-2xl">checkout</h1>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center flex-col w-full">
          <Image
            src={tierMapping[normalsOrderData.boosterRank].href}
            alt={tierMapping[normalsOrderData.boosterRank].label}
            height={100}
            width={100}
            className="h-auto w-auto max-h-[100px]"
          />
          <p className="uppercase text-center text-sm">
            {tierMapping[normalsOrderData.boosterRank].label}
          </p>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-primary border-2" />
      </div>
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
              <Select onValueChange={handleLaneChange}>
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
              <Select onValueChange={handleFlashChange}>
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
            <Switch
              id={optionObj.label}
              onCheckedChange={(checked) => {
                handleSwitchChange(checked, optionObj.id);
              }}
            />
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
      <SmallCheckoutPrice priceObj={priceObj} />
      <Link
        href="/checkout"
        className="bg-primary uppercase w-full rounded-xl text-center py-2 font-bold text-sm hover:bg-primary/90 transition-colors"
      >
        purchase boost
      </Link>
    </div>
  );
}

export default NormalsSmallCheckoutContainer;
