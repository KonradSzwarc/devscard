import styles from './main-title.module.scss';

export const MainTitle = ({ children }: { children: string }) => <h1 className={styles.mainTitle}>{children}</h1>;
