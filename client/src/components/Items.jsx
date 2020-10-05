import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledItemsContainer = styled.div`
      max-width: 1400px;
      margin-bottom: 36px;
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

    const StyledItemsHeadingContainer = styled.div`
      max-width: 100%;
      align-items: center;
      justify-content: space-between;
      display: flex;
      margin: 0;
      font-size: 14px;
      font-family: Arial;
      color: #222;
    `;

    const StyledYouMayAlsoLikeText = styled.h3`
      padding-left: 9px;
      font-weight: 300;
      letter-spacing: 0.5px;
      font-size: 24px;
      line-height: 28px;

      @media only screen and (min-width: 0) {
        margin-top: 0px;
        margin-bottom: 18px;
      }

      @media only screen and (min-width: 640px) {
        font-size: 32px;
        line-height: 36px;
      }
    `;

    const StyledSimilarItemsContainer = styled.div`
      font-size: 13px;
      font-weight: bold;
      display: flex;
      line-height: 18px;
      align-items: center;
      cursor: pointer;

      &:hover .styled-arrow{
        padding-left: 6px;
      }
    `;

    const StyledSimilarItemsText = styled.div`
      width: 160px;
    `;

    const StyledArrowContainer = styled.div`
      height: 24px;
      width: 20px;
      align-items: center;
    `;

    const StyledArrow = styled.img`
      max-height: 100%;
      max-width: 12px;
      transition: 0.1s all ease;
    `;

    const StyledItems = styled.div`
      display: flex;
      flex-wrap: wrap;
      font-family: Arial, Helvetica, sans-serif;
    `;

    const ItemBlocks = this.props.items.map((item) => <Item key={item.ID} item={item} />);
    return (
      <StyledItemsContainer>
        <StyledItemsHeadingContainer>
          <StyledYouMayAlsoLikeText>You may also like</StyledYouMayAlsoLikeText>
          <StyledSimilarItemsContainer>
            <StyledSimilarItemsText>Shop more similar items</StyledSimilarItemsText>
            <StyledArrowContainer>
              <StyledArrow src='https://bit.ly/2GhvaCp' className="styled-arrow" />
            </StyledArrowContainer>
          </StyledSimilarItemsContainer>
        </StyledItemsHeadingContainer>
        <StyledItems>
          {ItemBlocks}
        </StyledItems>
      </StyledItemsContainer>
    );
  }
}
