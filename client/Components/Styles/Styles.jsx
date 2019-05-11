import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const RootContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  font-family: Raleway;
`;

export const BackgroundImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(https://s3-us-west-1.amazonaws.com/johnportfolio/portfolio_pic.jpg)
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
