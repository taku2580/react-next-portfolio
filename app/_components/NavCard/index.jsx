import Link from "next/link"
import styles from "./index.module.css"

export default function NavCard({ href, title, description }) {
    return (
        <Link href={href} className={styles.card}>
            <div className={styles.inner}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    )
}