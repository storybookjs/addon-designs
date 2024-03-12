import {
  useCallback,
  useState,
  DependencyList,
  MouseEventHandler,
  TouchEventHandler,
} from "react";

export type Point2D = [number, number];

interface PanController {
  onMouseDown: MouseEventHandler;
  onMouseMove: MouseEventHandler;
  onMouseUp: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
  onTouchStart: TouchEventHandler;
  onTouchMove: TouchEventHandler;
  onTouchCancel: TouchEventHandler;
  onTouchEnd: TouchEventHandler;
}

/**
 * Emulate MouseEvent.movementX and MouseEvent.movementY(Candidate Recommendation)
 * Needed due to lack of support in Safari
 */
type UsePan = (
  cb: (movement: Point2D) => any,
  deps: DependencyList,
) => PanController;

export const usePan: UsePan = (cb, deps) => {
  const [lastPosition, savePosition] = useState<Point2D>([0, 0]);
  const [isPanning, setPanState] = useState<boolean>(false);

  const onMouseDown = useCallback<PanController["onMouseDown"]>(
    (ev) => {
      // Ensure to turn on pan mode only for main button down
      if (ev.button !== 0) {
        return;
      }

      savePosition([ev.screenX, ev.screenY]);
      setPanState(true);
    },
    [setPanState, savePosition],
  );

  const onTouchStart = useCallback<PanController["onTouchStart"]>(
    (ev) => {
      const touch = ev.touches[0];

      savePosition([touch.screenX, touch.screenY]);
      setPanState(true);
    },
    [setPanState, savePosition],
  );

  const move = useCallback(
    (p: Point2D) => {
      if (!isPanning) {
        return;
      }

      savePosition((prev) => {
        cb([p[0] - prev[0], p[1] - prev[1]]);

        return p;
      });
    },
    [savePosition, isPanning, ...deps],
  );

  const onMouseMove = useCallback<PanController["onMouseMove"]>(
    (ev) => {
      const { screenX, screenY } = ev;

      move([screenX, screenY]);
    },
    [move],
  );

  const onTouchMove = useCallback<PanController["onTouchMove"]>(
    (ev) => {
      const { screenX, screenY } = ev.touches[0];

      move([screenX, screenY]);
    },
    [savePosition, isPanning, ...deps],
  );

  const clear = useCallback(() => {
    savePosition([0, 0]);
    setPanState(false);
  }, [setPanState, savePosition]);

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchStart,
    onTouchMove,
    onTouchCancel: clear,
    onTouchEnd: clear,
  };
};
