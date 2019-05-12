import React from 'react';
import { Page } from 'react-pdf';
import {
  ModuleContainer,
  SubTitleText,
  HorizontalBlock,
  CenteredImage,
} from '../Styles/Styles';
// import PropTypes from 'prop-types';

const Home = props => (
  <ModuleContainer>
    <SubTitleText>Software Engineer</SubTitleText>
    <HorizontalBlock>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex omnis qui
      necessitatibus laudantium deserunt, tempore ea in quidem, provident
      voluptas est itaque doloremque sed vero reiciendis fugit amet facere?
      Tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
      voluptatem explicabo, blanditiis atque asperiores, voluptatibus commodi
      eius voluptates molestias adipisci tenetur quos nobis tempora nemo quis ab
      quibusdam perspiciatis. Reiciendis!
    </HorizontalBlock>

    <CenteredImage
      src="https://s3-us-west-1.amazonaws.com/johnportfolio/resume.png"
      alt="Resume"
    />
    {/* TODO: make this a modal to reduce bundle size */}
    {/* <StyledDocument file="/resume.pdf">
      <Page pageNumber={1} />
    </StyledDocument> */}
  </ModuleContainer>
);

// Home.propTypes = {
// };

export default Home;
