import React from "react";
import ReactCSSTransitionsGroup from "react-addons-css-transition-group";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import { makeStyles } from "@material-ui/core/styles";
import {
  ModuleContainer,
  SubTitleText,
  HorizontalBlock,
  CenteredImage,
  DownloadButton,
  StyledDocument,
} from "../Styles/Styles";

const useStyles = makeStyles((theme) => ({
  downloadButton: {
    textDecoration: "none",
    width: "400px",
    textAlign: "center",
    margin: " 40px auto",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  innerContent: {
    padding: "20px",
  },
  paper: {
    // backgroundColor: "rgba(253, 253, 253, 0.8)",
    backgroundColor: "#FCFCFC",
    // color: "#fff",
  },
  saveIcon: {
    marginLeft: "5px",
    verticalAlign: "top",
  },
  avatar: {
    marginLeft: "auto",
    position: "absolute",
    right: "20px",
    top: "75px",
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px auto",
      position: "relative",
      right: "unset",
      top: "unset",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <ReactCSSTransitionsGroup
      transitionName="module"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ModuleContainer key="home">
        <SubTitleText style={{ marginTop: "25px" }}>
          Software Engineer
        </SubTitleText>
        <Paper className={classes.paper} color="secondary">
          <Avatar
            className={classes.avatar}
            alt="Profile photo"
            src="https://storage.cloud.google.com/john-lukenoff-portoflio/static/profile.jpg"
          />
          <Container maxWidth="md" className={classes.innerContent}>
            <Typography variant="body1">
              <span style={{ marginLeft: "1.5em" }}></span> My aptitude for
              problem-solving and technology has driven my ability to deploy and
              maintain solutions for e-commerce brands of varying sizes and
              markets. I have implemented integrations with legacy systems as
              well as those on the bleeding edge by remaining versatile and
              approaching every problem as a puzzle to be solved. I am most
              skilled in full-stack Javascript (primarily NodeJS and React) and
              have collaborated with clients in enabling services for Java,
              Python and PHP codebases.
              <br />
              <br />
              <span style={{ marginLeft: "1.5em" }}></span>I moved to the Bay
              Area in 2014 from a small town in Indiana. I fulfilled one of my
              dreams, by starting a business at the age of 21 - Lukenoff
              Associates. I built my business by gathering a full force of
              clients, traveling around the Bay Area providing home remodeling
              and repair services.
              <br />
              <br />
              <span style={{ marginLeft: "1.5em" }}></span>Eventually, I decided
              it was time to switch careers, and finally enter the world of Tech
              in the Silicon Valley. I spent 6 months learning the basics of
              programming and was accepted to one of the top Software
              Engineering Bootcamps in the Bay Area, Hack Reactor. Upon
              completion of Hack Reactor I began my first job as an engineer at
              Narvar, where I have worked in collaboration with Enterprise and
              Commercial e-commerce brands to implement solutions that simplify
              the lives of every day consumers
            </Typography>
          </Container>
        </Paper>
        <Button
          component={DownloadButton}
          variant="contained"
          className={classes.downloadButton}
          href="https://storage.googleapis.com/john-lukenoff-portoflio/static/Resume.pdf"
          ariaLabel="Click to download pdf"
          target="_blank"
          color="secondary"
        >
          My Resume
          <SaveAltIcon className={classes.saveIcon} />
        </Button>
      </ModuleContainer>
    </ReactCSSTransitionsGroup>
  );
};

// Home.propTypes = {
// };

export default Home;
