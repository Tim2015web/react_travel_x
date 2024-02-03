import styles from './Slide.module.scss';

import mapIcon from '../../../assets/controls/mapMarker.webp';

export function Slide({ slideContent }) {
  console.log();
  return (
    <div
      className={styles.slide}
      style={{
        '--slideBg': `url('${slideContent[4]}')`,
        '--titleBg': `${slideContent[5]}`
      }}>

      <div className={styles.slide__title}>
        <p data-swiper-parallax-opacity="0" data-swiper-parallax="150%">EXPLORE</p>
        <h1 data-swiper-parallax="-100%"><span>{slideContent[0]}</span></h1>
      </div>

      <div className={styles.slide__location} data-swiper-parallax="-500">
        {[1, 2, 3].map(index => (
          <a href="#!" key={index} className={styles.slide__locationItem}>
            <img src={mapIcon} alt="Map marker" />
            <div>
              <p>{slideContent[index]}</p>
              <span>Plan a trip</span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};