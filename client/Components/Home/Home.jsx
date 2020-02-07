import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import { Page } from 'react-pdf';
import {
  ModuleContainer,
  SubTitleText,
  HorizontalBlock,
  CenteredImage,
  // RightSubTitleText,
  StyledDocument,
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
        I am a passionate and motivated developer skilled in React, Node, and
        modern Javascript. I have developed, deployed, and scaled many full
        stack web applications, including this website. Which is currently
        running on my home network and hosted on a Raspberry Pi.
        <br />
        <br />I have a genuine interesting in learning all things tech and am
        always working on side projects in my spare time.
      </HorizontalBlock>

      <SubTitleText style={{ marginBottom: '20px' }}>My Resume</SubTitleText>
      <CenteredImage
        src="https://s3-us-west-1.amazonaws.com/johnportfolio/resume.png"
        alt="Resume"
      />
      {/* TODO: make this a modal to reduce bundle size */}
      {/* <StyledDocument file="/resume.pdf">
        <Page pageNumber={1} />
      </StyledDocument> */}
    </ModuleContainer>
  </ReactCSSTransitionsGroup>
);

// Home.propTypes = {
// };

export default Home;
