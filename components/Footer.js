import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with{' '}
        <img
          src="/netliheart.svg"
          alt="Netlify Logo"
          width={20}
          height={16}
          className={styles.logo}
        />{' '}
        for you
      </footer>
    </>
  )
}
