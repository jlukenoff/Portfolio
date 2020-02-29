import React from 'react';
import { NavContainer, StyledNavLink, PageTitle } from '../Styles/Styles';
import { useRouteMatch } from 'react-router-dom';

const Nav = props => {
  let { url } = useRouteMatch();
  return (
    <NavContainer>
      <PageTitle to={`${url}/about`}>John Lukenoff</PageTitle>
      <StyledNavLink to={`${url}/about`}>About</StyledNavLink>
      <StyledNavLink to={`${url}/projects`}>Projects</StyledNavLink>
      <StyledNavLink to={'/tech'}>Tech</StyledNavLink>
    </NavContainer>
  );
};

export default Nav;
