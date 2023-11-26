import React from "react";
import Reference from "./Reference";

function References() {
  // TEMP References - will fetch from API prolly
  const references = [
    {
      label: "Riot Games",
      link: "https://www.riotgames.com/",
      src: "/img/temp/references/riot-games.png",
    },
    {
      label: "Corsair",
      link: "https://www.corsair.com/",
      src: "/img/temp/references/corsair.png",
    },
    {
      label: "Logitech",
      link: "https://www.logitech.com/",
      src: "/img/temp/references/logitech.png",
    },
    {
      label: "Razer",
      link: "https://www.razer.com/",
      src: "/img/temp/references/razer.png",
    },
  ];

  return (
    <section className="mx-auto my-10 grid grid-cols-4 gap-5 h-24 bg-black px-1 lg:px-0">
      {references.map((reference) => (
        <Reference key={reference.label} data={reference} />
      ))}
    </section>
  );
}

export default References;
