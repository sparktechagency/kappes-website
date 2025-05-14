import FAQSection from "@/common/components/faqs";
import SellerBanner from "@/components/BecomeSeller/banner";
import SimpleSteps from "@/components/BecomeSeller/simpleSteps";
import WhySellOnCanuckMall from "@/components/BecomeSeller/whySell";
import React from "react";

function BecomeSeller() {
  return (
    <div>
      <SellerBanner />
      <WhySellOnCanuckMall />
      <SimpleSteps />
      <FAQSection />
    </div>
  );
}

export default BecomeSeller;
