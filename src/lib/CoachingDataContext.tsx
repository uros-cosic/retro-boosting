"use client";
import { createContext } from "react";

export type CoachingOrderDataContent = {
  coachingOrderData: {
    coachingHours: number;
    server: string;
    role: string;
    language: string;
    coach: {
      name: string;
      avatar: string;
    };
    options: {
      priorityOrder: boolean;
    };
  };
  setCoachingOrderData: (s: any) => void;
};

export const CoachingOrderDataContext: any =
  createContext<CoachingOrderDataContent>({
    coachingOrderData: {
      coachingHours: 1,
      server: "EUW",
      role: "JG",
      language: "en",
      coach: {
        name: "any",
        avatar: "/img/temp/coaches/any.png",
      },
      options: {
        priorityOrder: false,
      },
    },
    setCoachingOrderData: () => {},
  });
