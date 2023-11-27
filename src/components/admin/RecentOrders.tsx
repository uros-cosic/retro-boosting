import { priceify } from "@/lib/utils";
import React from "react";

function RecentOrders({ data }: { data: Array<any> }) {
  return (
    <>
      {data.map((orderObj, idx) => (
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
