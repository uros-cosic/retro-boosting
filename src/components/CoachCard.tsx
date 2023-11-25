import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CoachCardInterface } from "@/lib/apiUtils";
import { twMerge } from "tailwind-merge";

function CoachCard({
  data,
}: {
  data: {
    coach: CoachCardInterface;
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
        href={data.coach.link}
        className="w-40 lg:w-[95%] h-full lg:h-32 bg-black shadow-lg hover:shadow-2xl transition-colors rounded-xl border-primary border p-2 lg:p-5 flex flex-col lg:flex-row items-center justify-center space-y-1"
      >
        <div className="h-fit lg:h-full flex flex-col lg:flex-row w-full items-center text-center lg:text-left space-x-0 lg:space-x-3">
          <Avatar className="h-12 w-auto lg:h-full">
            <AvatarImage src={data.coach.avatar} />
            <AvatarFallback className="text-white">
              {data.coach.name}
            </AvatarFallback>
          </Avatar>
          <div className="text-white lg:h-full w-full flex flex-col justify-start lg:justify-between">
            <p className="font-black">{data.coach.name}</p>
            <div className="flex items-center justify-center lg:items-start lg:justify-start">
              <div className="bg-secondary rounded-full p-3 lg:p-4 z-10" />
              <div className="bg-primary rounded-full p-3 lg:p-4 z-20 -ml-2" />
              <div className="bg-green-500 rounded-full p-3 lg:p-4 z-30 -ml-2" />
            </div>
          </div>
        </div>
        <Link
          href={data.coach.link}
          className="text-primary hover:underline hover:text-primary/90 transition-colors"
        >
          profile
        </Link>
      </Link>
    </div>
  );
}

export default CoachCard;
