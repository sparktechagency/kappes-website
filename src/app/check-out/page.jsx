"use client";
import Checkout from "@/components/CheckOut/checkout";
import { withAuth } from "@/Providers/AuthGuard";
import React from "react";

function CheckOutPage() {
  return <Checkout />;
}

export default withAuth(CheckOutPage);
