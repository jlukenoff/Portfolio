import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { Document } from 'react-pdf';

export const RootContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway:400,700,900');

  font-family: Raleway;
  width: 100%;
`;

export const BackgroundImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(https://s3-us-west-1.amazonaws.com/johnportfolio/bence-balla-schottner-1570185-unsplash.jpg)
    left top / cover no-repeat;
  z-index: -2;

  background-attachment: fixed;
`;

export const Gradient = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.3;
  z-index: -1;
`;
export const NavContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 425px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
export const ModuleContainer = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: 700;
  min-height: 400px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 20px 5px;
  margin: 0 10px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid #000;
  }

  &:hover {
    color: #565656;
    border-bottom: 2px solid #000;
    transition: width 2s;
    transition-timing-function: ease;
  }
`;

export const PageTitle = styled(Link)`
  justify-self: flex-start;
  margin: auto;
  margin-left: 10px;
  letter-spacing: 1px;
  font-size: 2em;
  color: #000;
  text-decoration: none;

  @media only screen and (max-width: 425px) {
    width: 100%;
    text-align: center;
  }
`;

export const SubTitleText = styled.h2`
  font-size: 3em;
  margin: 100px 10%;
  font-weight: 700;
`;

export const HorizontalBlock = styled.div`
  background-color: #fff;
  padding: 30px 10%;
  font-family: Montserrat;
  line-height: 25px;
  min-height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  letter-spacing: 0.8px;
`;

export const StyledFooter = styled.footer`
  height: 100px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const NavIcon = styled.i`
  font-size: 30px;
  color: #000;
`;

export const LinkContainer = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const SocialLinksContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-evenly;
`;

export const ContactInfoContainer = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  text-align: right;
  color: #fff;
`;

export const StyledDocument = styled(Document)`
  width: 80%;
  height: auto;
  margin: 50px auto;
  overflow-y: scroll;

  canvas {
    margin: auto;
    height: auto !important;
    width: 100% !important;
  }
`;

export const CenteredImage = styled.img`
  width: 70%;
  height: auto;
  margin: 20px auto;
`;

export const LogoImage = styled.img`
  width: 70px;
  height: auto;
`;

export const TechWidgetContainer = styled.div`
  width: 80%;
  margin: 0 auto 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: auto;
  align-items: baseline;
`;

export const TechWidgetEntry = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 15px;
  font-size: 2em;
  font-weight: 400;
`;

export const WidgetHeader = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b9b9b9;
`;

export const WidgetBody = styled.div``;
export const WidgetDescription = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
  font-size: 0.5em;
  line-height: 20px;
  letter-spacing: 0.3px;
`;

export const ToggleArrow = styled.button`
  background: transparent;
  border: none;
  color: #000;
  justify-self: flex-end;
  margin-left: auto;
`;
