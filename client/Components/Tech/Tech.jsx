import React, { useState } from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import {
  ModuleContainer,
  TechWidgetContainer,
  TechWidgetEntry,
  LogoImage,
  WidgetHeader,
  WidgetBody,
  ToggleArrow,
  NavIcon,
  WidgetDescription,
  SubTitleText,
} from '../Styles/Styles';

const TechWidget = ({ name, description, projectList, logoSrc }) => {
  const [showDescription, toggleDescription] = useState(false);
  return (
    <TechWidgetEntry>
      <WidgetHeader>
        <LogoImage src={logoSrc} />
        {name}
        <ToggleArrow
          onClick={() => toggleDescription(!showDescription)}
          type="button"
        >
          <NavIcon
            className={`fa fa-chevron-${showDescription ? 'down' : 'left'}`}
            ariaHidden="true"
          />
        </ToggleArrow>
      </WidgetHeader>
      {showDescription && (
        <WidgetBody>
          <WidgetDescription>
            {`\t${description}`}
            <br />
            <h3>Projects:</h3> {projectList.join(', ')}
          </WidgetDescription>
        </WidgetBody>
      )}
    </TechWidgetEntry>
  );
};

const sampleTechPayload = [
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
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur fuga numquam sint eius deleniti officiis corrupti assumenda sed impedit distinctio sunt ducimus placeat, molestiae aliquid quod exercitationem nulla. Repellat.',
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
  {
    name: 'React',
    description:
      "I've used react in many project to create dynamic and powerful user interfaces",
    projectList: [
      'Narvar Internal Tooling',
      'Vacation.ly',
      'My Portfolio (this website!)',
      'Shopr',
      'PiHome',
    ],
    logoSrc: '/react.png',
  },
];

const Tech = props => (
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
          <TechWidget {...obj} />
        ))}
      </TechWidgetContainer>
    </ModuleContainer>
  </ReactCSSTransitionsGroup>
);

// Tech.propTypes = {
// };

export default Tech;
