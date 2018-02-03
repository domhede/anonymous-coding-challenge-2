import React, {Component} from 'react';
import styled from 'styled-components';
import Cards from './Cards';

const Wrapper = styled.div`
  /* width: 600px;
  margin: auto; */
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
      <Wrapper onClick={this.handleClick} >
        {faceUp ? 'FaceUp' : 'FaceDown'}
      </Wrapper>
    )
  }
}

export default Card;
