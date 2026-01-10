"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";
import HoverSwapLink from "../HoverSwapLink";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <HoverSwapLink
              href="/news"
              label="News"
              hoverLabel="ブログ・作品"
              className={styles.link}
              onClick={close}
            />
          </li>
          <li>
            <HoverSwapLink
              href="/profile"
              label="Profile"
              hoverLabel="プロフィール"
              className={styles.link}
              onClick={close}
            />
          </li>
          <li>
            <HoverSwapLink
              href="/contact"
              label="Contact"
              hoverLabel="お問い合わせ"
              className={styles.link}
              onClick={close}
            />
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
