"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BoosterCard from "./BoosterCard";
import { BoosterCardInterface } from "@/lib/apiUtils";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function BoostingServiceContainer({
  boostersContent,
}: {
  boostersContent: Array<BoosterCardInterface>;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isMiddleVisible, setIsMiddleVisible] = useState(false);

  const checkMiddleVisibility = () => {
    if (!elementRef.current || isMiddleVisible) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const middleY = rect.top + rect.height / 2;

    const isVisible = middleY >= 0 && middleY <= window.innerHeight;
    setIsMiddleVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkMiddleVisibility);

    return () => {
      window.removeEventListener("scroll", checkMiddleVisibility);
    };
  }, [isMiddleVisible]);

  return (
    <section
      className="flex items-center justify-center w-full relative h-[65vh] overflow-x-clip"
      ref={elementRef}
    >
      <Image
        src="/img/boosting-service.jpg"
        alt="Boosting Service"
        height={500}
        width={1700}
        className="object-cover h-full w-full"
      />
      <div className="absolute h-full w-full bg-primary/50" />
      <div
        className={twMerge(
          clsx(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full py-5 px-1 lg:py-10 w-full lg:w-3/4 mx-auto uppercase flex flex-col lg:flex-row justify-between items-center ease-out transition-all duration-700",
            {
              "transform -translate-x-[100vw] opacity-0": !isMiddleVisible,
              "transform opacity-100": isMiddleVisible,
            }
          )
        )}
      >
        <div className="w-full lg:w-1/2 h-2/3 lg:h-full flex flex-col justify-center lg:justify-between space-y-3 lg:space-y-5 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-4xl font-black">
            boosting service
          </h1>
          <p className="text-gray-300 text-xs lg:text-base font-semibold">
            Discover the Fast Lane to Victory with Retro Boosting! 🏆 Our expert
            boosters are just a click away from turbocharging your League of
            Legends journey.
          </p>
          <p className="text-gray-300 text-xs lg:text-base font-semibold">
            Get ready to climb the ranks with our trusted boosting service.
            Connect with a booster now and unleash your full potential!
          </p>
          <Link
            href="/team?booster=true"
            className="bg-dark text-center border-b-2 border-r-2 border-primary px-10 py-3 text-light text-xs lg:text-lg font-black rounded w-fit hover:text-light/70 transition-colors shadow-primary shadow-base"
          >
            connect with booster
          </Link>
        </div>
        <div
          className={twMerge(
            clsx(
              "w-full lg:w-[40%] h-[40%] lg:h-full flex flex-row lg:flex-col items-center justify-start sm:justify-center lg:space-y-5 space-x-3 lg:space-x-0 mx-auto ease-out transition-all duration-700 overflow-x-auto",
              {
                "transform translate-x-[100vw] opacity-0": !isMiddleVisible,
                "transform opacity-100": isMiddleVisible,
              }
            )
          )}
        >
          {boostersContent.map((booster: BoosterCardInterface, idx: number) => (
            <BoosterCard key={idx} data={{ booster, idx }} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BoostingServiceContainer;
