import styles from './SectionHeader.module.css'

interface Props {
  num: string
  title: string
}

export function SectionHeader({ num, title }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.num}>{num}</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.line} />
    </div>
  )
}
