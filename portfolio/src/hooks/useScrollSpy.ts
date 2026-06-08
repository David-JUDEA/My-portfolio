import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return active
}
