/**
 * Navigation composable for scroll detection and navbar behavior
 */
export function useNavigation() {
  const SCROLL_THRESHOLD = 100
  const THROTTLE_DELAY = 100

  const maximumScrollPosition = ref(0)
  const isScrollingUp = ref(true)
  const lastScrollTime = ref(Date.now())
  const loaded = ref(false)

  const scrollDetector = () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > maximumScrollPosition.value + SCROLL_THRESHOLD) {
      if (isScrollingUp.value) {
        isScrollingUp.value = false
      }
      maximumScrollPosition.value = currentScrollPosition
    } else if (currentScrollPosition < maximumScrollPosition.value - SCROLL_THRESHOLD) {
      if (!isScrollingUp.value) {
        isScrollingUp.value = true
      }
      maximumScrollPosition.value = currentScrollPosition
    }
  }

  const scrollHandler = () => {
    const now = Date.now()
    if (now - lastScrollTime.value > THROTTLE_DELAY) {
      scrollDetector()
      lastScrollTime.value = now
    }
  }

  const setupScrollListener = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollHandler, { passive: true })
    }
  }

  const cleanupScrollListener = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', scrollHandler)
    }
  }

  const setLoaded = (delay = 2000) => {
    setTimeout(() => {
      loaded.value = true
    }, delay)
  }

  return {
    isScrollingUp: readonly(isScrollingUp),
    loaded: readonly(loaded),
    setupScrollListener,
    cleanupScrollListener,
    setLoaded
  }
}
