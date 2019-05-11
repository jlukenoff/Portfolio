import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import {
  RootContainer,
  Gradient,
  BackgroundImageContainer,
  ContentContainer,
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
        <BackgroundImageContainer />
        <Gradient />
        <Nav {...state} {...props} />
        <Switch>
          <Route
            path="/"
            render={routeProps => <Home {...props} {...routeProps} />}
          />
        </Switch>
      </RootContainer>
    );
  }
}

// App.propTypes = {
// };

export default App;
