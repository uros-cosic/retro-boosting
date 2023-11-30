import NotFound from "@/app/not-found";
import CheckoutContainer from "@/components/CheckoutContainer";
import { getCheckout } from "@/lib/apiUtils";
import React from "react";

async function Page({ params }: { params: { id: string } }) {
  const data: any = await getCheckout(params.id);
  if (data.status === "success")
    return (
      <div className="py-10 max-w-7xl mx-auto px-1 lg:px-0">
        <CheckoutContainer data={data.data} />
      </div>
    );

  return <NotFound />;
}

export default Page;
