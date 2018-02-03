import React, {Component} from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Owl from './Owl';
import Cards from './Cards';

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
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    const { count, cardsToShow } = this.state;
    return (
      <Wrapper>
        <div>
          <Counter count={count} />
          <Owl awake={count === cardsToShow} />
        </div>
        <Cards incrementCount={this.incrementCount} cardsToShow={cardsToShow} />
      </Wrapper>
    )
  }
}

export default App;
