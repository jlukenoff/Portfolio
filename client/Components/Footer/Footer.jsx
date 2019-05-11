import React from 'react';
import {
  StyledFooter,
  NavIcon,
  LinkContainer,
  ContactInfoContainer,
  SocialLinksContainer,
} from '../Styles/Styles';

// import PropTypes from 'prop-types';

const Footer = props => (
  <StyledFooter>
    <SocialLinksContainer>
      <LinkContainer href="https://github.com/jlukenoff" target="_blank">
        <NavIcon className="fab fa-github " />
      </LinkContainer>
      <LinkContainer
        href="https://www.linkedin.com/in/jlukenoff/"
        target="_blank"
      >
        <NavIcon className="fab fa-linkedin " />
      </LinkContainer>
    </SocialLinksContainer>
    <ContactInfoContainer>
      Contact me:
      <br />
      <LinkContainer href="mailto:jlukenoff@gmail.com">
        jlukenoff@gmail.com
      </LinkContainer>{' '}
      <br />
      <LinkContainer href="tel:4155835388">415.583.5388</LinkContainer>
    </ContactInfoContainer>
  </StyledFooter>
);

// Footer.propTypes = {
// };

export default Footer;
