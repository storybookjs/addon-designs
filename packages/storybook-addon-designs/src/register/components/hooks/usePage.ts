import { useCallback, useEffect, useState } from 'react'

interface Page {
  current: number
  total: number

  isFirst: boolean
  isLast: boolean

  next(): void
  prev(): void
  jump(page: number): void
  init(total: number): void
}

type UsePage = (initialPage?: number) => Page

export const usePage: UsePage = (initialPage = 1) => {
  const [current, setCurrent] = useState<number>(1)
  const [total, setTotal] = useState<number>(1)

  const init = useCallback<Page['init']>(
    total => {
      setTotal(total)
      setCurrent(total > 0 ? initialPage : 0)
    },
    [initialPage, setTotal, setCurrent]
  )

  const jump = useCallback<Page['jump']>(
    page => {
      setCurrent(page > total ? total : page <= 0 ? 1 : page)
    },
    [total, setCurrent]
  )

  useEffect(() => {
    jump(initialPage)
  }, [initialPage])

  const isFirst = current <= 1
  const isLast = current >= total

  const next = useCallback(() => {
    if (isLast) {
      return
    }

    setCurrent(page => page + 1)
  }, [isLast, setCurrent])

  const prev = useCallback(() => {
    if (isFirst) {
      return
    }

    setCurrent(page => page - 1)
  }, [isFirst, setCurrent])

  return {
    current,
    total,
    isFirst,
    isLast,
    next,
    prev,
    jump,
    init
  }
}
