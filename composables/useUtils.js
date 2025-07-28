/**
 * Utility composable with common helper functions
 */
export function useUtils() {
  /**
     * Throttle function execution
     */
  const throttle = (func, delay) => {
    let timeoutId
    let lastExecTime = 0

    return function (...args) {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(this, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }

  /**
     * Debounce function execution
     */
  const debounce = (func, delay) => {
    let timeoutId

    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  }

  /**
     * Clamp a value between min and max
     */
  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max)
  }

  /**
     * Linear interpolation between two values
     */
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor
  }

  return {
    throttle,
    debounce,
    clamp,
    lerp
  }
}
