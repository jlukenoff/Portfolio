import React, { Component } from 'react';
import { Global, css } from '@emotion/core';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Tech from '../Tech/Tech';
import Footer from '../Footer/Footer';
import {
  RootContainer,
  Gradient,
  BackgroundImageContainer,
} from '../Styles/Styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    const { props, state } = this;
    return (
      <RootContainer>
        <Global
          styles={css`
            body,
            #app {
              min-height: 100%;
              margin: 0;
            }
          `}
        />
        <BackgroundImageContainer />
        <Gradient />
        <Nav {...state} {...props} />
        <Switch>
          <Route
            path="/tech"
            render={routeProps => <Tech {...props} {...routeProps} />}
          />
          <Route
            path="/"
            render={routeProps => <Home {...props} {...routeProps} />}
          />
        </Switch>
        <Footer />
      </RootContainer>
    );
  }
}

// App.propTypes = {
// };

export default App;
