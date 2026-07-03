type LogoProps = {
  variant?: 'default' | 'white'
  className?: string
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const sizeClass = className || 'h-9'

  if (variant === 'white') {
    return (
      <div
        role="img"
        aria-label="VETCron"
        className={`logo-white-mask w-auto ${sizeClass}`}
      />
    )
  }

  return (
    <img
      src="/vetcron-logo.png"
      alt="VETCron"
      className={`rounded-md ${sizeClass}`}
    />
  )
}
