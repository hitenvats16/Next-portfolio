import { setNavTheme } from '@/components/Navbar'

function intersectionObserverInit(){
  return new IntersectionObserver(
    (elements) => {
      elements.forEach((entry) => {
        const element = entry.target
        if (entry.isIntersecting) {
          const theme: any = element.getAttribute('nav-theme') ?? 'indigo'
          setNavTheme(theme)
        }
      })
    },
    {
      threshold: 0.1,
    }
  )
}

export { intersectionObserverInit }
