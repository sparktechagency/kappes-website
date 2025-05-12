// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// function BillingSuccess() {
//   return (
//     <Card className="w-1/2 mx-auto py-10">
//       <CardHeader>
//         <CardTitle className="text-center text-red-700 font-bold">
//           Order Placed Successfully
//         </CardTitle>
//         <CardDescription className="text-center text-gray-500">
//           Thank you for your order! Your order number is #123456.
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="space-y-4">
//         <div className="text-center">
//           <p className="text-lg font-semibold">
//             Your order will be shipped to:
//           </p>
//           <p>123 Main St, Springfield, IL</p>
//         </div>
//       </CardContent>

//       <CardFooter className="flex justify-center">
//         <Button variant="destructive" className="bg-red-700 hover:bg-red-800">
//           Continue Shopping
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default BillingSuccess;

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

function BillingSuccess() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <Card className="w-full mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-red-700 font-bold text-xl sm:text-2xl">
            Order Placed Successfully
          </CardTitle>
          <CardDescription className="text-center text-gray-500 text-sm sm:text-base">
            Thank you for your order! Your order number is #123456.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold">
              Your order will be shipped to:
            </p>
            <p className="text-sm sm:text-base">123 Main St, Springfield, IL</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="destructive"
              className="bg-red-700 hover:bg-red-800 w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
            >
              Continue Shopping
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BillingSuccess;
