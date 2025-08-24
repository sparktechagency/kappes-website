"use client";
import React, { useState, useEffect } from "react";
import Filter from "./filter";
import ShopProductList from "./productList";
import { useGetShopProductsQuery } from "@/redux/productApi/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../features/productSlice";

function ShopLayout() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");

  const { data, isLoading, error } = useGetShopProductsQuery();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.product);

  const favoritesMap = favorites.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {});

  useEffect(() => {
    // Set products from API response when data is available
    if (data?.data?.result) {
      setProducts(data.data.result);
    }
  }, [data]);

  const handleFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };

  const toggleFavorite = (product, e) => {
    e.stopPropagation();
    e.preventDefault();

    const productId = product._id || product.id;

    if (favoritesMap[productId]) {
      dispatch(removeFav(productId));
    } else {
      dispatch(
        addFav({
          ...product,
          id: productId,
          favourite: true,
        })
      );
    }
  };

  // Price and discount helpers
  const getProductPrice = (product) => {
    if (!product) return 0;

    if (
      product.product_variant_Details &&
      product.product_variant_Details.length > 0
    ) {
      const variantPrices = product.product_variant_Details.map(
        (variant) => variant.variantPrice
      );
      return Math.min(...variantPrices, product.basePrice);
    }

    return product.basePrice;
  };

  const hasDiscountedPrice = (product) => {
    if (!product || !product.product_variant_Details) return false;

    return product.product_variant_Details.some(
      (variant) => variant.variantPrice < product.basePrice
    );
  };

  return (
    <div className="flex gap-5 py-5 px-5 md:px-24 lg:px-32 w-full">
      <Filter filterVisible={filterVisible} />
      <ShopProductList
        products={products}
        isLoading={isLoading}
        error={error}
        filterVisible={filterVisible}
        handleFilterVisible={handleFilterVisible}
        sortOption={sortOption}
        setSortOption={setSortOption}
        toggleFavorite={toggleFavorite}
        favoritesMap={favoritesMap}
        getProductPrice={getProductPrice}
        hasDiscountedPrice={hasDiscountedPrice}
      />
    </div>
  );
}

export default ShopLayout;
