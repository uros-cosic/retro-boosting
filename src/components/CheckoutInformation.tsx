import React, { useState } from "react";
import { priceify } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function CheckoutInformation({ data }: { data: any }) {
  const [discountCodeVal, setDiscountCodeVal] = useState("");

  const handleDiscountClick = () => {
    // loading spinner
  };

  return (
    <>
      <div className="hidden bg-gray-100 p-10 lg:flex lg:flex-col items-center space-y-5 text-black w-1/3">
        <div className="w-full flex items-center justify-between">
          <div>
            <h1>{data.order.type}</h1>
            <p className="text-gray-500 text-xs">{data.order.name}</p>
          </div>
          <p className="text-sm">${priceify(data.totalPrice)}</p>
        </div>
        <div className="w-full">
          <hr className="border-gray-300" />
        </div>
        <div className="flex space-x-3">
          <Input
            placeholder="Discount code"
            className="bg-white text-xs"
            value={discountCodeVal}
            onChange={(e) => setDiscountCodeVal(e.target.value)}
          />
          <Button
            className="bg-black text-white"
            disabled={Boolean(!discountCodeVal)}
            aria-disabled={Boolean(!discountCodeVal)}
            onClick={handleDiscountClick}
          >
            Apply
          </Button>
        </div>
        <div className="w-full">
          <hr className="border-gray-300" />
        </div>
        <div className="flex items-center justify-between w-full">
          <h1>Total</h1>
          <p className="text-lg">${priceify(data.totalPrice)}</p>
        </div>
      </div>
      <div className="block lg:hidden py-5 pr-3">
        <Sheet>
          <SheetTrigger>
            <AiOutlineMenu className="text-black text-2xl" />
          </SheetTrigger>
          <SheetContent className="bg-gray-100 text-black flex flex-col items-center space-y-5 justify-center">
            <div className="w-full flex items-center justify-between">
              <div>
                <h1>{data.order.type}</h1>
                <p className="text-gray-500 text-xs">{data.order.name}</p>
              </div>
              <p className="text-sm">${priceify(data.totalPrice)}</p>
            </div>
            <div className="w-full">
              <hr className="border-gray-300" />
            </div>
            <div className="flex space-x-3">
              <Input
                placeholder="Discount code"
                className="bg-white text-xs"
                value={discountCodeVal}
                onChange={(e) => setDiscountCodeVal(e.target.value)}
              />
              <Button
                className="bg-black text-white"
                disabled={Boolean(!discountCodeVal)}
                aria-disabled={Boolean(!discountCodeVal)}
                onClick={handleDiscountClick}
              >
                Apply
              </Button>
            </div>
            <div className="w-full">
              <hr className="border-gray-300" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h1>Total</h1>
              <p className="text-lg">${priceify(data.totalPrice)}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default CheckoutInformation;
