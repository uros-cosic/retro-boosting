import React from "react";
import { priceify } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";

function CheckoutInformation({ data }: { data: any }) {
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
          <SheetContent className="bg-gray-100 text-black flex flex-col items-center space-y-5 justify-center z-[100]">
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
