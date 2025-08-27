import FAQSection from "@/common/components/faqs";
import SellerBanner from "@/components/BecomeSeller/banner";
import SimpleSteps from "@/components/BecomeSeller/simpleSteps";
import WhySellOnCanuckMall from "@/components/BecomeSeller/whySell";

function BecomeSeller() {
  return (
    <div className="relative inset-0 w-full h-full bg-white  z-0">
      <div
        className="absolute inset-0  w-full h-full bg-white  -z-10 opacity-70"
        style={{
          backgroundImage: `url("/assets/texture.png")`,
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <SellerBanner />
      <WhySellOnCanuckMall />
      <SimpleSteps />
      <FAQSection />
    </div>
  );
}

export default BecomeSeller;
