import {
  getAnalytics,
  getChartData,
  getMe,
  getOrdersData,
  getRecentOrders,
} from "@/lib/apiUtils";
import React from "react";
import NotFound from "../not-found";
import { CalendarDateRangePicker } from "@/components/admin/DateRangePicker";
import { Overview } from "@/components/admin/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { priceify } from "@/lib/utils";
import RecentOrders from "@/components/admin/RecentOrders";
import OrdersDataTable from "@/components/admin/OrdersDataTable";
import { DateRange } from "react-day-picker";
import Dashboard from "@/components/admin/Dashboard";

async function Page() {
  const data: any = await getMe();

  if (data.data?.role === "administrator") {
    const chartData: any = await getChartData();
    const analyticsData: any = await getAnalytics();
    const recentOrdersData: any = await getRecentOrders();
    const ordersData: any = await getOrdersData();

    return (
      <Dashboard
        chartData={chartData.data}
        analyticsData={analyticsData.data}
        recentOrdersData={recentOrdersData.data}
        ordersData={ordersData.data}
      />
    );
  }

  return <NotFound />;
}

export default Page;
