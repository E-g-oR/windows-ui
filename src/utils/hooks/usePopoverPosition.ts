import { RefObject, useCallback, useEffect, useState } from "react";

export const usePopoverPosition = (
  elementRef: RefObject<HTMLDivElement>,
  parentRef: RefObject<HTMLDivElement>
) => {
  const [isCrossingBottom, setIsCrossingBottom] = useState(false);
  const [isCrossingLeft, setIsCrossingLeft] = useState(false);
  const [isCrossingRight, setIsCrossingRight] = useState(false);

  const checkWindowBorders = useCallback(() => {
    if (elementRef.current && parentRef.current) {
      const elementRect = elementRef.current.getBoundingClientRect();
      const parentRect = parentRef.current?.getBoundingClientRect();
      const { innerWidth, innerHeight } = window;

      // Check if the element is crossing any of the window borders
      if (parentRect.bottom + elementRect.height > innerHeight) {
        setIsCrossingBottom(true);
      } else {
        setIsCrossingBottom(false);
      }
      // Check if the element is crossing any of the window borders
      if (elementRect.left < 0) {
        setIsCrossingLeft(true);
      } else {
        setIsCrossingLeft(false);
      }
      // Check if the element is crossing any of the window borders
      if (elementRect.right > innerWidth) {
        setIsCrossingRight(true);
      } else {
        setIsCrossingRight(false);
      }
    }
  }, [
    elementRef,
    parentRef,
    setIsCrossingBottom,
    setIsCrossingLeft,
    setIsCrossingRight,
  ]);

  useEffect(() => {
    // Attach the event listener to the 'resize' event
    window.addEventListener("resize", checkWindowBorders);

    // Call the checkWindowBorders function to initialize the value
    checkWindowBorders();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkWindowBorders);
    };
  }, [checkWindowBorders]);

  return {
    isCrossingBottom,
    isCrossingLeft,
    isCrossingRight,
    checkWindowBorders,
  };
};
