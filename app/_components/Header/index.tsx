import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          Portfolio
        </Link>
        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>
      </div>
      <Menu />
    </header>
  );
}
