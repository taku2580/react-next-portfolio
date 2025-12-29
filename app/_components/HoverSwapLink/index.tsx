"use client";

import { useState } from "react";
import clsx from "classnames";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  hoverLavel?: string;
  hoverLabel?: string
  className?: string;
  ariaLabel?: string;
};

export default function HoverSwapLink({
  href,
  label,
  hoverLavel,
  hoverLabel,
  className,
  ariaLabel,
}: Props) {
    const [active, setActive] = useState(false);
    const hoverText = hoverLabel ?? hoverLavel ?? "";

  return (
    <Link
      href={href}
      className={clsx(styles.link, className)}
      aria-label={ariaLabel ?? label}
      data-active={active ? "true" : "false"}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <span className={styles.text}>{label}</span>
      <span className={styles.hoverText} aria-hidden="true">
        {hoverText}
      </span>
    </Link>
  );
}
