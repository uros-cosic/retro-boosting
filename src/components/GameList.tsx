import Image from "next/image";
import Link from "next/link";
import React from "react";

function GameList() {
  const links = [
    {
      label: "casual",
      link: "/boosting/casual",
    },
    {
      label: "ranked",
      link: "/boosting/ranked",
    },
    {
      label: "duo",
      link: "/boosting/duo",
    },
    {
      label: "team",
      link: "/boosting/team",
    },
  ];

  return (
    <section className="py-10 max-w-5xl mx-auto space-y-5">
      <h1 className="text-3xl font-bold text-center text-white uppercase">
        game list
      </h1>
      <h2 className="text-xl font-bold text-gray-400 text-center">
        You can view all the games where you can find friends.
      </h2>
      <div className="h-[60vh] w-full rounded-xl border-secondary border-b-4 border-r-4 overflow-hidden relative">
        <Image
          src="/img/game-list.png"
          alt="Game List Section"
          height={600}
          width={1200}
          className="h-full w-full object-cover"
        />
        <div className="z-10 bg-gradient-to-b from-transparent to-black w-full h-full absolute top-0">
          <div className="h-full w-full flex items-end">
            <div className="w-full md:w-1/2 h-1/3 uppercase flex flex-col items-center justify-center space-y-5">
              <h1 className="text-center text-2xl font-bold text-white">
                league of legends
              </h1>
              <div className="flex space-x-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    className="text-third bg-primary px-2 py-1 rounded-full border-third border font-medium text-xs hover:text-third/80 hover:border-third/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameList;
