"use client";
import { useState } from "react";
import { Calendar, Copy, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const PromoCodeList = () => {
  const promos = [
    {
      id: 1,
      title: "Peak Apparel",
      image: "/assets/shopBrandCard/pawLogo.png",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
    {
      id: 2,
      title: "Peak Apparel",
      image: "/assets/shopBrandCard/pawLogo.png",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
    {
      id: 3,
      title: "Peak Apparel",
      image: "/assets/shopBrandCard/pawLogo.png",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
  ];

  return (
    <div className="container mx-auto p-4 w-full">
      {promos.map((promo) => (
        <PromoCodeCard key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

const PromoCodeCard = ({ promo }) => {
  const [showCode, setShowCode] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(promo.code);
      toast.success("Promo code copied!", {
        description: `${promo.code} has been copied to your clipboard.`,
        duration: 3000,
      });
    } catch (err) {
      // Fallback for older browsers or if clipboard API fails
      const textArea = document.createElement("textarea");
      textArea.value = promo.code;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success("Promo code copied!", {
          description: `${promo.code} has been copied to your clipboard.`,
          duration: 3000,
        });
      } catch (fallbackErr) {
        toast.error("Failed to copy promo code");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <Card className="overflow-hidden mb-4 rounded-2xl shadow-sm border p-0">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left section */}
        <div className="flex flex-col md:flex-row flex-1 p-4 gap-4">
          {/* Logo */}
          <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-base font-medium text-gray-900">
                {promo.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Expired: {promo.expiry}</span>
              </div>

              <h2 className="text-lg font-bold mt-2">{promo.discount}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {promo.description}
              </p>
            </div>

            {/* Promo Code */}
            <div className="mt-3">
              {showCode ? (
                <div className="flex items-center">
                  <Badge
                    variant="outline"
                    className="bg-gray-100 border-dashed border-gray-300 text-gray-800 px-3 py-1"
                  >
                    {promo.code}
                  </Badge>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-2"
                          onClick={handleCopyCode}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setShowCode(true)}
                >
                  Show Promo Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-red-700 flex md:w-32 w-full justify-center items-center p-6 md:rounded-none rounded-b-2xl md:rounded-r-2xl md:rounded-l-none">
          <div className="bg-white rounded-full p-3">
            <ShoppingBag className="w-8 h-8 text-red-700" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PromoCodeList;
