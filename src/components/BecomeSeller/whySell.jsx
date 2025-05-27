import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Truck,
  FileText,
  Users,
  CreditCard,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export default function WhySellOnCanuckMall() {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "National Reach",
      description:
        "Expand your business to millions of Canadian shoppers, across cities and provinces, with The Canuck Mall being a trusted and popular marketplace for diverse products.",
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Free Registration",
      description:
        "No upfront cost to start! Register your seller account, list your products, and begin selling — all with zero setup fees. Start earning with no financial barriers.",
    },
    {
      icon: <Truck className="h-6 w-6 text-white" />,
      title: "Reliable Shipping",
      description:
        "Enjoy fast, reliable, and hassle-free delivery through The Canuck Mall's trusted logistics network. We handle the shipping, so you can focus on growing your business.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Timely Payments",
      description:
        "Experience hassle-free payments! Your sales earnings are automatically deposited into your bank account every week, giving you peace of mind and predictable cash flow.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Seller Support",
      description:
        "Our dedicated support team is here for you 24/7. Whether you need help with order management, product listings, or troubleshooting, we've got you covered.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Trust & Security",
      description:
        "Build customer trust with our secure payment gateway and robust buyer protection policies. Your products and customers are always safeguarded, ensuring a smooth transaction.",
    },
  ];

  return (
    <div className="w-full  mx-auto px-4 py-12 md:py-16 lg:px-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-10 md:mb-16 font-comfortaa ">
        Why Sell on The Canuck Mall ?
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex-shrink-0 bg-red-700 rounded-md p-3 mt-1">
                {benefit.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl  font-bold mb-2 font-comfortaa">
                  {benefit.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-700 text-sm md:text-base py-1.5">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
