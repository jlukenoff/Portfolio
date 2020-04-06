import React from "react";
import {
  StyledFooter,
  LinkContainer,
  ContactInfoContainer,
  SocialLinksContainer,
} from "../Styles/Styles";

import { makeStyles } from "@material-ui/core";
// import PropTypes from 'prop-types';
const useStyles = makeStyles({
  iconButtons: {
    height: "35px",
  },
});

/**
 * TODO:
 * - Add icons from cloud storage,
 * - Switch to material footer
 *
 *
 */
const Footer = (props) => {
  const classes = useStyles();
  return (
    <StyledFooter>
      <SocialLinksContainer>
        {[
          ["https://github.com/jlukenoff", "github.svg"],
          ["https://linkedin.com/in/jlukenoff", "linkedin.svg"],
        ].map(([href, imgSrc]) => (
          <LinkContainer href={href} target="_blank" key={imgSrc}>
            <img
              src={`https://storage.cloud.google.com/john-lukenoff-portoflio/static/${imgSrc}`}
              className={classes.iconButtons}
            />
          </LinkContainer>
        ))}
      </SocialLinksContainer>
      <ContactInfoContainer>
        Contact me:
        <br />
        <LinkContainer href="mailto:john@jlukenoff.com">
          john@jlukenoff.com
        </LinkContainer>{" "}
        <br />
        <LinkContainer href="tel:4155835388">415.583.5388</LinkContainer>
      </ContactInfoContainer>
    </StyledFooter>
  );
};
// Footer.propTypes = {
// };

export default Footer;
