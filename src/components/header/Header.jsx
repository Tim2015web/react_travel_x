import styles from './Header.module.scss';
import { NavBar } from './navBar/NavBar';
import { SocialBar } from './socialBar/SocialBar';
import { SeeMoreBar } from './seeMoreBar/SeeMoreBar';
import { ScrollBar } from './scrollBar/ScrollBar';
import { ControlsBar } from './controlsBar/ControlsBar';
import { Slide } from './slide/Slide';

// Импорт фонов для слайдов
import slideBg1 from '../../assets/slideBg/01.webp';
import slideBg2 from '../../assets/slideBg/02.webp';
import slideBg3 from '../../assets/slideBg/03.webp';
import slideBg4 from '../../assets/slideBg/04.webp';
import slideBg5 from '../../assets/slideBg/05.webp';

// Данный для контента слайдов
const slideContent = [
  ['Norway', 'Trondheim', 'Geirangerfjord', 'Lofoten', slideBg1],
  ['Austria', 'Vienna', 'Salzburg', 'Innsbruck', slideBg2],
  ['UAE', 'Dubai', 'Abu Dhabi', 'Sharjah', slideBg3],
  ['Thailand', 'Bangkok', 'Phuket', 'Chiang Mai', slideBg4],
  ['Morocco', 'Marrakech', 'Casablanca', 'Fes', slideBg5]
];

export function Header() {
  return (
    <div className={styles.header}>

      {/* Swiper */}
      <Slide slideContent={slideContent[0]} />

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