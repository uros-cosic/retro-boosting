import React from "react";

function Page() {
  return (
    <div className="py-10 flex flex-col space-y-10 text-light max-w-7xl mx-auto px-1 lg:px-0">
      <h1 className="text-center text-3xl font-black">Refund Policy</h1>
      <div className="space-y-10 text-center">
        <div className="space-y-5">
          <h2 className="text-xl font-black">
            1. Refund Eligibility Before Order Commencement
          </h2>
          <p>
            Full Refund: Clients are eligible for a full refund if they choose
            to cancel their order before any boosting or coaching services have
            begun.
          </p>
          <p>
            Request Procedure: To request a refund, clients must contact our
            support team with their order details. The request must be made
            prior to the commencement of the order.
          </p>
          <p>
            Processing Time: Refunds will be processed within 5-10 business days
            after the request is approved.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-black">
            2. No Refunds After Order Commencement
          </h2>
          <p>
            Once an order has begun, we are unable to offer refunds. We
            encourage clients to be certain of their decision before proceeding
            with our services.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-black">
            3. Special Consideration for Duo Boost Orders
          </h2>
          <p>
            Underperformance: If a client is underperforming in a duo boost
            order, we cannot offer a refund. However, we provide the option to
            transfer the order to a solo boost.
          </p>
          <p>
            Transfer Request: To request a transfer to a solo boost, clients
            must contact our support team. This option is only available if the
            client's performance is deemed insufficient for the duo boost
            format.
          </p>
          <p>
            Adjustments: The order will be adjusted accordingly, and any
            difference in pricing will be addressed on a case-by-case basis.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-black">4. Contact Information</h2>
          <p>
            For any inquiries or requests regarding refunds, please contact our
            support team at support@retroboosting.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
