import React from 'react';
import styled from 'styled-components';
import Card from './Card';;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

const Cards = props =>
  <CardGrid>
    <Card {...props} flipStyle='topToBottom' />
    <Card {...props} flipStyle='leftToRight' />
    <Card {...props} flipStyle='lotsOfSpinHozizontal' />

    <Card {...props} flipStyle='rightToLeft' />
    <Card {...props} flipStyle='topToBottom' />
    <Card {...props} flipStyle='bottomToTop' />

    <Card {...props} flipStyle='leftToRight' />
    <Card {...props} flipStyle='lotsOfSpinHozizontal' />
    <Card {...props} flipStyle='lotsOfSpinVertical' />
  </CardGrid>;

export default Cards;
