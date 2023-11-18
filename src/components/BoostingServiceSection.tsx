import React from "react";
import Image from "next/image";
import Link from "next/link";
import BoosterCard from "./BoosterCard";

function BoostingServiceSection() {
  // temp boosters content
  const boostersContent = [
    {
      avatar: "/img/temp/boosters/prince.png",
      name: "prince",
      link: "/boosters/prince",
    },
    {
      avatar: "/img/temp/boosters/lexa.png",
      name: "lexa",
      link: "/boosters/lexa",
    },
    {
      avatar: "/img/temp/boosters/tama.png",
      name: "tama",
      link: "/boosters/tama",
    },
  ];

  return (
    <section className="flex items-center justify-center w-full relative h-[65vh]">
      <Image
        src="/img/riven-cover.jpg"
        alt="Boosting Service"
        height={500}
        width={1700}
        className="object-cover h-full w-full"
      />
      <div className="absolute h-full w-full bg-primary/50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full py-5 px-1 lg:py-10 w-full lg:w-3/4 mx-auto uppercase flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between space-y-3 lg:space-y-5 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-4xl font-black">
            boosting service
          </h1>
          <p className="text-white text-xs lg:text-base font-black">
            Master the competitive realm of League of Legends with our unmatched
            boosting service. Experience unparalleled success as our dedicated
            professionals propel you to new heights of victory.
          </p>
          <p className="text-white text-xs lg:text-base font-black">
            Unlock your true potential, surge ahead in the rankings, and cement
            your legacy as a true legend in the game.
          </p>
          <Link
            href="/boosters"
            className="bg-black text-center border-b-2 border-r-2 border-white px-10 py-3 text-white text-xs lg:text-lg font-bold rounded w-fit hover:bg-black/90 transition-colors"
          >
            connect with booster
          </Link>
        </div>
        <div className="w-fit sm:w-1/3 h-[40%] lg:h-full flex lg:flex-col justify-center items-end lg:items-start lg:space-y-2 lg:justify-between">
          {boostersContent.map((booster, idx) => (
            <BoosterCard key={idx} data={{ booster, idx }} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BoostingServiceSection;
