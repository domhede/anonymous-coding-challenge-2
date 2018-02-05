import React from 'react';
import styled from 'styled-components';
import Card from './Card';;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

const Cards = ({cardsToShow, adjustCount}) => {
  let cards = [];

  for (let i = 0; i < cardsToShow; i++) {
    cards.push(<Card adjustCount={adjustCount} key={i} />);
  }

  return (
    <CardGrid>
      {cards}
    </CardGrid>
  );
}

export default Cards;
