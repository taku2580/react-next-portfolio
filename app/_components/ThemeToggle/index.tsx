"use client";

import styles from "./index.module.css";
import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getPreferredTheme(): Theme {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches 
    ? "dark" : "light";
}

function readStoredTheme(): Theme | null {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
    return null;
}

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
    const [ theme, setTheme ] = useState<Theme | null>(null);

    useEffect(() => {
        const stored = readStoredTheme();
        const initial = stored ?? getPreferredTheme();
        setTheme(initial);
        applyTheme(initial);
    }, []);

    const isDark = theme === "dark";
    const nextTheme: Theme = isDark ? "light" : "dark";

    const label = useMemo(() =>{
        if (theme === null) return "テーマを切り替える";
        return nextTheme === "dark"
        ? "ダークモードに切り替える"
        : "ライトモードに切り替える"
    }, [nextTheme, theme]);

    const onToggle = () => {
        if (theme === null) return;
        setTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    };

    return (
        <button 
          type="button"
          className={styles.button}
          onClick={onToggle}
          aria-label={label}
          aria-pressed={isDark}
          disabled={theme === null}
          >
            <span className={styles.icon} aria-hidden="true">
                {nextTheme === "dark" ? (
          		  <svg viewBox="0 0 24 24" className={styles.svg}>
					<path
              		  fill="currentColor"
              		  d="M21.64 13a9 9 0 1 1-10.63-10.63 7 7 0 1 0 10.63 10.63Z"
            		/>
          		  </svg>
            	) : (
                  <svg viewBox="0 0 24 24" className={styles.svg}>
                    <path
                      fill="currentColor"
                      d="M12 4.354a7.646 7.646 0 1 0 7.646 7.646A7.655 7.655 0 0 1 12 4.354Z"
                    />
                 </svg>
            	)}
            </span>
            <span className={styles.srOnly}>{label}</span>
          </button>
    );
}