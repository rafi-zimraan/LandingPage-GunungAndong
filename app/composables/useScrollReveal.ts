export const useScrollReveal = () => {
  const visibleElements = ref(new Set<string>())

  const observe = (el: HTMLElement | null, id: string) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleElements.value.add(id)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }

  return { visibleElements, observe }
}
