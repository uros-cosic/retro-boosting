"use client";
import { priceify } from "@/lib/utils";
import React, { Suspense, use, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

function SmallCheckoutPrice({
  priceObj,
}: {
  priceObj: {
    discountedPrice: null | number;
    total: number;
    priceLoading: boolean;
  };
}) {
  return (
    <>
      {priceObj.priceLoading ? (
        <div className="flex flex-col w-full items-end space-y-1">
          <div className="flex justify-between w-full items-center">
            <p className="font-bold">Total Price:</p>
            <Skeleton className="font-black text-lg text-muted-foreground bg-muted-foreground rounded-xl">
              00000
            </Skeleton>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-end space-y-1">
          {priceObj.discountedPrice && (
            <p className="line-through text-sm font-black">{`${priceify(
              priceObj.total
            )}$`}</p>
          )}
          <div className="flex justify-between w-full items-center">
            <p className="font-bold">Total Price:</p>
            <p className="font-black text-lg">
              {priceObj.discountedPrice
                ? `${priceify(priceObj.discountedPrice)}$`
                : `${priceify(priceObj.total)}$`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallCheckoutPrice;
