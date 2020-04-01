import React, { Component, lazy, Suspense } from "react";
import { Global, css } from "@emotion/core";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
// import Tech from "../Tech/Tech";
// import Projects from "../Projects/Projects";

const Tech = lazy(() => import("../Tech/Tech"));
const Projects = lazy(() => import("../Projects/Projects"));
// const Footer = lazy(() => import("../Footer/Footer"));
import {
  RootContainer,
  Gradient,
  BackgroundImageContainer
} from "../Styles/Styles";

const Loading = Comp => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Comp {...props} />
  </Suspense>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    const { props, state } = this;
    const { img: Image } = props;
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
        <Image />
        <Gradient />
        <Nav {...state} {...props} />
        <Switch>
          <Route path="/projects" render={Loading(Projects)} />
          <Route path="/tech" render={Loading(Tech)} />
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
