import React, {Component} from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Owl from './Owl';

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    const { count } = this.state;
    return (
      <Wrapper>
        <div>
          <Counter count={count} />
          <Owl awake />
        </div>
      </Wrapper>
    )
  }
}

export default App;
