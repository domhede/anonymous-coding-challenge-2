import React from 'react';
import styled from 'styled-components';
import sleepingOwl from 'assets/images/sleeping.svg';
import awakeOwl from 'assets/images/awake.svg';

const Image = styled.img`
  width: 83px;
  float: right;
`;

const Owl = ({awake}) => {
  const svg = awake ? awakeOwl : sleepingOwl;
  return (
    <Image src={svg} />
  );
};

export default Owl;
