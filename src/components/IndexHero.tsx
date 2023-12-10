import React from "react";
import Image from "next/image";
import Link from "next/link";

function IndexHero() {
  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src="/img/retro-map.png"
        alt="Retro Map"
        className="h-full w-full object-cover"
        width={1634}
        height={610}
        priority={true}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   space-y-3 sm:space-y-5 w-full">
        <h1 className="text-white text-lg sm:text-4xl font-black text-center">
          Your Path to Victory Begins Here
        </h1>
        <h2 className="text-gray-300 text-xs sm:text-xl text-center">
          Elevate Your Game with Expert Boosting and Coaching Services
        </h2>
        <div className="flex space-x-3 sm:space-x-5 text-sm sm:text-xl items-center justify-center">
          <Link
            href="/boosting"
            className="bg-primary hover:bg-primary/90 px-10 py-2 rounded transition-colors text-white font-black"
          >
            Boosting
          </Link>
          <Link
            href="/coaching"
            className="bg-white text-black px-10 py-2 rounded hover:bg-white/90 transition-colors font-black"
          >
            Coaching
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndexHero;
