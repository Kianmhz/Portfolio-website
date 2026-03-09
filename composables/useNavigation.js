/**
 * Navigation composable for scroll detection and navbar behaviour using VueUse.
 */
export function useNavigation() {
  const SCROLL_THRESHOLD = 100

  const maximumScrollPosition = ref(0)
  const isScrollingUp = ref(true)
  const loaded = ref(false)

  const { y: scrollY } = useWindowScroll()

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

  const setLoaded = (delay = 2000) => {
    setTimeout(() => {
      loaded.value = true
    }, delay)
  }

  return {
    isScrollingUp,
    loaded,
    setLoaded,
  }
}
