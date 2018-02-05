import React, {Component} from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Owl from './Owl';
import Cards from './Cards';

const Wrapper = styled.div`
  width: 483px;
  margin: auto;
  margin-top: 64px;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 24px;
  height: 78px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cardsToShow: 9
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.adjustCount = this.adjustCount.bind(this);
  }

  incrementCount() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  decrementCount() {
    const { count } = this.state;
    this.setState({
      count: count - 1
    })
  }

  adjustCount(add) {
    if (add) {
      this.incrementCount();
    } else {
      this.decrementCount();
    }
  }

  render() {
    const { count, cardsToShow } = this.state;
    return (
      <Wrapper>
        <Header>
          <Counter count={count} />
          <Owl awake={count === cardsToShow} />
        </Header>
        <Cards adjustCount={this.adjustCount} />
      </Wrapper>
    )
  }
}

export default App;
