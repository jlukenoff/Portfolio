import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <div className={styles.rootComponent}>
        <div className={styles.title}>
          Hello,
          <br />
          {'I\'m John'}
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
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
