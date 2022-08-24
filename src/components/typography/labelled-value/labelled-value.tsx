import styles from './labelled-value.module.scss';

export const LabelledValue = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.labelledValue}>
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);
