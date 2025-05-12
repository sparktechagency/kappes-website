import BillingSuccess from "@/components/CheckOut/Billing/billingSuccess";
import React from "react";

function OrderSuccess() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <BillingSuccess />
    </div>
  );
}

export default OrderSuccess;
