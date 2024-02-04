import styles from './PreLoader.module.scss';

export function PreLoader({ visible }) {
  return visible ? (<div className={styles.preLoader}><span></span></div>) : null;
};