"use client";
import { createContext } from "react";

interface OptionsInterface {
  currLP: string;
  server: string;
  queue: string;
  offlineMode: boolean;
  priorityOrder: boolean;
  streamGames: boolean;
  soloOnly: boolean;
  extraOptions: {
    lane: string;
    flashPlacement: string;
  };
}

export type WinOrderDataContent = {
  currentRank: string;
  numOfGames: number;
  options: OptionsInterface;
  setWinOrderData: (s: any) => void;
};

export const WinOrderDataContext: any = createContext<WinOrderDataContent>({
  currentRank: "M1",
  numOfGames: 1,
  options: {
    currLP: "0-20",
    server: "euw",
    queue: "solo",
    offlineMode: false,
    priorityOrder: false,
    streamGames: false,
    soloOnly: false,
    extraOptions: {
      lane: "any",
      flashPlacement: "any",
    },
  },
  setWinOrderData: () => {},
});
