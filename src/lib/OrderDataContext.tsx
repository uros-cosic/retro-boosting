import { createContext } from "react";

export type OrderDataContent = {
  from: string;
  to: string;
  setOrderData: (s: any) => void;
};

export const OrderDataContext: any = createContext<OrderDataContent>({
  from: "D4",
  to: "M1",
  setOrderData: () => {},
});
