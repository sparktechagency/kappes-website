import SellerBanner from "@/components/BecomeSeller/banner";
import SellerFAQ from "@/components/BecomeSeller/sellerFAQ";
import SimpleSteps from "@/components/BecomeSeller/simpleSteps";
import WhySellOnCanuckMall from "@/components/BecomeSeller/whySell";
import React from "react";

function BecomeSeller() {
  return (
    <div>
      <SellerBanner />
      <WhySellOnCanuckMall />
      <SimpleSteps />
      <SellerFAQ />
    </div>
  );
}

export default BecomeSeller;
