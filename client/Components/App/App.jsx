import React, { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 80%;
  margin: auto;
  line-height: 20px;
  text-align: center;
  background-color: red;
  color: white;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return <Container>hello from react</Container>;
  }
}

// App.propTypes = {
// };

export default App;
