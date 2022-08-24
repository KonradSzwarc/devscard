import styles from './content.module.scss';

export const Content = ({ children }: { children: string }) => <p className={styles.content}>{children}</p>;
