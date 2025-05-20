import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";

export default function ShopBrandCard({ brandInfo }) {
  const { id, name, location, logo, cover } = brandInfo;

  return (
    <Card className="p-0 overflow-hidden relative">
      {/* Cover Image */}
      <div>
        <Image
          src={cover}
          width={1000}
          height={1000}
          alt="cover"
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
        />
      </div>

      {/* Logo and Info */}
      <div className="flex items-end gap-4 absolute left-4 right-4 bottom-8 sm:bottom-10 md:bottom-14">
        <Image
          src={logo}
          width={1000}
          height={1000}
          alt="logo"
          className="w-fit md:w-16 md:h-16 lg:h-20 lg:w-20 h-20 sm:w-24 sm:h-24 object-cover border rounded-md bg-white"
        />
        <div className="bg-white bg-opacity-80 p-2 rounded-md w-full max-w-[calc(100%-6rem)] text-wrap">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
            {name}
          </h2>
          <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 truncate">
            <GrLocation className="text-lg" />
            {location}
          </p>
        </div>
      </div>

      {/* Footer Spacer */}
      <CardFooter className="h-16 sm:h-20 md:h-16"></CardFooter>
    </Card>
  );
}
