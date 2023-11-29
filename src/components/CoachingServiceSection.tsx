import React from "react";
import { getTopCoaches } from "@/lib/apiUtils";
import CoachingServiceContainer from "./CoachingServiceContainer";

async function CoachingServiceSection() {
  const coachesContent: any = await getTopCoaches();

  return <CoachingServiceContainer coachesContent={coachesContent} />;
}

export default CoachingServiceSection;
