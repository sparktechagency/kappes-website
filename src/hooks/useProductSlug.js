import { useMemo } from "react";

// Slug field order based on the backend's SLUG_FIELD_ORDER
const SLUG_FIELD_ORDER = [
  "categoryId",
  "subCategoryId",
  "color",
  "storage",
  "ram",
  "network_type",
  "operating_system",
  "storage_type",
  "processor_type",
  "processor",
  "graphics_card_type",
  "graphics_card_size",
  "screen_size",
  "resolution",
  "lens_kit",
  "material",
  "size",
  "fabric",
  "weight",
  "dimensions",
  "capacity",
  "options",
];

// Clean up slug value by removing special characters
const cleanSlugValue = (value) => {
  // If value is not a string, convert to string or return empty string
  const stringValue =
    typeof value === "string"
      ? value
      : value && typeof value === "object"
      ? value.code || value.name || value.toString()
      : String(value || "");

  // Special handling for apostrophes and lowercase
  return stringValue
    .toLowerCase()
    .replace(/'/g, "'") // Normalize apostrophes
    .replace(/[^a-z0-9'\s-]/g, "") // Remove non-alphanumeric except apostrophes and hyphens
    .trim();
};

// Helper function to get the first word or value of a string, array, or object
const getFirstWord = (value) => {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value[0] ? cleanSlugValue(value[0]) : "";
  }

  if (typeof value === "object" && value !== null) {
    const firstValue = value.code || value.name || value.toString();
    return cleanSlugValue(firstValue);
  }

  return cleanSlugValue(value);
};

// Generate slug from variant details
export const generateSlug = (categoryName, subCategoryName, variantDetails) => {
  const slugParts = [
    getFirstWord(categoryName),
    getFirstWord(subCategoryName),
  ].filter(Boolean);

  // Specific order for slug generation based on the backend example
  const slugOrder = [
    "color",
    "size",
    "storage",
    "ram",
    // Add other fields as needed
  ];

  // Generate slug based on specific order
  slugOrder.forEach((field) => {
    if (variantDetails[field]) {
      const value = variantDetails[field];
      let cleanValue;

      // Special handling for color to preserve hex code
      if (field === "color" && typeof value === "object") {
        cleanValue = value.code
          ? value.code.replace("#", "").toLowerCase()
          : "";
      } else {
        cleanValue = getFirstWord(value);
      }

      console.log(`Slug Generation - Field: ${field}`, {
        originalValue: value,
        cleanValue: cleanValue,
      });

      if (cleanValue) {
        slugParts.push(cleanValue);
      }
    }
  });

  const finalSlug = slugParts.join("-");

  console.log("Final Slug Generation:", {
    categoryName,
    subCategoryName,
    variantDetails,
    slugParts,
    finalSlug,
  });

  return finalSlug;
};

// Hook to manage product slug validation and generation
export const useProductSlug = (productDetails, selectedVariant) => {
  // Generate slug details from all variants
  const slugDetails = useMemo(() => {
    if (!productDetails?.product_variant_Details) return "";

    // If multiple variants, generate a representative slug
    const firstVariant = productDetails.product_variant_Details[0];

    const categoryName = productDetails.categoryId?.name || "";
    const subCategoryName = productDetails.subcategoryId?.name || "";

    const generatedSlug = generateSlug(
      categoryName,
      subCategoryName,
      firstVariant.variantId
    );

    console.log("Slug Details:", {
      categoryName,
      subCategoryName,
      firstVariant: firstVariant.variantId,
      generatedSlug,
      actualSlug: firstVariant.variantId.slug,
    });

    return generatedSlug;
  }, [productDetails]);

  // Validate if the generated slug matches the backend slug
  const isValidVariantSlug = useMemo(() => {
    if (!selectedVariant || !productDetails) return true;

    const categoryName = productDetails.categoryId?.name || "";
    const subCategoryName = productDetails.subcategoryId?.name || "";

    const generatedSlug = generateSlug(
      categoryName,
      subCategoryName,
      selectedVariant.variantId
    );

    const isValid = selectedVariant.variantId.slug === generatedSlug;

    console.log("Variant Slug Validation:", {
      categoryName,
      subCategoryName,
      variantDetails: selectedVariant.variantId,
      generatedSlug,
      actualSlug: selectedVariant.variantId.slug,
      isValid,
    });

    return isValid;
  }, [
    productDetails,
    selectedVariant?.variantId?.color?.code,
    selectedVariant?.variantId?.size,
    selectedVariant?.variantId?.storage,
    selectedVariant?.variantId?.ram,
  ]);

  // Check if a specific variant is available
  const isVariantAvailable = useMemo(() => {
    if (!selectedVariant) return false;

    // Check if the variant has stock
    const variantStock = selectedVariant.variantQuantity || 0;
    const isAvailable = variantStock > 0;

    console.log("Variant Availability:", {
      variantStock,
      isAvailable,
    });

    return isAvailable;
  }, [selectedVariant]);

  return {
    slugDetails,
    isValidVariantSlug,
    isVariantAvailable,
    generateSlug,
  };
};

export default useProductSlug;
