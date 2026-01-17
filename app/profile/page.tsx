import { getProfileList } from "@/app/_libs/microcms";
import { PROFILE_LIST_LIMIT } from "@/app/constants";
import styles from "./page.module.css";

export const revalidate = 60;

const NAME = "中川 拓大";
const BIRTHDAY = "8/18";

type Props = {
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getProfileList({
    limit: PROFILE_LIST_LIMIT,
    draftKey: searchParams.dk,
  });

  if (data.contents.length === 0) {
    return <p className={styles.empty}>プロフィールが登録されていません</p>;
  }

  const profile = data.contents[0];

  const hobbies = profile.hobbies?.map((x: any) => x.item) ?? [];
  const studying = profile.studying?.map((x: any) => x.item) ?? [];
  const certifications = profile.certifications?.map((x: any) => x.item) ?? [];

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div className={styles.header}>
          <h2 className={styles.name}>{NAME}</h2>
          <p className={styles.meta}>
            <span className={styles.metaLabel}>Birthday</span>
            <span className={styles.metaValue}>{BIRTHDAY}</span>
          </p>
        </div>

        <div className={styles.bioBox}>
          <h3 className={styles.sectionTitle}>Bio</h3>
          <p className={styles.bio}>{profile.bio}</p>
        </div>
      </section>

      <section className={styles.grid} aria-label="プロフィール詳細">
        <div className={styles.card}>
          <h3 className={styles.sectionTitle}>Hobbies</h3>
          <ul className={styles.tags}>
            {hobbies.map((t: string, i: number) => (
              <li key={`${t}-${i}`} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h3 className={styles.sectionTitle}>Studying</h3>
          <ul className={styles.tags}>
            {studying.map((t: string, i: number) => (
              <li key={`${t}-${i}`} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h3 className={styles.sectionTitle}>Certifications</h3>
          <ul className={styles.list}>
            {certifications.map((t: string, i: number) => (
              <li key={`${t}-${i}`} className={styles.listItem}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
