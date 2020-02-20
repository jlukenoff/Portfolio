import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { Document } from 'react-pdf';
import { Paper, Link as LinkComponent } from '@material-ui/core';

export const RootContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway:400,700,900');

  font-family: Raleway;
  width: 100%;

  .module-appear {
    opacity: 0.01;
  }

  .module-appear.module-appear-active {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

export const BackgroundImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)
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
  margin: 10px auto 100px;
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
  min-height: 800px;

  @media only screen and (max-width: 420px) {
    align-items: center;
  }
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
  margin: 0 10% 50px;
  font-weight: 700;
`;

export const RightSubTitleText = styled(SubTitleText)`
  justify-self: flex-end;
  margin-left: auto;
`;

export const HorizontalBlock = styled(Paper)`
  background-color: #fff;
  padding: 30px 10%;
  font-family: Montserrat;
  line-height: 25px;
  min-height: 200px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  letter-spacing: 0.8px;
  margin-bottom: 100px;
  text-align: center;
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

export const RightVideoContainer = styled.div`
  width: 456px;
  height: 380px;
  border: 1px solid #ccc;
  position: absolute;
  right: 10%;
  margin-top: -100px;
  background-color: #e5e5e5;
  border-radius: 5px;
`;

export const LeftVideoContainer = styled(RightVideoContainer)`
  left: 10%;
`;

export const LeftTextBlock = styled.div`
  width: calc(80% - 400px);
`;

export const RightTextBlock = styled(LeftTextBlock)`
  justify-self: flex-end;
  margin-left: auto;
`;

export const StyledSvg = styled(ReactSVG)(
  ({ fillcolor }) => `
    height: 37px;
    width: 37px;
    fill: ${fillcolor};
    margin-right: 15px;
  `
);

export const StyledLink = styled(LinkComponent)`
  padding: 10px 100px !important;
  width: 300px;
  white-space: nowrap;
  margin: 0 auto !important;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
