import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
// import { Page } from 'react-pdf';
import { Button } from '@material-ui/core';
import {
  ModuleContainer,
  SubTitleText,
  HorizontalBlock,
  CenteredImage,
  // RightSubTitleText,
  StyledLink,
} from '../Styles/Styles';
// import PropTypes from 'prop-types';

const Home = () => (
  <ReactCSSTransitionsGroup
    transitionName="module"
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <ModuleContainer key="home">
      <SubTitleText>Software Engineer</SubTitleText>
      <HorizontalBlock>
        &tab; I am a passionate and motivated developer skilled in React,
        Node.js, SQL, NoSQL and modern Javascript. I have developed, deployed,
        and scaled many full stack web applications, including this website.
        Which is currently running on my home network and hosted on GCP and load
        balancing between GCP and a Raspberry Pi at home to save money.
        <br />
        <br />I have a genuine interesting in learning all things tech and am
        always working on side projects in my spare time.
      </HorizontalBlock>
      <Button
        variant="contained"
        href="https://s3-us-west-1.amazonaws.com/johnportfolio/resume.pdf"
        ariaLabel="Resume URL. Click to open"
        target="_blank"
        rel="noopener noreferrer"
        component={StyledLink}
        fullWidth={false}
      >
        Open Resume
      </Button>
    </ModuleContainer>
  </ReactCSSTransitionsGroup>
);

// Home.propTypes = {
// };

export default Home;
