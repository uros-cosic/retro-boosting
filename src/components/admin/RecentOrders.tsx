import { AdminDataContent, AdminDataContext } from "@/lib/AdminContext";
import { priceify } from "@/lib/utils";
import React, { useContext } from "react";

function RecentOrders() {
  const { data } = useContext<AdminDataContent>(AdminDataContext);
  return (
    <>
      {data.recentOrdersData.map((orderObj, idx) => (
        <div key={idx} className="w-full flex items-center justify-between">
          <p>{orderObj.customer}</p>
          <p>{orderObj.type}</p>
          <p>${priceify(orderObj.total)}</p>
        </div>
      ))}
    </>
  );
}

export default RecentOrders;
