import styles from './item-Title.module.scss';

export const ItemTitle = ({ children }: { children: string }) => <h4 className={styles.itemTitle}>{children}</h4>;
