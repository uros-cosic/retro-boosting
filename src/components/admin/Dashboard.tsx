"use client";
import React, { useEffect, useState } from "react";
import { CalendarDateRangePicker } from "@/components/admin/DateRangePicker";
import { Overview } from "@/components/admin/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { priceify } from "@/lib/utils";
import RecentOrders from "@/components/admin/RecentOrders";
import OrdersDataTable from "@/components/admin/OrdersDataTable";
import { DateRange } from "react-day-picker";
import {
  AnalyticsInterface,
  ChartDataInterface,
  OrderPayment,
  RecentOrdersInterface,
} from "@/lib/apiUtils";
import { AdminDataContext } from "@/lib/AdminContext";
import {
  getChartData,
  getAnalytics,
  getRecentOrders,
  getOrdersData,
} from "@/lib/apiUtils";
import { Skeleton } from "../ui/skeleton";

function Dashboard({
  chartData,
  analyticsData,
  recentOrdersData,
  ordersData,
}: {
  chartData: Array<ChartDataInterface>;
  analyticsData: AnalyticsInterface;
  recentOrdersData: Array<RecentOrdersInterface>;
  ordersData: Array<OrderPayment>;
}) {
  const [data, setData] = useState<any>({
    chartData,
    analyticsData,
    recentOrdersData,
    ordersData,
    date: {
      from: new Date(2023, 10, 1),
      to: new Date(Date.now()),
    },
  });
  const [loading, setLoading] = useState(false);

  const handleDateChanged = async () => {
    let newChartData: any = getChartData();
    let newAnalyticsData: any = getAnalytics();
    let newRecentOrdersData: any = getRecentOrders();
    let newOrdersData: any = getOrdersData();

    const data = await Promise.all([
      newChartData,
      newAnalyticsData,
      newRecentOrdersData,
      newOrdersData,
    ]);

    // TODO: if err while fetching, toast err and dont change

    setData((prev: any) => {
      return {
        ...prev,
        chartData: data[0].data,
        analyticsData: data[1].data,
        recentOrdersData: data[2].data,
        ordersData: data[3].data,
      };
    });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    handleDateChanged();
  }, [data.date]);

  return (
    <div className="py-10 text-white max-w-7xl mx-auto px-1 lg:px-0">
      <AdminDataContext.Provider
        value={{
          data,
          setData,
        }}
      >
        <div className="w-full min-h-[70vh] bg-muted-foreground rounded-xl border border-black shadow-base p-5 flex flex-col justify-between space-y-5">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-3xl">Dashboard</h1>
            <CalendarDateRangePicker />
          </div>
          <div className="h-full w-full">
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-muted text-white">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              {loading ? (
                <Skeleton className="w-full h-[60vh] bg-muted" />
              ) : (
                <>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card className="text-white bg-muted border-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Revenue
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{`$${priceify(
                            analyticsData.totalRevenue
                          )}`}</div>
                        </CardContent>
                      </Card>
                      <Card className="text-white bg-muted border-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Users
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {analyticsData.users}
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="text-white bg-muted border-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Sales
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {analyticsData.sales}
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="text-white bg-muted border-primary">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Active Now
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {analyticsData.activeNow}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                      <Card className="col-span-4 text-white bg-muted border-primary">
                        <CardHeader>
                          <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                          <Overview />
                        </CardContent>
                      </Card>
                      <Card className="col-span-3 text-white bg-muted border-primary">
                        <CardHeader>
                          <CardTitle>Recent Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RecentOrders />
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="orders" className="space-y-4">
                    <div className="min-h-[60vh] w-full">
                      <OrdersDataTable />
                    </div>
                  </TabsContent>
                </>
              )}
            </Tabs>
          </div>
        </div>
      </AdminDataContext.Provider>
    </div>
  );
}

export default Dashboard;
