import styles from './MobileNav.module.scss';

export function MobileNav({ closeMobileNav, isMobileNavOpen }) {

  const overlayClasses =
    `${styles.mobileNavOverlay} ${isMobileNavOpen ? styles.mobileNavOverlayOpen : ''}`;
  const mobileNavClasses =
    `${styles.mobileNav} ${isMobileNavOpen ? styles.mobileNavOpen : ''}`;

  return (
    <>
      <div className={overlayClasses} />

      <nav className={mobileNavClasses}>
        <button onClick={closeMobileNav} />
        <ul>
          <li><a href="#!">Destinations</a></li>
          <li><a href="#!">Activities</a></li>
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};
