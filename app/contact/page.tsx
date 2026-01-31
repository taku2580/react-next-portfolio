import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                ご質問、ご相談は下記フォームよりお問い合わせください。
            </p>

            <div className={styles.formArea}>
                <ContactForm />
            </div>
        </div>
    );
}