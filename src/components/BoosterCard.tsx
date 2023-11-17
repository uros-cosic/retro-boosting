import React from "react";
import Image from "next/image";
import { FaHeadphones } from "react-icons/fa6";
import clsx from "clsx";
import Link from "next/link";

interface BoosterCardData {
  avatar: string;
  name: string;
  link: string;
}

function BoosterCard({
  data,
}: {
  data: {
    booster: BoosterCardData;
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
        href={data.booster.link}
        className="w-[90%] h-full bg-black rounded-xl px-6 py-2 sm:px-10 lg:p-3 flex flex-col lg:flex-row items-center justify-between hover:scale-110 transition-transform ease-in-out lg:space-x-3"
      >
        <div className="flex flex-col space-y-2 lg:flex-row h-full lg:space-x-3">
          <div className="rounded-full overflow-hidden h-1/2 lg:h-full flex items-center justify-center">
            <Image
              src={data.booster.avatar}
              alt={"Booster " + data.booster.name}
              height={250}
              width={250}
              className="w-auto h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base lg:text-2xl font-bold text-center lg:text-left">
              {data.booster.name}
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

export default BoosterCard;
