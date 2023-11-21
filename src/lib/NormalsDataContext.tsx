"use client";
import { createContext } from "react";

export type NormalsOrderDataContent = {
  boosterRank: string;
  numOfGames: number;
  setNormalsOrderData: (s: any) => void;
};

export const NormalsOrderDataContext: any =
  createContext<NormalsOrderDataContent>({
    boosterRank: "M1",
    numOfGames: 1,
    setNormalsOrderData: () => {},
  });
