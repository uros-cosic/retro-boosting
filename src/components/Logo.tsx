import Image from "next/image";
import React from "react";

function Logo() {
  return (
    // <h1 className="text-sm lg:text-xl font-normal uppercase">retro-boosting</h1>
    <Image
      src={"/img/logo.png"}
      alt="Retro Boosting Logo"
      height={250}
      width={250}
      className="h-6 w-auto"
    />
  );
}

export default Logo;
