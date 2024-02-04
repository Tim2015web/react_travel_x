import styles from './NavBar.module.scss';

import logoImg from '../../../assets/logotype.webp';

export function NavBar({ openMobileNav }) {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__logotype}>
        <a href="#!"><img src={logoImg} alt="Logotype" /><span>TRAVELx</span></a>
      </div>

      <nav className={styles.navBar__menu}>
        <ul>
          <li><a href="#!">Destinations</a></li>
          <li><a href="#!">Activities</a></li>
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </nav>

      <div className={styles.navBar__burgerBtn}>
        <button onClick={openMobileNav} />
      </div>
    </div>
  );
};