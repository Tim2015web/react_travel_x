import styles from './SocialBar.module.scss';

import facebookIcon from '../../../assets/socials/facebook.svg';
import twitterIcon from '../../../assets/socials/twitter.svg';
import instagramIcon from '../../../assets/socials/instagram.svg';

export function SocialBar() {
  return (
    <div className={styles.socialBar}>
      <a href="#!"><img src={facebookIcon} alt="Facebook icon" /></a>
      <a href="#!"><img src={twitterIcon} alt="Twitter icon" /></a>
      <a href="#!"><img src={instagramIcon} alt="Instagram icon" /></a>
    </div>
  );
};