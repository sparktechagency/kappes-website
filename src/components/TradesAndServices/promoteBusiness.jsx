"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PromoteBusiness = () => {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-comfortaa md:text-4xl font-bold text-gray-900 mb-4">
            Promote your business to <br className="hidden md:block" /> local
            customers.
          </h2>
          <p className="text-base text-gray-700 mb-6">
            Boost your chances of being found by local shoppers by advertising
            with The Canuck. Get your business noticed in your community and
            connect with potential customers nearby. With The Canuck, it's
            easier than ever to increase your visibility and grow your business
            in Canada. Let us help you stand out and attract more customers!
          </p>
          <Link href="/business-listing">
            <Button className="bg-red-600 hover:bg-red-700 font-comfortaa text-lg text-white">
              Add your Business
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/assets/tradesAndServies/promoteBusiness.png" // Replace with your image path
            alt="Promote your business"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoteBusiness;
