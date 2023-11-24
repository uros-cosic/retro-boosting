"use client";
import { createContext } from "react";

export type UserContent = {
  user: {
    isLoggedIn: boolean;
    data: null | any;
  };
  setUser: (s: any) => void;
};

export const UserContext: any = createContext<UserContent>({
  user: {
    isLoggedIn: false,
    data: null,
  },
  setUser: () => {},
});
