import styles from './Slide.module.scss';

import mapIcon from '../../../assets/controls/mapMarker.webp';

export function Slide({ slideContent }) {
  return (
    <div className={styles.slide} >

      <div className={styles.slide__title}>
        <p>EXPLORE</p>
        <h1><span>{slideContent[0]}</span></h1>
      </div>

      <div className={styles.slide__location}>

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