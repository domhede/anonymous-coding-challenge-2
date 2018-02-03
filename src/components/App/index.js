import React, {Component} from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Owl from './Owl';

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 16px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cardsToShow: 9
    }
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards(){
    const { cardsToShow } = this.state;
    let cards = [];

    for (let i = 0; i < cardsToShow; i++) {
      cards.push(<span key={i}>Card</span>);
    }
    return (
      <CardGrid>
        {cards}
      </CardGrid>
    );
  }

  render() {
    const { count } = this.state;
    return (
      <Wrapper>
        <div>
          <Counter count={count} />
          <Owl awake />
        </div>
        {this.renderCards()}
      </Wrapper>
    )
  }
}

export default App;
