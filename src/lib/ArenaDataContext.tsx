"use client";
import { createContext } from "react";

interface OptionsInterface {
  serviceType: string;
  server: string;
  queue: string;
  offlineMode: boolean;
  champion: boolean;
  priorityOrder: boolean;
  streamGames: boolean;
  extraOptions: {
    lane: string;
    flashPlacement: string;
  };
}

export type ArenaOrderDataContent = {
  currentRank: string;
  numOfGames: number;
  options: OptionsInterface;
  setArenaOrderData: (s: any) => void;
};

export const ArenaOrderDataContext: any = createContext<ArenaOrderDataContent>({
  currentRank: "G1",
  numOfGames: 1,
  options: {
    serviceType: "solo",
    server: "euw",
    queue: "arena",
    offlineMode: false,
    champion: false,
    priorityOrder: false,
    streamGames: false,
    extraOptions: {
      lane: "any",
      flashPlacement: "any",
    },
  },
  setArenaOrderData: () => {},
});
