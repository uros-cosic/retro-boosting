import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { FaHeadphones } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CoachCardInterface } from "@/lib/apiUtils";

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
      className={clsx(
        "w-full h-full lg:h-1/4 flex items-center justify-center lg:items-start lg:justify-start",
        {
          "lg:justify-end": data.idx === 1,
        }
      )}
    >
      <Link
        href={data.coach.link}
        className="w-[90%] h-full bg-black shadow-lg shadow-primary border border-primary rounded-xl px-6 py-2 sm:px-10 lg:p-3 flex flex-col lg:flex-row items-center justify-between hover:scale-105 transition-transform lg:space-x-3"
      >
        <div className="flex flex-col space-y-2 lg:flex-row h-full lg:space-x-3">
          <Avatar className="h-1/2 lg:h-full w-auto">
            <AvatarImage src={data.coach.avatar} className="h-full" />
            <AvatarFallback>{data.coach.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base lg:text-2xl font-bold text-center lg:text-left">
              {data.coach.name}
            </p>
            <div className="flex py-2 items-center justify-center lg:items-start lg:justify-start">
              <div className="bg-secondary rounded-full p-3 lg:p-4 z-10" />
              <div className="bg-primary rounded-full p-3 lg:p-4 z-20 -ml-2" />
              <div className="bg-green-500 rounded-full p-3 lg:p-4 z-30 -ml-2" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full lg:w-fit items-center justify-center text-center lg:items-start lg:justify-start">
          <FaHeadphones className="text-white text-base lg:text-2xl text-center" />
        </div>
      </Link>
    </div>
  );
}

export default CoachCard;
