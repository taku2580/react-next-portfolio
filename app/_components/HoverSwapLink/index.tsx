"use client";

import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  hoverLabel?: string;
  className?: string;
  ariaLabel?: string;
  disableLink?: boolean;
  onClick?: () => void;
};

export default function HoverSwapLink({
  href,
  label,
  hoverLabel,
  className,
  ariaLabel,
  disableLink,
  onClick,
}: Props) {
  const classNames = `${styles.link} ${className ? `${className}` : ""}`;

  if (disableLink) {
    return (
      <span className={classNames} aria-label={ariaLabel ?? label}>
        <span className={styles.text}>{label}</span>
        <span className={styles.hoverText} aria-hidden="true">
          {hoverLabel}
        </span>
      </span>
    );
  }

  return (
    <Link href={href} 
    className={classNames} aria-label={ariaLabel ?? label} onClick={onClick}>
      <span className={styles.text}>{label}</span>
      <span className={styles.hoverText} aria-hidden="true">
        {hoverLabel}
      </span>
    </Link>
  );
}
