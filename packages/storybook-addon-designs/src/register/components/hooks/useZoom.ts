import { useCallback, useEffect, useState, DependencyList } from "react";

type UseZoom = (
  initialValue: number,
  deps: DependencyList
) => {
  /**
   * Current scale factor.
   * 0.0 < n < Infinity
   */
  scale: number;

  /**
   * Zoom in
   */
  zoomIn(): void;

  /**
   * Zoom out
   */
  zoomOut(): void;

  /**
   * Reset scale factor to 1.
   */
  resetZoom(): void;
};

export const useZoom: UseZoom = (initialValue, deps) => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    setScale(initialValue);
  }, deps);

  const zoomIn = useCallback(() => {
    setScale((prevScale) => prevScale + 0.1);
  }, [setScale]);

  const zoomOut = useCallback(() => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1));
  }, [setScale]);

  const resetZoom = useCallback(() => {
    setScale(1);
  }, [setScale]);

  return { scale, zoomIn, zoomOut, resetZoom };
};
