import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} My Blog. All rights reserved.
          </p>
          <p className={styles.credit}>
            Built with Next.js
          </p>
        </div>

    </footer>
  )
}

export default Footer
