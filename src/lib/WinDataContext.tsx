"use client";
import { createContext } from "react";

export type WinOrderDataContent = {
  currentRank: string;
  numOfGames: number;
  setWinOrderData: (s: any) => void;
};

export const WinOrderDataContext: any = createContext<WinOrderDataContent>({
  currentRank: "G1",
  numOfGames: 1,
  setWinOrderData: () => {},
});
