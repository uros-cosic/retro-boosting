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

export type OrderDataContent = {
  orderData: {
    from: string;
    to: string;
    options: OptionsInterface;
  };
  setOrderData: (s: any) => void;
};

export const OrderDataContext: any = createContext<OrderDataContent>({
  orderData: {
    from: "D4",
    to: "M1",
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
  },
  setOrderData: () => {},
});
