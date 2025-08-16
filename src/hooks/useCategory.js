import { useEffect } from "react";
import { useGetPopularCategoryQuery } from "@/redux/productApi/productApi";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "@/features/categorySlice/categorySlice";

const useCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const {
    data: categoriesData,
    error: apiError,
    isLoading: apiLoading,
    refetch,
  } = useGetPopularCategoryQuery();

  useEffect(() => {
    if (categoriesData) {
      let categoriesToSet = null;

      if (
        categoriesData?.data?.categorys &&
        Array.isArray(categoriesData.data.categorys)
      ) {
        categoriesToSet = categoriesData.data.categorys;
      } else if (
        categoriesData?.data?.products &&
        Array.isArray(categoriesData.data.products)
      ) {
        categoriesToSet = categoriesData.data.products;
      } else if (
        categoriesData?.data?.data &&
        Array.isArray(categoriesData.data.data)
      ) {
        categoriesToSet = categoriesData.data.data;
      } else if (categoriesData?.data && Array.isArray(categoriesData.data)) {
        categoriesToSet = categoriesData.data;
      } else if (
        categoriesData?.products &&
        Array.isArray(categoriesData.products)
      ) {
        categoriesToSet = categoriesData.products;
      } else if (
        categoriesData?.result &&
        Array.isArray(categoriesData.result)
      ) {
        categoriesToSet = categoriesData.result;
      } else if (Array.isArray(categoriesData)) {
        categoriesToSet = categoriesData;
      } else {
        const keys = Object.keys(categoriesData);
        for (const key of keys) {
          if (Array.isArray(categoriesData[key])) {
            categoriesToSet = categoriesData[key];
            break;
          }
          if (
            typeof categoriesData[key] === "object" &&
            categoriesData[key] !== null
          ) {
            const nestedKeys = Object.keys(categoriesData[key]);
            for (const nestedKey of nestedKeys) {
              if (Array.isArray(categoriesData[key][nestedKey])) {
                categoriesToSet = categoriesData[key][nestedKey];
                break;
              }
            }
            if (categoriesToSet) break;
          }
        }
      }

      if (categoriesToSet) {
        dispatch(setCategories(categoriesToSet));
      }
    }
  }, [categoriesData, dispatch]);

  return {
    categories,
    isLoading: apiLoading,
    error: apiError,
    refetch,
    hasCategories: categories.length > 0,
  };
};

export default useCategory;
