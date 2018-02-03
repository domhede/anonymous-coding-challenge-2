import React from 'react';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 16px;
`;

const Cards = ({cardsToShow}) => {
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

export default Cards;
