import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/redux/baseUrl";

export default function ShopBrandCard({ brandInfo }) {
  const { id, name, address, logo, cover } = brandInfo;

  return (
    <div className="h-full">
      <Link href={`/shop-by-store/store/${id}`}>
        <div>
          <Card className="p-0 overflow-hidden relative hover:scale-101">
            {/* Cover Image */}
            <div>
              <Image
                src={`${getImageUrl}${cover}`}
                width={1000}
                height={1000}
                alt="cover"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>

            {/* Logo and Info - Mobile: Center layout, Desktop: Side by side */}
            <div className="absolute left-4 right-4 bottom-8 sm:bottom-10 md:bottom-14">
              {/* Mobile Layout: Center everything */}
              <div className="flex flex-col items-center text-center sm:hidden">
                <Image
                  src={`${getImageUrl}${logo}`}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="w-20 h-20 object-cover border rounded-md bg-white mb-3"
                />
                <div className="bg-white bg-opacity-80 p-2 rounded-md w-full">
                  <h2 className="text-lg font-semibold truncate">{name}</h2>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-600 truncate">
                    <GrLocation className="text-lg text-black" />
                    {address}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Side by side (original) */}
              <div className="hidden sm:flex items-end gap-4">
                <Image
                  src={`${getImageUrl}${logo}`}
                  width={500}
                  height={500}
                  alt="logo"
                  className=" sm:w-14 sm:h-14  md:w-18 md:h-18  object-cover border rounded-md bg-white"
                />
                <div className="bg-white bg-opacity-80 p-2 rounded-md w-full max-w-[calc(100%-6rem)] text-wrap">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
                    {name}
                  </h2>
                  <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 truncate">
                    <GrLocation className="text-lg text-black" />
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Spacer */}
            <CardFooter className="h-16 sm:h-20 md:h-16"></CardFooter>
          </Card>
        </div>
      </Link>
    </div>
  );
}
