import styles from './Header.module.scss';
import { useState } from 'react';

import { Slider } from './Slider';
import { NavBar } from './navBar/NavBar';
import { SocialBar } from './socialBar/SocialBar';
import { SeeMoreBar } from './seeMoreBar/SeeMoreBar';
import { ScrollBar } from './scrollBar/ScrollBar';
import { ControlsBar } from './controlsBar/ControlsBar';
import { MobileNav } from './mobileNav/MobileNav';

export function Header() {
  // Хук для отображения мобильного меню
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  document.body.classList.toggle('no-scroll', isMobileNavOpen);

  return (
    <div className={styles.header}>
      <Slider />
      <div className={styles.header__wrapper}>
        <NavBar openMobileNav={openMobileNav} />
        <SocialBar />
        <SeeMoreBar />
        <ScrollBar />
        <ControlsBar />
      </div>
      <MobileNav closeMobileNav={closeMobileNav} isMobileNavOpen={isMobileNavOpen} />
    </div>
  );
};