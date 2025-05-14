"use client";
import { useState } from "react";
import { Calendar, Copy, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const PromoCodeCard = ({ promo }) => {
  const [showCode, setShowCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promo.code);
    toast({
      title: "Promo code copied!",
      description: `${promo.code} has been copied to your clipboard.`,
      duration: 3000,
    });
  };

  return (
    <Card className="overflow-hidden mb-4 border rounded-lg shadow-sm p-0">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left content */}
        <div className="flex flex-col md:flex-row p-4 flex-1">
          <div className="flex-shrink-0 flex items-start">
            <div className="w-16 h-16 bg-blue-100 rounded-md overflow-hidden flex items-center justify-center">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 ml-0 md:ml-4 mt-3 md:mt-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{promo.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>Expired: {promo.expiry}</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold mt-2">{promo.discount}</h2>

            <p className="text-gray-600 text-sm mt-1">{promo.description}</p>

            <div className="mt-3">
              {showCode ? (
                <div className="flex items-center">
                  <Badge
                    variant="outline"
                    className="px-3 py-1 border-dashed border-gray-300 bg-gray-50 text-gray-800"
                  >
                    {promo.code}
                  </Badge>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-2"
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
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setShowCode(true)}
                >
                  Show Promo Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right content - Red box with icon */}
        <div className="bg-sky-700 flex-shrink-0 w-full h-full md:w-32 flex items-center justify-center p-6">
          <div className="bg-white rounded-full p-3">
            <ShoppingBag className="h-8 w-8 text-red-700" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const PromoCodeList = () => {
  const promos = [
    {
      id: 1,
      title: "Peak Apparel",
      image: "/api/placeholder/64/64",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
    {
      id: 2,
      title: "Peak Apparel",
      image: "/api/placeholder/64/64",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
    {
      id: 3,
      title: "Peak Apparel",
      image: "/api/placeholder/64/64",
      expiry: "10 May, 2025",
      discount: "25% Off promo code",
      description:
        "Shop a Wide Range of Products Across All Categories at Peak aparel – and Save Up to 80%! From fashion and electronics to home essentials and more — the deals are unbeatable!",
      code: "PEAK25",
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {promos.map((promo) => (
        <PromoCodeCard key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default PromoCodeList;
