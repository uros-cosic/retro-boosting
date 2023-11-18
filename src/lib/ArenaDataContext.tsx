"use client";
import { createContext } from "react";

export type ArenaOrderDataContent = {
  desiredRank: string;
  numOfGames: number;
  setArenaOrderData: (s: any) => void;
};

export const ArenaOrderDataContext: any = createContext<ArenaOrderDataContent>({
  desiredRank: "G1",
  numOfGames: 1,
  setArenaOrderData: () => {},
});
