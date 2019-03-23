import { useCallback, useState, DependencyList, MouseEventHandler } from 'react'

export type Point2D = [number, number]

interface PanController {
  onMouseDown: MouseEventHandler
  onMouseMove: MouseEventHandler
  onMouseUp: MouseEventHandler
  onMouseLeave: MouseEventHandler
}

/**
 * Emulate MouseEvent.movementX and MouseEvent.movementY(Candidate Recommendation)
 * Needed due to lack of support in Safari
 */
type UsePan = (
  cb: (movement: Point2D) => any,
  deps: DependencyList
) => PanController

export const usePan: UsePan = (cb, deps) => {
  const [lastPosition, savePosition] = useState<Point2D>([0, 0])
  const [isPanning, setPanState] = useState<boolean>(false)

  const onMouseDown = useCallback<PanController['onMouseDown']>(
    ev => {
      // Ensure to turn on pan mode only for main button down
      if (ev.button !== 0) {
        return
      }

      savePosition([ev.screenX, ev.screenY])
      setPanState(true)
    },
    [setPanState, savePosition]
  )

  const onMouseMove = useCallback<PanController['onMouseMove']>(
    ev => {
      if (!isPanning) {
        return
      }

      const { screenX, screenY } = ev

      savePosition(lastPosition => {
        const movement: Point2D = [
          screenX - lastPosition[0],
          screenY - lastPosition[1]
        ]

        cb(movement)

        return [screenX, screenY]
      })
    },
    [savePosition, isPanning, ...deps]
  )

  const clear = useCallback<PanController['onMouseUp']>(() => {
    savePosition([0, 0])
    setPanState(false)
  }, [setPanState, savePosition])

  return { onMouseDown, onMouseMove, onMouseUp: clear, onMouseLeave: clear }
}
