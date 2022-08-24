import styles from './item-description.module.scss';

export const ItemDescription = ({ children }: { children: string }) => (
  <p className={styles.itemDescription}>{children}</p>
);
