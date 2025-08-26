import Checkout from "@/components/CheckOut/checkout";
import { withAuth } from "@/components/Providers/AuthGuard";
import React from "react";

function CheckOutPage() {
  return <Checkout />;
}

export default withAuth(CheckOutPage);
