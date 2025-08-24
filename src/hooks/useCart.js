import {
  useGetMyCartQuery,
  useUpdateMyCartMutation,
} from "@/redux/cartApi/cartApi";
import { selectCartItems } from "@/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "./useDebounce";
import { useState, useEffect } from "react";

export function useCart() {
  // Get cart from API
  const { data: apiResponse, isLoading, error, refetch } = useGetMyCartQuery();

  // Get cart from local Redux state as backup
  const localCartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // State for tracking quantity changes
  const [quantityChanges, setQuantityChanges] = useState({});

  // Debounce quantity changes
  const debouncedQuantityChanges = useDebounce(quantityChanges, 1000);

  // Update cart mutation
  const [updateCart] = useUpdateMyCartMutation();

  // Debug the data sources
  console.log("API Cart Response:", apiResponse);
  console.log("Local Redux Cart:", localCartItems);

  // Extract and transform cart items from the API response structure
  let cartItems = [];

  if (apiResponse?.success && apiResponse?.data?.items) {
    // Transform the nested structure to match what the UI component expects
    cartItems = apiResponse.data.items.map((item) => {
      return {
        id: item.productId?._id || item.productId?.id,
        name: item.productId?.name || "Product",
        productName: item.productId?.name || "Product",
        productImage: item.productId?.images?.[0] || "/assets/bag.png",
        price: item.variantPrice || 0,
        quantity: item.variantQuantity || 1,
        color: item.variantId?.color?.name,
        // Add any other fields your UI might need
        totalItemPrice: item.totalPrice,
      };
    });
    console.log("Transformed cart items:", cartItems);
  }

  // If API didn't return usable data, fall back to local cart
  if (cartItems.length === 0 && !isLoading && localCartItems.length > 0) {
    cartItems = localCartItems;
    console.log("Using local cart data instead of API data");
  }

  // Handle debounced quantity updates
  useEffect(() => {
    if (Object.keys(debouncedQuantityChanges).length > 0) {
      // Call API to update cart quantities
      const updateData = {
        items: Object.entries(debouncedQuantityChanges).map(
          ([productId, quantity]) => ({
            productId,
            quantity: parseInt(quantity),
          })
        ),
      };

      updateCart({ data: updateData })
        .unwrap()
        .then(() => {
          console.log("Cart updated successfully");
          refetch(); // Refresh cart data
          setQuantityChanges({}); // Clear pending changes
        })
        .catch((error) => {
          console.error("Failed to update cart:", error);
        });
    }
  }, [debouncedQuantityChanges, updateCart, refetch]);

  // Function to update quantity (will be debounced)
  const updateQuantity = (productId, newQuantity) => {
    setQuantityChanges((prev) => ({
      ...prev,
      [productId]: newQuantity,
    }));
  };

  // Calculate total amount safely
  const totalAmount = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0;
        return total + itemPrice * (item.quantity || 1);
      }, 0)
    : 0;

  const quantity = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    : 0;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return {
    cartItems: Array.isArray(cartItems) ? cartItems : [],
    isLoading,
    error,
    totalAmount,
    quantity,
    formatCurrency,
    updateCart,
    updateQuantity,
    refetch,
  };
}
