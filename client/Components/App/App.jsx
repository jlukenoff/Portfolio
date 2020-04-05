/** @jsx jsx */ import { Global, css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import {
  AppBar,
  Slide,
  Typography,
  Toolbar,
  useScrollTrigger,
  Container,
  makeStyles,
  ThemeProvider,
  Tab,
  Tabs,
} from "@material-ui/core";

const Tech = lazy(() => import("../Tech/Tech"));
const Projects = lazy(() => import("../Projects/Projects"));

import {
  RootContainer,
  Gradient,
  PageTitle,
  StyledNavLink,
  theme,
} from "../Styles/Styles";

const useStyles = makeStyles({
  appContainer: {
    paddingTop: "100px",
    minHeight: "calc(100% - 100px)",
  },
  toolbar: {
    minHeight: "60px",
  },
});

const Loading = (Comp) => (props) => (
  <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
    <Comp {...props} />
  </Suspense>
);

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide direction="down" appear={false} in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const App = (props) => {
  const { location = {} } = props;
  const [backgroundImgSrc, setBackgroundImgSrc] = useState();
  const classes = useStyles();

  new Promise((resolve, reject) => {
    const src =
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = (err) => reject(err);
    img.src = src;
  })
    .then((src) => setBackgroundImgSrc(src))
    .catch((err) =>
      console.error(`Error getting background img src: ${err.message}`)
    );

  return (
    <RootContainer>
      <img
        src={backgroundImgSrc}
        css={css`
          height: auto;
          z-index: -2;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
        `}
      />
      <Gradient />
      {/* <Nav {...state} {...props} /> */}
      <HideOnScroll {...props}>
        <AppBar color="primary" elevation={1}>
          <Toolbar className={classes.toolbar}>
            <PageTitle to="/about">John Lukenoff</PageTitle>
            <Tabs
              value={
                location.pathname ? location.pathname.split("/")[1] : "about"
              }
            >
              {["about", "projects", "tech"].map((path) => (
                <Tab
                  component={Link}
                  key={path}
                  to={path}
                  value={path}
                  label={`${path[0].toUpperCase()}${path.slice(1)}`}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Container className={classes.appContainer}>
        <Switch location={location}>
          <Route
            path="/about"
            render={(routeProps) => <Home {...props} {...routeProps} />}
          />
          <Route path="/projects" render={Loading(Projects)} />
          <Route path="/tech" render={Loading(Tech)} />
          <Route
            render={() => <Redirect to={{ pathname: "/about" }} />}
            path="/"
          />
        </Switch>
      </Container>
      <Footer />
    </RootContainer>
  );
};

// App.propTypes = {
// };

export default App;
