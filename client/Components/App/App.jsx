import React, { Component } from 'react';
import { Container } from '../Styles/Styles';

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
