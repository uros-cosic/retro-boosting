"use client";
import { createContext } from "react";
import {
  AnalyticsInterface,
  ChartDataInterface,
  OrderPayment,
  RecentOrdersInterface,
} from "./apiUtils";

export type AdminDataContent = {
  data: {
    chartData: Array<ChartDataInterface> | [];
    analyticsData: AnalyticsInterface | {};
    recentOrdersData: Array<RecentOrdersInterface> | [];
    ordersData: Array<OrderPayment> | [];
    date: {
      from: Date | undefined;
      to?: Date | undefined;
    };
  };
  setData: (s: any) => void;
};

export const AdminDataContext: any = createContext<AdminDataContent>({
  data: {
    chartData: [],
    analyticsData: {},
    recentOrdersData: [],
    ordersData: [],
    date: {
      from: new Date(2023, 10, 1),
      to: new Date(Date.now()),
    },
  },
  setData: () => {},
});
