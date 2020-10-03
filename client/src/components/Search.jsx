import React from 'react';
import styled from 'styled-components';

const StyledSearchWrapper = styled.div`
  & .search-always-show{
    background: red;
  }

  & .search-640-show{
    background: blue;
  }

  & .search-900-show{
    background: green;
    display: block;
  }

  width: 90px;
  height: 108px;
  margin: 12px;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(34, 34, 34, 0.15);
  margin-bottom: 6px
`;

const StyledP = styled.p`
  line-height: 18px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledSearchWrapper>
        <StyledImage src={this.props.search.Imgurl} className={this.props.className}/>
        <StyledP className={this.props.className}>{this.props.search.Search}</StyledP>
      </StyledSearchWrapper>
    );
  }
}
