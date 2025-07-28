/**
 * Navigation composable for scroll detection and navbar behavior
 */
/**
 * Navigation composable for scroll detection and navbar behavior using VueUse
 */
export function useNavigation() {
  const SCROLL_THRESHOLD = 100

  const maximumScrollPosition = ref(0)
  const isScrollingUp = ref(true)
  const loaded = ref(false)

  // Use VueUse reactive scroll position
  const { y: scrollY } = useWindowScroll()

  // Watch scroll position changes reactively
  watch(scrollY, (currentScrollPosition) => {
    if (!import.meta.client) return

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
  })

  // No longer need manual event listeners - VueUse handles this
  const setupScrollListener = () => {
    // VueUse handles scroll tracking automatically
  }

  const cleanupScrollListener = () => {
    // VueUse handles cleanup automatically
  }

  const setLoaded = (delay = 2000) => {
    setTimeout(() => {
      loaded.value = true
    }, delay)
  }

  return {
    isScrollingUp,
    loaded,
    setupScrollListener,
    cleanupScrollListener,
    setLoaded
  }
}
