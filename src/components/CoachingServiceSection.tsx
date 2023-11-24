import React from "react";
import Image from "next/image";
import CoachCard from "./CoachCard";
import Link from "next/link";

function CoachingServiceSection() {
  // temp coach content
  const coachesContent = [
    {
      avatar: "/img/temp/coaches/lexa.png",
      name: "lexa",
      link: "/coaches/lexa",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "ASCO",
      link: "/coaches/asco",
    },
  ];
  return (
    <section className="flex items-center justify-center w-full relative h-[65vh]">
      <Image
        src="/img/ezreal-cover.jpg"
        alt="Coaching Service"
        height={500}
        width={1700}
        className="object-cover h-full w-full"
      />
      <div className="absolute h-full w-full bg-primary/50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full py-5 px-1 lg:py-10 w-full lg:w-3/4 mx-auto uppercase flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-fit sm:w-1/3 h-[40%] lg:h-full flex lg:flex-col justify-center items-end lg:items-start lg:space-y-5">
          {coachesContent.map((coach, idx) => (
            <CoachCard key={idx} data={{ coach, idx }} />
          ))}
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between space-y-3 lg:space-y-5 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-4xl font-black">
            coaching service
          </h1>
          <p className="text-gray-300 text-xs lg:text-base font-bold">
            Take your gaming to the next level with our exceptional coaching
            service. Enhance your strategic gameplay, refine your skills, and
            gain a competitive edge.
          </p>
          <p className="text-gray-300 text-xs lg:text-base font-bold">
            Embrace the opportunity to grow as a player, unlock your true
            abilities, and embark on a journey to become a true gaming champion
            with our tailored coaching sessions.
          </p>
          <Link
            href="/coaches"
            className="bg-black text-center border-b-2 border-r-2 border-primary px-10 py-3 text-white text-xs lg:text-xl font-bold rounded w-fit hover:text-white/80 transition-colors"
          >
            connect with coach
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoachingServiceSection;
