import {
  getAnalytics,
  getChartData,
  getMe,
  getOrdersData,
  getRecentOrders,
} from "@/lib/apiUtils";
import React from "react";
import NotFound from "../not-found";
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
