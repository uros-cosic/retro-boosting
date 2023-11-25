import React, { useContext, useState, useEffect } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
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
import Link from "next/link";
import {
  CoachingOrderDataContent,
  CoachingOrderDataContext,
} from "@/lib/CoachingDataContext";
import { coachingSwitchableOptions as switchableOptions } from "@/lib/data";
import { getOrderPrice } from "@/lib/apiUtils";

function CoachingSmallCheckoutContainer() {
  const { coachingOrderData, setCoachingOrderData } =
    useContext<CoachingOrderDataContent>(CoachingOrderDataContext);

  const [priceObj, setPriceObj] = useState<any>({
    total: 420,
    discountedPrice: null,
    priceLoading: true,
  });

  const handleOptionsChange = async () => {
    const data: any = await getOrderPrice();

    setPriceObj({
      total: data.data.total,
      discountedPrice: data.data.discountedPrice,
      priceLoading: false,
    });
  };

  useEffect(() => {
    setPriceObj((prev: any) => {
      return {
        ...prev,
        priceLoading: true,
      };
    });
    handleOptionsChange();
  }, [coachingOrderData]);

  const handleSwitchChange = (checked: boolean, id: string) => {
    setCoachingOrderData((prev: any) => {
      return {
        ...prev,
        options: {
          ...prev.options,
          [id]: checked,
        },
      };
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between space-y-3 lg:space-y-0">
      <h1 className="font-black uppercase text-center text-2xl">checkout</h1>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center flex-col w-full">
          <h2 className="text-lg font-bold uppercase text-center">
            {coachingOrderData.coachingHours > 1
              ? `${coachingOrderData.coachingHours} hours of coaching with`
              : `${coachingOrderData.coachingHours} hour of coaching with`}
          </h2>
          <p className="uppercase text-center font-black">
            {coachingOrderData.coach.name === "any"
              ? "any coach"
              : `coach ${coachingOrderData.coach.name}`}
          </p>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-primary border-2" />
      </div>
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
        purchase coaching
      </Link>
    </div>
  );
}

export default CoachingSmallCheckoutContainer;
