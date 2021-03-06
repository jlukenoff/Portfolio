import React, { Component } from 'react';
import { Global, css } from '@emotion/core';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Tech from '../Tech/Tech';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import {
  RootContainer,
  Gradient,
  BackgroundImageContainer,
} from '../Styles/Styles';

const App = props => {
  const { path } = useRouteMatch();
  const { location } = props;
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
      <Nav {...props} />
      <Route path={`${path}/`} exact render={() => <Redirect to="/about" />} />
      <Switch location={location}>
        <Route
          path={`${path}/projects`}
          exact
          render={routeProps => <Projects {...props} {...routeProps} />}
        />
        <Route
          path={`${path}/tech`}
          exact
          render={routeProps => <Tech {...props} {...routeProps} />}
        />
        <Route
          path={`${path}/`}
          render={routeProps => <Home {...props} {...routeProps} />}
        />
      </Switch>
      <Footer />
    </RootContainer>
  );
};

// App.propTypes = {
// };

export default App;
