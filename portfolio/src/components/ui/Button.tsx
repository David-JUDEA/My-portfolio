import styles from './Button.module.css'

interface Props {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  target?: string
  rel?: string
}

export function Button({ children, href, variant = 'primary', onClick, target, rel }: Props) {
  const className = `${styles.btn} ${styles[variant]}`

  if (href) {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
