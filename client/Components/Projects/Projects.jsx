import React from 'react';
import styles from './Projects.css';
// import PropTypes from 'prop-types';

const Projects = () => (
  <div className={styles.projects}>
    <ul className={styles.nav}>
      <li>
        <button type="button" className={styles.navButton} onClick={() => {}}>
          Vacation.ly
        </button>
        <button type="button" className={styles.navButton} onClick={() => {}}>
          Shopr
        </button>
        <button type="button" className={styles.navButton} onClick={() => {}}>
          {'W&B Calculation Tool'}
        </button>
      </li>
    </ul>
  </div>
);

// Projects.propTypes = {
// };

export default Projects;
