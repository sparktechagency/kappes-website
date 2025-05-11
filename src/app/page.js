import Banner from "@/components/Home/Banner/banner";
import PopularCategories from "@/components/Home/Popular Categories/popularCategories";
import ProductRecomendation from "@/components/Home/Recomendation/productRecomendation";
import TrendingProduct from "@/components/Home/Trending Products/trendingProduct";
import React from "react";

function Home() {
  return (
    <div className="h-100vh w-100vw ">
      <Banner />
      <PopularCategories />
      <ProductRecomendation />
      <TrendingProduct />
    </div>
  );
}

export default Home;
