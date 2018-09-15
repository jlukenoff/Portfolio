import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubIconUrl: 'https://image.flaticon.com/icons/svg/25/25231.svg',
      linkedinIconUrl: 'https://image.flaticon.com/icons/svg/174/174857.svg',
      ...props,
    };
  }

  render() {
    return (
      <div className={styles.rootComponent}>
        <div className={styles.title}>
          Hello,
          <br />
          {'I\'m John,'}
          <br />
          and I build
          <br />
          web apps.
        </div>
        <div className={styles.nav}>
          <ul>
            <li><button type="button" className={styles.navButton}>Projects</button></li>
            <li><button type="button" className={styles.navButton}>Tech</button></li>
            <li><button type="button" className={styles.navButton}>About Me</button></li>
          </ul>
        </div>
        <Footer {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
