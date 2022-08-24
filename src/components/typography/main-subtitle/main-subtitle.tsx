import styles from './main-subtitle.module.scss';

export const MainSubtitle = ({ children }: { children: string }) => <h2 className={styles.mainSubtitle}>{children}</h2>;
