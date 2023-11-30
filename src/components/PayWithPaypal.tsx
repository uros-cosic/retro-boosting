import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayWithPaypal() {
  return (
    <div className="w-full">
      <PayPalScriptProvider options={{ clientId: "test" }}>
        <PayPalButtons style={{ layout: "vertical" }} />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayWithPaypal;
