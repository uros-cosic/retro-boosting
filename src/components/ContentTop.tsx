import React from "react";
import Image from "next/image";

function ContentTop({ heading }: { heading: string }) {
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src="/img/retro-map.png"
        alt="Retro Map"
        className="h-full w-full object-cover"
        width={1634}
        height={610}
        priority={true}
      />
      <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl lg:text-5xl text-center">
        {heading}
      </h1>
    </div>
  );
}

export default ContentTop;
