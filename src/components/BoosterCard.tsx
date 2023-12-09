import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BoosterCardInterface } from "@/lib/apiUtils";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { FaHeadphones } from "react-icons/fa";

function BoosterCard({
  data,
}: {
  data: {
    booster: BoosterCardInterface;
    idx: number;
  };
}) {
  return (
    <div
      className={twMerge(
        clsx("lg:w-full flex h-full lg:h-fit pt-3 lg:pt-0", {
          "lg:justify-end": data.idx === 1,
        })
      )}
    >
      <Link
        href={data.booster.link}
        className="w-40 lg:w-[95%] h-full lg:h-32 bg-dark shadow-base shadow-primary hover:bg-dark/90 transition-colors rounded-xl border-primary border p-2 lg:p-5 flex flex-col lg:flex-row items-center justify-center space-y-1"
      >
        <div className="h-fit lg:h-full flex flex-col lg:flex-row w-full items-center text-center lg:text-left space-x-0 lg:space-x-3">
          <Avatar className="h-12 w-auto lg:h-full border">
            <AvatarImage src={data.booster.avatar} className="h-full w-auto" />
            <AvatarFallback className="text-light">
              {data.booster.name}
            </AvatarFallback>
          </Avatar>
          <div className="text-light lg:h-full w-full flex flex-col justify-start lg:justify-between">
            <p className="font-bold">{data.booster.name}</p>
            <div className="flex items-center justify-center lg:items-start lg:justify-start">
              <div className="border border-light rounded-full bg-dark h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center">
                <Image
                  src={`/img/tiers/${data.booster.elo}.svg`}
                  alt={data.booster.elo || ""}
                  height={50}
                  width={50}
                />
              </div>
              <div className="border border-light rounded-full bg-dark h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center -ml-2 p-2">
                <Image
                  src={`/img/lanes/${data.booster.mainRole}.svg`}
                  alt={data.booster.mainRole || ""}
                  height={50}
                  width={50}
                />
                <svg></svg>
              </div>
              <div className="border border-light rounded-full bg-dark h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center -ml-2 p-2">
                <FaHeadphones />
              </div>
            </div>
          </div>
        </div>
        <p className="text-primary hover:underline hover:text-primary/90 transition-colors">
          profile
        </p>
      </Link>
    </div>
  );
}

export default BoosterCard;
