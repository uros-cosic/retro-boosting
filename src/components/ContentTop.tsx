import React from "react";
import Image from "next/image";

function ContentTop({ heading }: { heading: string }) {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/img/retro-map.png"
        alt="Retro Map"
        className="h-full w-full object-cover"
        width={1634}
        height={610}
      />
      <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-black text-5xl">
        {heading}
      </h1>
    </div>
  );
}

export default ContentTop;
