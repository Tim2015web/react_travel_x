import styles from './ControlsBar.module.scss';

export function ControlsBar() {
  return (
    <div className={styles.controlsBar}>
      <div className={styles.controlsBar__arrows}>
        <button id='slidePrev' />
        <button id='slideNext' />
      </div>
      <div id='slidePaginat' className={styles.controlsBar__numbers}></div>
    </div>
  );
};