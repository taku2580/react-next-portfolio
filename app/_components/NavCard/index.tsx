import Link from "next/link";
import styles from "./index.module.css";
import HoverSwapLink from "../HoverSwapLink";

export default function NavCard({
  href,
  title,
  hoverTitle,
  description,
}: {
  href: string;
  title: string;
  hoverTitle: string;
  description: string;
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.inner}>
        <HoverSwapLink
          href={href}
          label={title}
          hoverLabel={hoverTitle}
          className={styles.title}
          disableLink
        />
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
