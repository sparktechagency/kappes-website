import React from "react";
import ProductView from "./productView";
import DescriptionReview from "./descriptionReview";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function ProductPgae() {
  return (
    <>
      <ProductView />
      <DescriptionReview />
      <RelatedProducts />
    </>
  );
}

export default ProductPgae;
