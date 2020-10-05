import React from 'react';
import styled from 'styled-components';
import Category from './Category.jsx';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledCategoryContainer = styled.div`
      max-width: 1400px;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;

      @media only screen and (min-width: 640px) {
        padding-left: 24px;
        padding-right: 24px;
      }

      @media only screen and (min-width: 900px) {
        padding-left: 30px;
        padding-right: 30px;
      }
    `;

    const StyledCategoriesHeading = styled.h2`
      line-height: 24px;
      font-size: 20px;
      font-family: Arial;
      font-weight: 300;
      letter-spacing: 0.35px;
      margin-top: 18px;
      margin-bottom: 18px;
      margin-left: 9px;

      @media only screen and (min-width: 640px) {
        line-height: 32px;
        font-size: 26px;
      }
    `;

    const StyledCategories = styled.div`
      display: flex;
      flex-wrap: wrap;
      font-family: Arial, Helvetica, sans-serif;
    `;

    const CategoryBlocks = this.props.categories.map((category, index) => <Category key={index} category={category} />);
    return (
      <StyledCategoryContainer>
        <StyledCategoriesHeading>Explore related categories & searches</StyledCategoriesHeading>
        <StyledCategories>
          {CategoryBlocks}
        </StyledCategories>
      </StyledCategoryContainer>
    );
  }
}
