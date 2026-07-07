export function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return

  const supportsSmoothScroll =
    'scrollBehavior' in document.documentElement.style

  if (supportsSmoothScroll) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '72',
    10,
  )
  const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
  window.scrollTo({ top, behavior: 'auto' })
}
