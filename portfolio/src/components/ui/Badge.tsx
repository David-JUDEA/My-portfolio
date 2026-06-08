import styles from './Badge.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export function Badge({ children, variant = 'default' }: Props) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {children}
    </span>
  )
}
