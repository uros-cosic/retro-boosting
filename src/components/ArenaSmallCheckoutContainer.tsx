import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArenaOrderDataContent,
  ArenaOrderDataContext,
} from "@/lib/ArenaDataContext";
import { arenaTierMapping, extraOptionsMapping } from "@/lib/utils";
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
import { arenaSwitchableOptions as switchableOptions } from "@/lib/data";
import { getOrderPrice, getDiscountedPrice } from "@/lib/apiUtils";
import { validateCheckout } from "@/lib/apiUtils";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/navigation";

function ArenaSmallCheckoutContainer() {
  const { arenaOrderData, setArenaOrderData } =
    useContext<ArenaOrderDataContent>(ArenaOrderDataContext);

  const [loading, setLoading] = useState(false);

  const [priceObj, setPriceObj] = useState<any>({
    total: 420,
    discountedPrice: null,
    priceLoading: true,
  });

  const router = useRouter();

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
  }, [arenaOrderData]);

  const handleSwitchChange = (checked: boolean, id: string) => {
    setArenaOrderData((prev: any) => {
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
    setArenaOrderData((prev: any) => {
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
    setArenaOrderData((prev: any) => {
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

  const handleDiscountClick = async () => {
    setPriceObj((prev: any) => {
      return {
        ...prev,
        priceLoading: true,
      };
    });
    const data: any = await getDiscountedPrice(priceObj.total);
    setPriceObj((prev: any) => {
      return {
        priceLoading: false,
        total: data.data.total,
        discountedPrice: data.data.discountedPrice,
      };
    });
  };

  const handlePurchaseClick = async () => {
    setLoading(true);
    const data: any = await validateCheckout();
    if (data.status === "success") {
      router.push(`/checkout/${data.data.id}`);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between space-y-3 lg:space-y-0">
      <h1 className="font-bold uppercase text-center text-2xl">checkout</h1>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center flex-col w-full">
          <Image
            src={arenaTierMapping[arenaOrderData.currentRank].href}
            alt={arenaTierMapping[arenaOrderData.currentRank].label}
            height={100}
            width={100}
            className="h-auto w-auto max-h-[100px]"
          />
          <p className="uppercase text-center text-xs">
            {arenaTierMapping[arenaOrderData.currentRank].label}
          </p>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-primary border-2" />
      </div>
      <Dialog>
        <DialogTrigger className="flex items-center space-x-1 justify-start p-0 w-full transition-colors hover:text-light/80">
          <FaGear className="text-xl" />
          <p className="uppercase font-medium text-xs underline">
            lane & flash placement
          </p>
        </DialogTrigger>
        <DialogContent className="bg-dark border-primary border text-light">
          <DialogHeader className="space-y-3">
            <DialogTitle className="uppercase">extra options</DialogTitle>
            <DialogDescription className="text-light text-xs">
              Customize your order free of charge.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-normal">Lane</h3>
              <Select
                onValueChange={handleLaneChange}
                value={arenaOrderData.options.extraOptions.lane}
              >
                <SelectTrigger className="bg-dark py-5 rounded-xl font-bold border border-primary text-center w-40">
                  <SelectValue
                    placeholder={
                      extraOptionsMapping[
                        arenaOrderData.options.extraOptions.lane
                      ]
                    }
                  />
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
              <h3 className="text-lg font-normal">Flash Placement</h3>
              <Select
                onValueChange={handleFlashChange}
                value={arenaOrderData.options.extraOptions.flashPlacement}
              >
                <SelectTrigger className="bg-dark py-5 rounded-xl font-bold border border-primary text-center w-40">
                  <SelectValue
                    placeholder={
                      extraOptionsMapping[
                        arenaOrderData.options.extraOptions.flashPlacement
                      ]
                    }
                  />
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
      <div className="w-full relative">
        <Input
          maxLength={20}
          placeholder="discount code"
          className="uppercase border border-primary h-fit placeholder:text-light"
        />
        <Button
          className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-full h-fit bg-primary uppercase text-xs rounded-l-none hover:bg-primary/90"
          onClick={handleDiscountClick}
        >
          apply
        </Button>
      </div>
      <SmallCheckoutPrice priceObj={priceObj} />
      <Button
        className="bg-primary uppercase w-full rounded-xl text-center py-2 font-normal text-sm hover:bg-primary/90 transition-colors"
        onClick={handlePurchaseClick}
        disabled={loading}
        aria-disabled={loading}
      >
        {loading ? (
          <ImSpinner2 className="text-lg text-center animate-spin" />
        ) : (
          "purchase boost"
        )}
      </Button>
    </div>
  );
}

export default ArenaSmallCheckoutContainer;
