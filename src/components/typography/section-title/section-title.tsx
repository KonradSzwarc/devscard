import styles from './section-title.module.scss';

export const SectionTitle = ({ children }: { children: string }) => <h2 className={styles.sectionTitle}>{children}</h2>;
