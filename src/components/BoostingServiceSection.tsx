import React from "react";
import { getTopBoosters } from "@/lib/apiUtils";
import BoostingServiceContainer from "./BoostingServiceContainer";

async function BoostingServiceSection() {
  const boostersContent: any = await getTopBoosters();

  return <BoostingServiceContainer boostersContent={boostersContent} />;
}

export default BoostingServiceSection;
