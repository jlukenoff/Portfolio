import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const RootContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway:400,700,900');

  font-family: Raleway;
  width: 100%;
  position: absolute;
  left: 0;
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
  height: 1000px;
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
  -ms-letter-spacing: 0.8px;
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
  min-width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

export const ContactInfoContainer = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  text-align: right;
  color: #fff;
`;
