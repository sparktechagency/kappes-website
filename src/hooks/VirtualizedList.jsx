"use client";
import { useState, useEffect, useRef } from "react";

/**
 * A hook that virtualizes a list of items for efficient rendering
 * @param {Array} items - The complete list of items to virtualize
 * @param {number} itemHeight - The fixed height of each item
 * @param {number} overscan - Number of extra items to render above and below the visible window
 * @param {number} columnCount - Number of columns in the grid layout (default: 1)
 * @returns {Object} - The virtualized list properties and methods
 */
export function useVirtualizedList(
  items = [],
  itemHeight = 100,
  overscan = 3,
  columnCount = 1
) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [totalHeight, setTotalHeight] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef(null);

  // Calculate row height based on item height
  const rowHeight = itemHeight;

  // Calculate total rows needed based on item count and column count
  const totalRows = Math.ceil(items.length / columnCount);

  useEffect(() => {
    // Update total height
    setTotalHeight(totalRows * rowHeight);
  }, [items.length, rowHeight, totalRows]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateVisibleItems = () => {
      const containerHeight =
        containerRef.current?.clientHeight || window.innerHeight;
      const scrollTop = containerRef.current?.scrollTop || window.scrollY;

      // Calculate visible range
      const visibleStart = Math.floor(scrollTop / rowHeight);
      const visibleEnd = Math.ceil((scrollTop + containerHeight) / rowHeight);

      // Apply overscan
      const start = Math.max(0, visibleStart - overscan);
      const end = Math.min(totalRows, visibleEnd + overscan);

      // Calculate items range
      const itemStart = start * columnCount;
      const itemEnd = Math.min(items.length, end * columnCount);

      // Update start index and offset
      setStartIndex(start);
      setOffsetY(start * rowHeight);

      // Update visible items
      setVisibleItems(items.slice(itemStart, itemEnd));
    };

    // Initial update
    updateVisibleItems();

    // Add scroll listener
    const container = containerRef.current;
    const handleScroll = () => {
      requestAnimationFrame(updateVisibleItems);
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items, rowHeight, overscan, totalRows, columnCount]);

  return {
    containerRef,
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    columnCount,
  };
}

export default useVirtualizedList;
