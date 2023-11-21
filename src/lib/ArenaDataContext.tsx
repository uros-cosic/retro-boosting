"use client";
import { createContext } from "react";

export type ArenaOrderDataContent = {
  currentRank: string;
  numOfGames: number;
  setArenaOrderData: (s: any) => void;
};

export const ArenaOrderDataContext: any = createContext<ArenaOrderDataContent>({
  currentRank: "G1",
  numOfGames: 1,
  setArenaOrderData: () => {},
});
