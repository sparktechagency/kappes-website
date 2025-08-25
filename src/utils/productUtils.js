/**
 * Utility functions for product-related operations
 */

/**
 * Get the display price for a product with variant support
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {Object} - Object with currentPrice and originalPrice
 */
export const getProductPricing = (product, selectedVariant = null) => {
  if (!product) {
    return { currentPrice: 0, originalPrice: 0, hasDiscount: false };
  }

  const basePrice = product.basePrice || 0;
  let variantPrice = basePrice;

  // If a specific variant is selected, use its price
  if (selectedVariant) {
    variantPrice = selectedVariant.variantPrice || basePrice;
  } else if (
    product.product_variant_Details &&
    product.product_variant_Details.length > 0
  ) {
    // Use the first variant's price as reference
    variantPrice = product.product_variant_Details[0].variantPrice || basePrice;
  }

  // If variant price is different from base price, show discount
  if (variantPrice !== basePrice) {
    const higherPrice = Math.max(variantPrice, basePrice);
    const lowerPrice = Math.min(variantPrice, basePrice);

    return {
      currentPrice: lowerPrice,
      originalPrice: higherPrice,
      hasDiscount: true,
      discountPercentage: Math.round(
        ((higherPrice - lowerPrice) / higherPrice) * 100
      ),
    };
  }

  return {
    currentPrice: basePrice,
    originalPrice: basePrice,
    hasDiscount: false,
    discountPercentage: 0,
  };
};

/**
 * Get product image with fallback
 * @param {Object} product - Product object
 * @param {string} fallbackImage - Fallback image URL
 * @returns {string} - Image URL
 */
export const getProductImage = (
  product,
  fallbackImage = "/assets/recomendationProduct/bag.png"
) => {
  if (!product || !product.images || product.images.length === 0) {
    return fallbackImage;
  }
  return product.images[0] || fallbackImage;
};

/**
 * Get all available images for a product (including variant images)
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {Array} - Array of image URLs
 */
export const getAllProductImages = (product, selectedVariant = null) => {
  const images = [];

  // Add variant-specific images first (if available)
  if (
    selectedVariant?.variantId?.images &&
    selectedVariant.variantId.images.length > 0
  ) {
    images.push(...selectedVariant.variantId.images);
  }

  // Add product images if variant images are empty
  if (images.length === 0 && product?.images && product.images.length > 0) {
    images.push(...product.images);
  }

  // If no images found, use a fallback
  if (images.length === 0) {
    images.push("/assets/placeholder.png");
  }

  // Remove duplicates
  return [...new Set(images)];
};

/**
 * Format rating display
 * @param {number} rating - Rating value
 * @param {number} totalReviews - Total number of reviews
 * @returns {Object} - Formatted rating info
 */
export const formatRating = (rating, totalReviews) => {
  return {
    displayRating: rating > 0 ? rating.toFixed(1) : "0.0",
    hasRating: rating > 0,
    reviewText:
      totalReviews > 0
        ? `(${totalReviews} review${totalReviews !== 1 ? "s" : ""})`
        : "No reviews",
  };
};

/**
 * Check if product is in stock
 * @param {Object} product - Product object
 * @returns {boolean} - Whether product is in stock
 */
export const isProductInStock = (product) => {
  if (!product) return false;

  const totalStock = product.totalStock || 0;
  const variantStock =
    product.product_variant_Details?.reduce((total, variant) => {
      return total + (variant.variantQuantity || 0);
    }, 0) || 0;

  return totalStock > 0 || variantStock > 0;
};

/**
 * Get stock status text
 * @param {Object} product - Product object
 * @returns {string} - Stock status text
 */
export const getStockStatus = (product) => {
  if (!isProductInStock(product)) {
    return "Out of Stock";
  }

  const totalStock = product.totalStock || 0;
  if (totalStock < 10) {
    return `Only ${totalStock} left`;
  }

  return "In Stock";
};

/**
 * Find the best matching variant based on multiple specifications
 * @param {Object} product - Product object
 * @param {Object} selectedSpecs - Selected specifications
 * @returns {Object|null} - Matching variant or null
 */
export const findBestMatchingVariant = (product, selectedSpecs) => {
  if (!product?.product_variant_Details) return null;

  // Prioritize exact match first
  const exactMatch = product.product_variant_Details.find((variant) => {
    const variantId = variant.variantId;
    return Object.entries(selectedSpecs).every(([key, value]) => {
      // Special handling for color to match hex code
      if (key === "color") {
        return variantId.color?.code === `#${value}`;
      }
      // For other specs, do a direct comparison
      return variantId[key] === value;
    });
  });

  if (exactMatch) return exactMatch;

  // If no exact match, try partial matching
  const partialMatches = product.product_variant_Details.filter((variant) => {
    const variantId = variant.variantId;
    return Object.entries(selectedSpecs).some(([key, value]) => {
      // Special handling for color to match hex code
      if (key === "color") {
        return variantId.color?.code === `#${value}`;
      }
      // For other specs, do a direct comparison
      return variantId[key] === value;
    });
  });

  // If multiple partial matches, prefer the first one
  return partialMatches.length > 0 ? partialMatches[0] : null;
};

/**
 * Get available variant specifications
 * @param {Object} product - Product object
 * @returns {Object} - Available variant specifications
 */
export const getAvailableVariantSpecs = (product) => {
  if (!product?.product_variant_Details) return {};

  const availableSpecs = {};

  // Collect unique specifications from all variants
  product.product_variant_Details.forEach((variant) => {
    const variantId = variant.variantId;

    // Dynamically collect specs from variant
    Object.keys(variantId).forEach((key) => {
      // Skip certain keys that are not specifications
      const skipKeys = [
        "_id",
        "categoryId",
        "subCategoryId",
        "createdBy",
        "isDeleted",
        "slug",
        "createdAt",
        "updatedAt",
        "__v",
        "id",
        "images",
        "network_type",
      ];

      if (!skipKeys.includes(key)) {
        if (!availableSpecs[key]) {
          availableSpecs[key] = [];
        }

        // Handle color as a special case
        const value =
          key === "color"
            ? { name: variantId[key].name, code: variantId[key].code }
            : variantId[key];

        // Add unique values
        if (
          !availableSpecs[key].some((existing) =>
            key === "color" ? existing.code === value.code : existing === value
          )
        ) {
          availableSpecs[key].push(value);
        }
      }
    });
  });

  return availableSpecs;
};

/**
 * Get variant specifications for display
 * @param {Object} variant - Variant object
 * @returns {Object} - Formatted specifications
 */
export const getVariantSpecs = (variant) => {
  if (!variant?.variantId) return {};

  const specs = variant.variantId;
  const extractedSpecs = {};

  // Dynamically extract specifications
  Object.keys(specs).forEach((key) => {
    // Skip certain keys that are not specifications
    const skipKeys = [
      "_id",
      "categoryId",
      "subCategoryId",
      "createdBy",
      "isDeleted",
      "slug",
      "createdAt",
      "updatedAt",
      "__v",
      "id",
      "images",
      "network_type",
    ];

    if (!skipKeys.includes(key)) {
      // Special handling for color
      if (key === "color") {
        extractedSpecs[key] = {
          name: specs[key].name,
          code: specs[key].code,
          displayName: specs[key].name,
        };
      } else {
        // For other specs, use the value directly
        extractedSpecs[key] = specs[key];
      }
    }
  });

  return extractedSpecs;
};
