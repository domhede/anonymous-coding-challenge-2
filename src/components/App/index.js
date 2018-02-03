import React, {Component} from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Owl from './Owl';
import CardGrid from './CardGrid';

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cardsToShow: 9
    }
  }

  render() {
    const { count, cardsToShow } = this.state;
    return (
      <Wrapper>
        <div>
          <Counter count={count} />
          <Owl awake />
        </div>
        <CardGrid cardsToShow={cardsToShow} />
      </Wrapper>
    )
  }
}

export default App;
