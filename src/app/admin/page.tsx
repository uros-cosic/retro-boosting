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

async function Page() {
  const data: any = await getMe();

  if (data.data?.role === "administrator") {
    const chartData: any = await getChartData();
    const analyticsData: any = await getAnalytics();
    const recentOrdersData: any = await getRecentOrders();
    const ordersData: any = await getOrdersData();

    return (
      <div className="py-10 text-white max-w-7xl mx-auto px-1 lg:px-0">
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
                        analyticsData.data.totalRevenue
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
                        {analyticsData.data.users}
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
                        {analyticsData.data.sales}
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
                        {analyticsData.data.activeNow}
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
                      <Overview data={chartData.data} />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 text-white bg-muted border-primary">
                    <CardHeader>
                      <CardTitle>Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RecentOrders data={recentOrdersData.data} />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="orders" className="space-y-4">
                <div className="min-h-[60vh] w-full">
                  <OrdersDataTable data={ordersData.data} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  return <NotFound />;
}

export default Page;
