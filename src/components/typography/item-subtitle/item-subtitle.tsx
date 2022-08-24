import styles from './item-subtitle.module.scss';

export const ItemSubtitle = ({ children }: { children: string }) => <p className={styles.itemSubtitle}>{children}</p>;
