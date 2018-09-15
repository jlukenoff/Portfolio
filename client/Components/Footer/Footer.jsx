import React from 'react';
import styles from './Footer.css';
import PropTypes from 'prop-types';


const Footer = ({ githubIconUrl, linkedinIconUrl }) => (
  <div className={styles.footer}>
    <div className={styles.footerLink}>
      <a href="http://github.com/jlukenoff">
        <img src={githubIconUrl} alt="github" className={styles.footerIcon} />
      </a>
    </div>
    <div className={styles.footerLink}>
      <a href="http://linkedin.com/in/jlukenoff">
        <img src={linkedinIconUrl} alt="linkedIn" className={styles.footerIcon} />
      </a>
    </div>
  </div>
);

Footer.propTypes = {
};

export default Footer;
