import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './App.css';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import About from './About/About';
import Tech from './Tech/Tech';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubIconUrl: 'https://image.flaticon.com/icons/svg/25/25231.svg',
      linkedinIconUrl: 'https://image.flaticon.com/icons/svg/174/174857.svg',
      pages: ['HOME', <Projects />, <Tech />, <About />],
      pageSelected: 0,
      ...props,
    };
  }

  render() {
    const { pages, pageSelected } = this.state;
    return (
      <div className={styles.rootComponent}>
        {!(pages[pageSelected] === 'HOME') ? (
          pages[pageSelected]
        ) : (
          <div className={styles.title}>
            Hello,
            <br />
            {"I'm John"}
            <br />
            and I build
            <br />
            web apps.
          </div>
        )}
        <div className={styles.nav}>
          <ul>
            <li>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => {
                  this.setState({ pageSelected: 0 });
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => {
                  this.setState({ pageSelected: 1 });
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => {
                  this.setState({ pageSelected: 2 });
                }}
              >
                Tech
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => {
                  this.setState({ pageSelected: 3 });
                }}
              >
                About Me
              </button>
            </li>
          </ul>
        </div>
        <Footer {...this.state} />
      </div>
    );
  }
}

// App.propTypes = {};

export default App;
