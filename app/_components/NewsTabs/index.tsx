"use client";

import Link  from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';

type Tab = {
    label: string;
    href: string;
    isActive: (pathname: string) => boolean
};

const tabs: Tab[] = [
    {
        label: "All",
        href: "/news",
        isActive: (pathname) =>
            pathname === "/news" ||
            pathname.startsWith("/news/p/"),
    },
    {
        label: "Blog",
        href: "/news/category/blog",
        isActive: (pathname) => pathname.startsWith("/news/category/blog")
    },
    {
        label: "Works",
        href: "/news/category/works",
        isActive: (pathname) => pathname.startsWith("/news/category/works")
    },
];

export default function NewsTabs() {
    const pathname = usePathname();
    const isSearch = pathname === "/news/search" || pathname.startsWith("/news/search/");

    return (
        <nav className={styles.tabs} aria-label="News tabs">
            {tabs.map((tab) => {
                const active = !isSearch && tab.isActive(pathname);

                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className={`${styles.tab} ${active ? styles.active : ""}`}
                        aria-current={active ? "page" : undefined}
                    >
                        {tab.label}
                    </Link>
                )
            })}
        </nav>
    )
}