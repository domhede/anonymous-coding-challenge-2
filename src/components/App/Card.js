import React, {Component} from 'react';
import styled from 'styled-components';
import cardFront from 'assets/images/card-front.svg';
import cardBack from 'assets/images/card-back.svg';

const Wrapper = styled.div`
  perspective: 1000px;
  width: 158px;
  height: 150px;
`;
const Flipper = styled.div`
  transition: 0.4s;
	transform-style: preserve-3d;
	position: relative;
  transform: ${props => props.faceUp ? `rotateY(180deg)`: `none`};
`;
const Content = styled.div`
  backface-visibility: hidden;
  width: 158px;
  height: 150px;
`;
const Front = Content.extend`
  z-index: 2;
`;
const Back = Content.extend`
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceUp: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { faceUp } = this.state;
    this.setState({
      faceUp: !faceUp
    }, this.props.adjustCount(!faceUp));
  }

  render() {
    const { faceUp } = this.state;
    return (
      <Wrapper onClick={this.handleClick}>
      <Flipper faceUp={faceUp}>
        <Front>
          <img alt='' src={cardFront} />
        </Front>
        <Back>
          <img alt='' src={cardBack} />
        </Back>
      </Flipper>
      </Wrapper>
    )
  }
}

export default Card;
