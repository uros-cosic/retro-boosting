import React from "react";
import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src="/img/retro-map.png"
        alt="Retro Map"
        className="h-full w-full object-cover"
        width={1634}
        height={610}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase space-y-3 sm:space-y-5 w-full">
        <h1 className="text-white text-lg sm:text-4xl font-black text-center">
          Say Goodbye to Losing Streaks
          <br />
          Get Your Winning Edge with a Booster!
        </h1>
        <h2 className="text-gray-300 text-xs sm:text-xl font-bold text-center">
          Or unleash your true potential with coaching
        </h2>
        <div className="flex space-x-3 sm:space-x-5 text-white font-bold text-sm sm:text-xl items-center justify-center">
          <Link
            href="/boosting#nav"
            className="bg-primary hover:bg-primary/90 px-10 py-2 rounded transition-colors shadow-xl"
          >
            Boosting
          </Link>
          <Link
            href="/coaching#nav"
            className="bg-secondary text-black px-10 py-2 rounded hover:bg-secondary/90 transition-colors shadow-xl"
          >
            Coaching
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
