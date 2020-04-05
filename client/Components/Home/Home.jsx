import React from "react";
import ReactCSSTransitionsGroup from "react-addons-css-transition-group";
import { Container, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ModuleContainer,
  SubTitleText,
  HorizontalBlock,
  CenteredImage,
  DownloadButton,
  // RightSubTitleText,
  StyledDocument,
} from "../Styles/Styles";
// import PropTypes from 'prop-types';

const useStyles = makeStyles({
  downloadButton: {
    textDecoration: "none",
    width: "400px",
    textAlign: "center",
    margin: " 40px auto",
  },
  innerContent: {
    padding: "20px",
  },
  paper: {
    backgroundColor: "rgba(253, 253, 253, 0.8)",
  },
});

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
        <SubTitleText style={{ marginTop: "50px" }}>
          Software Engineer
        </SubTitleText>
        <Paper className={classes.paper} color="primary">
          <Container maxWidth="md" className={classes.innerContent}>
            <Typography variant="body1">
              My aptitude for problem-solving and technology has driven my
              ability to deploy and maintain solutions for e-commerce brands of
              varying sizes and markets. I have implemented integrations with
              legacy systems as well as those on the bleeding edge by remaining
              versatile and approaching every problem as a puzzle to be solved.
              I am most skilled in full-stack Javascript (primarily NodeJS and
              React) and have collaborated with clients in enabling services for
              Java, Python and PHP codebases.
              <br />
              <br />
              I moved to the Bay Area in 2014 from a small town in Indiana.
              Fulfilled one of my dreams, by starting a business at the age of
              21 - Lukenoff Associates. I built my business by gathering a full
              force of clients, traveling around the Bay Area providing home
              remodeling and repair services.
              <br />
              <br />
              Eventually, I decided it was time to switch careers, and finally
              enter the world of Tech in the Silicon Valley. I spent 6 months
              learning the basics of programming and was accepted to one of the
              top Software Engineering Bootcamps in the Bay Area, Hack Reactor.
              Upon completion of Hack Reactor I landed my first job as an
              engineer at Narvar, where I have worked in collaboration with
              Enterprise and Commercial e-commerce brands to implement solutions
              that simplify the lives of every day consumers
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
          color="primary"
        >
          My Resume
        </Button>
      </ModuleContainer>
    </ReactCSSTransitionsGroup>
  );
};

// Home.propTypes = {
// };

export default Home;
