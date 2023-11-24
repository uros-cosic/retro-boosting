"use client";
import { createContext } from "react";

interface OptionsInterface {
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

export type NormalsOrderDataContent = {
  normalsOrderData: {
    boosterRank: string;
    numOfGames: number;
    options: OptionsInterface;
  };
  setNormalsOrderData: (s: any) => void;
};

export const NormalsOrderDataContext: any =
  createContext<NormalsOrderDataContent>({
    normalsOrderData: {
      boosterRank: "M1",
      numOfGames: 1,
      options: {
        server: "euw",
        queue: "summoners-rift",
        offlineMode: false,
        priorityOrder: false,
        streamGames: false,
        soloOnly: false,
        extraOptions: {
          lane: "any",
          flashPlacement: "any",
        },
      },
    },
    setNormalsOrderData: () => {},
  });
