"use client";
import { createContext } from "react";

export type TeamDataContent = {
  data: Array<any>;
  setData: (s: any) => void;
};

export const TeamDataContext: any = createContext<TeamDataContent>({
  data: [],
  setData: () => {},
});
