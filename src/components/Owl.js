import React from 'react';
import styled from 'styled-components';
import sleepingOwl from 'assets/images/sleeping.svg';
import awakeOwl from 'assets/images/awake.svg';

const Image = styled.img`
  width: ${props => props.awake ? '93px': '78px'};
  margin-left: auto;
`;

const Owl = ({awake}) => {
  const svg = awake ? awakeOwl : sleepingOwl;
  return (
    <Image awake={awake} src={svg} />
  );
};

export default Owl;
