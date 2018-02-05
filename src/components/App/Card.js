import React, {Component} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import cardFront from 'assets/images/card-front.svg';
import cardBack from 'assets/images/card-back.svg';

const theme = {
  topToBottom: {
    transform: 'rotateX(-180deg)'
  },
  bottomToTop: {
    transform: 'rotateX(180deg)'
  },
  leftToRight: {
    transform: 'rotateY(180deg)'
  },
  rightToLeft: {
    transform: 'rotateY(-180deg)'
  },
  lotsOfSpinHozizontal: {
    transform: 'rotateY(540deg)'
  },
  lotsOfSpinVertical: {
    transform: 'rotateX(540deg)'
  }
};

const Wrapper = styled.div`
  perspective: 1000px;
  width: 150px;
  height: 150px;
  &:hover {
    cursor: pointer;
  }
`;
const Flipper = styled.div`
  transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
  ${props => props.faceUp ? props.theme: `none`};
`;
const Content = styled.div`
  backface-visibility: hidden;
  width: 150px;
  height: 142px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
const Front = Content.extend`
  z-index: 2;
  border: 3px solid #fd7512;
  border-radius: 24px;
`;
const Back = Content.extend`
  ${props => props.theme};
  border-radius: 24px;
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
    const { flipStyle } = this.props;
    const { faceUp } = this.state;

    return (
      <Wrapper onClick={this.handleClick}>
        <ThemeProvider theme={theme[flipStyle]} >
          <Flipper faceUp={faceUp}>
            <Front>
              <img alt='' src={cardFront} />
            </Front>
            <Back>
              <img alt='' src={cardBack} />
            </Back>
          </Flipper>
        </ThemeProvider>
      </Wrapper>
    )
  }
}

export default Card;
