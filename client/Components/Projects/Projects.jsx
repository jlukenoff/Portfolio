import React from 'react';
import {
  ModuleContainer,
  HorizontalBlock,
  RightVideoContainer,
  LeftVideoContainer,
  SubTitleText,
  RightTextBlock,
  LeftTextBlock,
  RightSubTitleText,
} from '../Styles/Styles';

// import PropTypes from 'prop-types';

const Projects = props => (
  <ModuleContainer>
    <SubTitleText>Project Name Here</SubTitleText>
    <HorizontalBlock>
      <LeftTextBlock>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        dolorem repudiandae doloremque vitae inventore qui velit asperiores
        architecto commodi at soluta rerum dolor eos assumenda, sint obcaecati.
        Illo, ex molestias.
      </LeftTextBlock>
      <RightVideoContainer>Video Here</RightVideoContainer>
    </HorizontalBlock>
    <RightSubTitleText>Project Name Here</RightSubTitleText>
    <HorizontalBlock>
      <LeftVideoContainer>Video Here</LeftVideoContainer>
      <RightTextBlock>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        dolorem repudiandae doloremque vitae inventore qui velit asperiores
        architecto commodi at soluta rerum dolor eos assumenda, sint obcaecati.
        Illo, ex molestias.
      </RightTextBlock>
    </HorizontalBlock>
  </ModuleContainer>
);

// Projects.propTypes = {
// };

export default Projects;
