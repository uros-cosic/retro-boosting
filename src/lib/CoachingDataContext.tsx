"use client";
import { createContext } from "react";

export type CoachingOrderDataContent = {
  coachingHours: number;
  server: string;
  role: string;
  language: string;
  coach: {
    name: string;
    avatar: string;
  };
  setCoachingOrderData: (s: any) => void;
};

export const CoachingOrderDataContext: any =
  createContext<CoachingOrderDataContent>({
    coachingHours: 1,
    server: "EUW",
    role: "JG",
    language: "en",
    coach: {
      name: "any",
      avatar: "/img/temp/coaches/lexa.png",
    },
    setCoachingOrderData: () => {},
  });
