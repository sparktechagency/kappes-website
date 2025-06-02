import FrontCover from "@/common/components/frontCover";
import React from "react";
import ServicePromotion from "./servicePromotion";
import RightAside from "./rightAside";

function ServiceLayout() {
  return (
    <div className="px-4 lg:px-32">
      <FrontCover />
      <div className="flex flex-col  md:flex md:flex-row md:gap-10 lg:gap-5  lg:px-0 md:justify-between justify-between ">
        <ServicePromotion />
        <RightAside />
      </div>
    </div>
  );
}

export default ServiceLayout;
