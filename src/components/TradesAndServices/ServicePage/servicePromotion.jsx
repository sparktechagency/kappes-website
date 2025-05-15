import CarouselPlay from "@/common/components/carousel";
import React from "react";

function ServicePromotion() {
  const servicePromotionImage = [
    {
      id: 1,
      image: "/assets/tradesAndServies/servicePromo.png",
    },
    {
      id: 2,
      image: "/assets/tradesAndServies/servicePromo.png",
    },
    {
      id: 3,
      image: "/assets/tradesAndServies/servicePromo.png",
    },
  ];

  const services = [
    {
      id: 1,
      service: "Interior painting",
    },
    {
      id: 2,
      service: "Exterior painting",
    },
    {
      id: 3,
      service: "Commercial painting",
    },
    {
      id: 4,
      service: "Power washing",
    },
    {
      id: 5,
      service: "Custom color consultation",
    },
    {
      id: 6,
      service: "Cabinet and furniture painting",
    },
  ];
  return (
    <div className="w-full md:w-[70%] lg:w-[80%] px-4 md:p-0">
      <CarouselPlay slideItem={servicePromotionImage} />

      <div className="ml-5">
        <h2 className="text-3xl font-comfortaa font-bold -ml-5 my-5">
          Our Services
        </h2>

        <ul>
          {services.map((item) => (
            <li key={item.id} className="list-disc">
              {" "}
              {item.service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicePromotion;
