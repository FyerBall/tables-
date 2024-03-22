import { useEffect, useState, useRef } from "react"

// export function useDebounce<T>(value: T, delay?: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value)
//   const timeoutRef = useRef(null)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedValue(value)
//     }, delay ?? 500)

//     let currentTimeout = timeoutRef.current

//     // Cleanup the previous timeout on re-render, this ensures that the debounce behavior remains consistent
//     return () => {
//       if (currentTimeout) {
//         clearTimeout(currentTimeout)
//       } else {
//         clearTimeout(timer)
//       }
//     }
//   }, [value, delay])

//   return debouncedValue
// }

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  return debouncedCallback
}
