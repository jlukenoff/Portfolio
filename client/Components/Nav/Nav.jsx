import React from 'react';
import { NavContainer, StyledNavLink, PageTitle } from '../Styles/Styles';

const Nav = props => (
  <NavContainer>
    <PageTitle to="/home">John Lukenoff</PageTitle>
    <StyledNavLink to="/home">Home</StyledNavLink>
    <StyledNavLink to="/projects">Projects</StyledNavLink>
    <StyledNavLink to="/about">About</StyledNavLink>
    <StyledNavLink to="/tech">Tech</StyledNavLink>
  </NavContainer>
);

export default Nav;
