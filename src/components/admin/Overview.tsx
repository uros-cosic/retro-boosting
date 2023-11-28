"use client";

import { AdminDataContent, AdminDataContext } from "@/lib/AdminContext";
import { useContext } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const { data } = useContext<AdminDataContent>(AdminDataContext);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data.chartData}>
        <XAxis
          dataKey="name"
          stroke="#fff"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#fff"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#7C3FFF" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
