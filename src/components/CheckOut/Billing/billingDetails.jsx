import React from "react";
import Address from "./address";
import OrderSummary from "./orderSummary";

function BillingDetails() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile: Stacked layout */}
      <div className="block md:hidden space-y-8 w-full py-6">
        <Address />
        <OrderSummary />
      </div>

      {/* Tablet and larger: Side-by-side layout */}
      <div className="hidden md:flex flex-col lg:flex-row gap-8 xl:gap-12 w-full py-8">
        <div className="lg:w-2/3">
          <Address />
        </div>
        <div className="lg:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default BillingDetails;
