import type { ReactNode } from 'react';
import styles from './section-card.module.scss';

export const SectionCard = ({ children }: { children: ReactNode }) => (
  <div className={styles.sectionCard}>{children}</div>
);
