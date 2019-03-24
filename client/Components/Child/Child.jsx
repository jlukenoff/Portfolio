import React from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 80%;
  margin: auto;
  line-height: 20px;
  text-align: center;
  background-color: red;
  color: white;
`;

const Child = () => <Container>First dummy component here</Container>;

// Child.propTypes = {
// };

export default Child;
