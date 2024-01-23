import styles from './Header.module.scss';
import { NavBar } from './navBar/NavBar';
import { SocialBar } from './socialBar/SocialBar';
import { SeeMoreBar } from './seeMoreBar/SeeMoreBar';
import { ScrollBar } from './scrollBar/ScrollBar';
import { ControlsBar } from './controlsBar/ControlsBar';

export function Header() {
  return (
    <div className={styles.header}>

      {/* Swiper */}
      {/* Slide */}

      <div className={styles.header__wrapper}>
        <NavBar />
        <SocialBar />
        <SeeMoreBar />
        <ScrollBar />
        <ControlsBar />
      </div>

    </div>
  );
};