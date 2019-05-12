import React, { useState } from 'react';
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
            {description}
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
  <ModuleContainer>
    <SubTitleText>Tech Experience</SubTitleText>
    <TechWidgetContainer>
      {sampleTechPayload.map(obj => (
        <TechWidget {...obj} />
      ))}
    </TechWidgetContainer>
  </ModuleContainer>
);

// Tech.propTypes = {
// };

export default Tech;
