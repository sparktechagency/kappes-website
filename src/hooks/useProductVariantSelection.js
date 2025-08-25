import { useState, useMemo, useCallback } from "react";
import {
  findBestMatchingVariant,
  getAvailableVariantSpecs,
  getAllProductImages,
  getProductPricing,
  getStockStatus,
} from "@/utils/productUtils";

export const useProductVariantSelection = (productDetails) => {
  // State for variant specifications
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Initialize variant selection when product details change
  const initializeVariantSelection = useCallback(() => {
    if (productDetails?.product_variant_Details?.length > 0) {
      const firstVariant = productDetails.product_variant_Details[0];

      // Reset all selections to the first variant
      setSelectedVariant(firstVariant);
      setMainImage(0);

      // Set initial selections from first variant
      const variantId = firstVariant.variantId;

      // Color
      if (variantId.color) {
        setSelectedColor(variantId.color.code.replace("#", ""));
      }

      // Storage
      if (variantId.storage) {
        setSelectedStorage(variantId.storage);
      }

      // RAM
      if (variantId.ram) {
        setSelectedRam(variantId.ram);
      }

      // Size
      if (variantId.size) {
        setSelectedSize(variantId.size);
      }
    }
  }, [productDetails]);

  // Find matching variant based on current selections
  const findMatchingVariant = useCallback(() => {
    if (!productDetails?.product_variant_Details) return null;

    const specs = {
      color: selectedColor,
      storage: selectedStorage,
      ram: selectedRam,
      size: selectedSize,
    };

    // Remove undefined/empty specs
    const filteredSpecs = Object.fromEntries(
      Object.entries(specs).filter(([_, v]) => v != null && v !== "")
    );

    return findBestMatchingVariant(productDetails, filteredSpecs);
  }, [
    productDetails,
    selectedColor,
    selectedStorage,
    selectedRam,
    selectedSize,
  ]);

  // Update selected variant when specifications change
  const updateSelectedVariant = useCallback(() => {
    const matchingVariant = findMatchingVariant();

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
      setMainImage(0); // Reset to first image when variant changes
    }
  }, [findMatchingVariant]);

  // Available variant specifications
  const availableVariants = useMemo(() => {
    if (!productDetails?.product_variant_Details) return {};
    return getAvailableVariantSpecs(productDetails);
  }, [productDetails]);

  // Available sizes for selected color
  const availableSizesForColor = useMemo(() => {
    if (!productDetails?.product_variant_Details || !selectedColor) return [];

    return productDetails.product_variant_Details
      .filter(
        (variant) => variant.variantId.color?.code === `#${selectedColor}`
      )
      .map((variant) => variant.variantId.size)
      .filter(Boolean);
  }, [productDetails, selectedColor]);

  // Update size when color changes
  const updateSizeForColor = useCallback(() => {
    if (selectedColor && availableSizesForColor.length > 0) {
      // If current size is not available for this color, reset to first available size
      if (!availableSizesForColor.includes(selectedSize)) {
        setSelectedSize(availableSizesForColor[0]);
      }
    }
  }, [selectedColor, selectedSize, availableSizesForColor]);

  // Derived product information
  const productImages = useMemo(
    () => getAllProductImages(productDetails, selectedVariant),
    [productDetails, selectedVariant]
  );

  const pricing = useMemo(
    () => getProductPricing(productDetails, selectedVariant),
    [productDetails, selectedVariant]
  );

  const stockStatus = useMemo(
    () => getStockStatus(productDetails, selectedVariant),
    [productDetails, selectedVariant]
  );

  return {
    // State setters
    setSelectedColor,
    setSelectedStorage,
    setSelectedRam,
    setSelectedSize,
    setMainImage,
    setQuantity,

    // State values
    selectedColor,
    selectedStorage,
    selectedRam,
    selectedSize,
    selectedVariant,
    mainImage,
    quantity,

    // Derived values
    availableVariants,
    availableSizesForColor,
    productImages,
    pricing,
    stockStatus,

    // Methods
    initializeVariantSelection,
    updateSelectedVariant,
    updateSizeForColor,
    findMatchingVariant,
  };
};

export default useProductVariantSelection;
