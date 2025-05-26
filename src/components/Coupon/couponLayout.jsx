import React from "react";
import CouponListHead from "./couponListHead";
import PromoCodeList from "./promoList";

function CouponLayout() {
  return (
    <div className="py-10 px-4 lg:px-32 ">
      <CouponListHead />
      <PromoCodeList />
    </div>
  );
}

export default CouponLayout;
