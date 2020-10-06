import React from 'react';
import styled from 'styled-components';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledSearchWrapper = styled.div`
      & .search-always-show{
      }

      & .search-640-show{
        @media only screen and (min-width: 0px) {
          display: none;
          margin: 0;
        }

        @media only screen and (min-width: 640px) {
          line-height: 18px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1px;
          margin: auto;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      & .search-900-show{
        @media only screen and (min-width: 0px) {
          display: none;
          margin: 0;
        }

        @media only screen and (min-width: 900px) {
          line-height: 18px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1px;
          margin: auto;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      margin-top: 12px;
      margin-bottom: 12px;
      padding: 9px;
      text-align: center;
      cursor: pointer;
      border-radius: 9px;

      &:hover{
        box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
        transition: box-shadow .2s ease-in-out;
      }
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
      width: 90px;
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

    return (
      <StyledSearchWrapper>
        <StyledImage src={this.props.search.Imgurl} className={this.props.className}/>
        <StyledP className={this.props.className}>{this.props.search.Search}</StyledP>
      </StyledSearchWrapper>
    );
  }
}
