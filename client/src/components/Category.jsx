import React from 'react';
import styled from 'styled-components';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledCategoryContainer = styled.div`
      margin-right: 6px;
      margin-bottom: 6px;
      color: #222222;
      font-family: 'Roboto', sans-serif;
      background: none;
      background-color: rgba(34, 34, 34, 0.075);
      border: none;
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      border-radius: 24px;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      min-width: 48px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 18px;
      padding-right: 18px;
      position: relative;
      text-align: center;
      vertical-align: middle;
      z-index: 10;

      &:hover {
        background-color: rgba(34, 34, 34, 0.15);
        transition: background-color .2s ease-in-out;
      }
    `;

    const StyledCategoryName = styled.p`
      margin-top: 0;
      margin-bottom: 0;
    `;

    return (
      <StyledCategoryContainer>
        <StyledCategoryName>{this.props.category.Search}</StyledCategoryName>
      </StyledCategoryContainer>
    );
  }
}
