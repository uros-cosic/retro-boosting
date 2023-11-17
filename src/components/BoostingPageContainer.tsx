"use client";
import React from "react";
import ContentTop from "./ContentTop";
import { usePathname } from "next/navigation";
import BoostingPageNavigation from "./BoostingPageNavigation";

function BoostingPageContainer() {
  const pathname = usePathname();

  const mapping: any = {
    "/boosting": "solo boosting",
    "/boosting/duo": "duo boosting",
    "/boosting/arena": "arena",
    "/boosting/win": "win boosting",
    "/boosting/normals": "normal matches",
  };

  return (
    <>
      <ContentTop heading={mapping[pathname] || "Not Found"} />
      <BoostingPageNavigation />
    </>
  );
}

export default BoostingPageContainer;
