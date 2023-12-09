"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CoachCard from "./CoachCard";
import { CoachCardInterface } from "@/lib/apiUtils";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function CoachingServiceContainer({
  coachesContent,
}: {
  coachesContent: Array<CoachCardInterface>;
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
        src="/img/coaching-service.jpg"
        alt="Coaching Service"
        height={500}
        width={1700}
        className="object-cover h-full w-full"
      />
      <div className="absolute h-full w-full bg-primary/50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full py-5 lg:py-10 w-full lg:w-3/4 mx-auto uppercase flex flex-col-reverse lg:flex-row justify-between items-center">
        <div
          className={twMerge(
            clsx(
              "w-full lg:w-[40%] h-[40%] lg:h-full flex flex-row lg:flex-col items-center justify-center lg:space-y-5 space-x-3 lg:space-x-0 mx-auto ease-out transition-all duration-700",
              {
                "transform -translate-x-[100vw] opacity-0": !isMiddleVisible,
                "transform opacity-100": isMiddleVisible,
              }
            )
          )}
        >
          {coachesContent.map((coach: CoachCardInterface, idx: number) => (
            <CoachCard key={idx} data={{ coach, idx }} />
          ))}
        </div>
        <div
          className={twMerge(
            clsx(
              "w-full lg:w-1/2 h-2/3 lg:h-full flex flex-col justify-center lg:justify-between space-y-3 lg:space-y-5 text-center lg:text-left items-center lg:items-start ease-out transition-all duration-700",
              {
                "transform translate-x-[100vw] opacity-0": !isMiddleVisible,
                "transform opacity-100": isMiddleVisible,
              }
            )
          )}
        >
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            coaching service
          </h1>
          <p className="text-gray-300 text-xs lg:text-base">
            {`Master the Art of League of Legends with Retro Boosting's Coaching
              Service! 🎮 Unlock personalized guidance from top-tier coaches who
              will help you refine your skills, strategize like a pro, and
              dominate the competition.`}
          </p>
          <p className="text-gray-300 text-xs lg:text-base">
            Ready to level up your gameplay? Connect with a coach now and embark
            on your path to mastery!
          </p>
          <Link
            href="/team?coach=true"
            className="bg-dark text-center border-b-2 border-r-2 border-primary px-10 py-3 text-light text-xs lg:text-xl rounded w-fit hover:text-light/70 transition-colors shadow-base shadow-primary"
          >
            connect with coach
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoachingServiceContainer;
