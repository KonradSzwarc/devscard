import styles from './section-subtitle.module.scss';

export const SectionSubtitle = ({ children }: { children: string }) => (
  <h3 className={styles.sectionSubtitle}>{children}</h3>
);
