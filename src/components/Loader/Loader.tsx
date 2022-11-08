import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div style={{ textAlign: 'center', fontSize: '1.75rem' }}>Please wait while we load the quiz!</div>
    </div>
  );
}
