import { useEffect, useState, type ReactNode, type MouseEvent } from 'react'

let listeners: Array<() => void> = []

function getPath() {
  return window.location.pathname
}

function notify() {
  listeners.forEach((l) => l())
}

export function navigate(to: string) {
  window.history.pushState({}, '', to)
  notify()
  window.scrollTo(0, 0)
}

export function usePathname() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onChange = () => setPath(getPath())
    listeners.push(onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      listeners = listeners.filter((l) => l !== onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  return path
}

type LinkProps = {
  to: string
  className?: string
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function Link({ to, className, children, onClick }: LinkProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:')

  if (isExternal) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(to)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
