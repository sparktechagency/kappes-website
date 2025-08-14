/**
 * Utility functions for product-related operations
 */

/**
 * Get the display price for a product
 * @param {Object} product - Product object
 * @returns {Object} - Object with currentPrice and originalPrice
 */
export const getProductPricing = (product) => {
  if (!product) {
    return { currentPrice: 0, originalPrice: 0, hasDiscount: false };
  }

  const basePrice = product.basePrice || 0;
  const variantPrice = product.product_variant_Details?.[0]?.variantPrice;

  // If variant price exists and is higher than base price, show discount
  if (variantPrice && variantPrice > basePrice) {
    return {
      currentPrice: basePrice,
      originalPrice: variantPrice,
      hasDiscount: true,
      discountPercentage: Math.round(
        ((variantPrice - basePrice) / variantPrice) * 100
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
