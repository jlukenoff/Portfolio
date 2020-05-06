/** @jsx jsx */ import { Global, css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import loadable from "@loadable/component";

import AppBar from "@material-ui/core/AppBar";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Home from "../Home/Home";
import Footer from "../Footer/Footer";
const Tech = loadable(() => import("../Tech/Tech"));
const Projects = loadable(() => import("../Projects/Projects"));
const Resume = loadable(() => import("../Resume/Resume"));

import { RootContainer, Gradient } from "../Styles/Styles";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    paddingTop: "100px",
    minHeight: "calc(100% - 100px)",
  },
  toolbar: {
    minHeight: "60px",
    justifyContent: "space-between",
  },
  appBar: {
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "calc(100% - 42px)",
    //   left: 0,
    // },
  },
  mainLink: {
    color: "#fff ",
    textDecoration: "none",
  },
  tab: {
    minWidth: "100px",
  },
  tabText: {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
  },
  backgroundImg: {
    height: "auto",
    zIndex: "-2",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      left: "-25px",
      height: "100%",
      width: "auto",
    },
  },
  mobileMenu: {
    top: "62px !important",
    width: "90%",
    position: "relative",
    right: "5%",
  },
}));

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
  const [backgroundImgSrc, setBackgroundImgSrc] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 576px)");
  const open = Boolean(anchorEl);

  new Promise((resolve, reject) => {
    const src =
      // computer open on desk
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    // office
    // "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = (err) => reject(err);
    img.src = src;
  })
    .then((src) => setBackgroundImgSrc(src))
    .catch((err) =>
      console.error(`Error getting background img src: ${err.message}`)
    );

  const pathNames = ["about", /* "projects", */ "tech", "resume"];

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <RootContainer>
      <img src={backgroundImgSrc} className={classes.backgroundImg} />
      <Gradient />
      {/* <Nav {...state} {...props} /> */}
      <HideOnScroll {...props}>
        <AppBar color="primary" elevation={1} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              component={Link}
              to="/about"
              variant="h4"
              className={classes.mainLink}
            >
              John Lukenoff
            </Typography>
            {!isMobile ? (
              <Tabs
                value={
                  location.pathname ? location.pathname.split("/")[1] : "about"
                }
              >
                {pathNames.map((path) => (
                  <Tab
                    component={Link}
                    key={path}
                    to={path}
                    value={path}
                    classes={{ root: classes.tab, wrapper: classes.tabText }}
                    label={`${path[0].toUpperCase()}${path.slice(1)}`}
                  />
                ))}
              </Tabs>
            ) : (
              <Menu
                open={open}
                classes={{ paper: classes.mobileMenu }}
                onClose={() => setAnchorEl(null)}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {pathNames.map((path) => (
                  <MenuItem
                    component={Link}
                    key={path}
                    to={path}
                    className={classes.tab}
                    onClick={() => setAnchorEl(null)}
                  >
                    {`${path[0].toUpperCase()}${path.slice(1)}`}
                  </MenuItem>
                ))}
              </Menu>
            )}
            {isMobile && (
              <IconButton onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
            )}
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
          <Route path="/resume" render={Loading(Resume)} />
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
