import React, { useState, ReactElement } from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import {
  ModuleContainer,
  TechWidgetContainer,
  TechWidgetEntry,
  WidgetHeader,
  WidgetBody,
  ToggleArrow,
  NavIcon,
  WidgetDescription,
  SubTitleText,
  StyledSvg,
} from '../Styles/Styles';
/*
export interface WidgetProps {
  name: string;
  description: string;
  projectList: string[];
  logoSrc: string;
  logoColor: string;
} */

const sampleTechPayload /* : WidgetProps[] */ = [
  {
    name: 'React',
    description:
      'React is my front-end framework of choice, I always do my best to write very clean and modular, and exercise best practices in state management.',
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/react.svg',
    logoColor: '#61DAFB',
  },
  {
    name: 'Jest',
    description:
      'Jest is my go-to framework for testing. I always ensure that the modules I build are well tested with an aim for 90%+ coverage.',
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/jest.svg',
    logoColor: '#C21325',
  },
  {
    name: 'CSS3',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/css3.svg',
    logoColor: '#1572B6',
  },
  {
    name: 'Docker',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/docker.svg',
    logoColor: '#1488C6',
  },
  {
    name: 'Git',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/github.svg',
    logoColor: '#181717',
  },
  {
    name: 'HTML5',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/html5.svg',
    logoColor: '#E34F26',
  },
  {
    name: 'Linux',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/linux.svg',
    logoColor: '#FCC624',
  },
  {
    name: 'MongoDB',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/img/mongodb.svg',
    logoColor: '#47A248',
  },
];

const TechWidget = (
  { name, description, projectList, logoSrc, logoColor } /* : WidgetProps */
) /* : ReactElement */ => {
  const [showDescription, toggleDescription] = useState(false);
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        style={{ minWidth: '300px', color: '#5a5a5a' }}
      >
        <StyledSvg src={logoSrc} fillcolor={logoColor} />
        <Typography>{name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails styles={{ flexDirection: 'column' }}>
        <h3>Projects:</h3> {projectList.join(', ')}
        <br />
        <Typography>{`\t${description}`}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const Tech = () => (
  <ReactCSSTransitionsGroup
    transitionName="module"
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <ModuleContainer key="tech">
      <SubTitleText>Tech Experience</SubTitleText>
      <TechWidgetContainer>
        {sampleTechPayload.map(obj => (
          <TechWidget {...obj} key={obj.name} />
        ))}
      </TechWidgetContainer>
    </ModuleContainer>
  </ReactCSSTransitionsGroup>
);

export default Tech;

// Tech.propTypes = {
// };

// Old toggle arrow
/* <ToggleArrow
          onClick={() => toggleDescription(!showDescription)}
          type="button"
        >
          <NavIcon
            className={`fa fa-chevron-${showDescription ? 'down' : 'left'}`}
            ariaHidden="true"
          />
        </ToggleArrow> */
