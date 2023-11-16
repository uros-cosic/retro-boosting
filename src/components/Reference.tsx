import React from "react";
import Image from "next/image";

interface ReferenceCard {
  label: string;
  link: string;
  src: string;
}

function Reference({ data }: { data: ReferenceCard }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image
        src={data.src}
        alt={data.label}
        height={500}
        width={500}
        className="max-h-full w-auto"
      />
    </div>
  );
}

export default Reference;
