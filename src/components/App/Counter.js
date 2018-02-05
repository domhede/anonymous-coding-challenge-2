import React from 'react';
import styled from 'styled-components';
import star from 'assets/images/star.svg';

const Wrapper = styled.div`
  display: inline-block;
`;
const Star = styled.img`
  width: 82px;
`;
const Count = styled.span`
  font-size: 50px;
`;

const Counter = ({count}) => {
  return (
    <Wrapper>
      <Star src={star} />
      <Count>{count}</Count>
    </Wrapper>
  );
};

export default Counter;
