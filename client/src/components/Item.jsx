import React from 'react';
import styled from 'styled-components';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledItem = styled.div`
      border-radius: 9px;
      top: -9px;
      right: -9px;
      bottom: -9px;
      left: -9px;

      @media only screen and (min-width: 0) {
        flex-grow: 1;
        flex-basis: 50%;
        max-width: 50%;
      }

      @media only screen and (min-width: 640px) {
        flex-grow: 1;
        flex-basis: 33.33333%;
        max-width: 33.33333%;
      }

      @media only screen and (min-width: 900px) {
        flex-grow: 1;
        flex-basis: 16.66667%;
        max-width: 16.66667%;
      }

      &:hover {
        box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
        transition: box-shadow .2s ease-in-out;
        cursor: pointer;
      }
    `;

    const StyledImageContainer = styled.div`
      width: 90%;
      margin-top: 5%;
      margin-bottom: 6px;
      margin-left: 5%;
      margin-right: 5%;
    `;

    const StyledImage = styled.img`
      width: 100%;
      border-radius: 2px;
      margin-left: auto;
      margin-right: auto;
    `;

    const StyledTextContainer = styled.div`
      width: 90%;
      margin-top: 2px;
      margin-bottom: 6px;
      margin-left: 5%;
      margin-right: 5%;
    `;

    const StyleProductDescription = styled.h3`
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      color: #222;
      margin-top: 0;
      margin-bottom: 0;
    `;

    const StyleStoreInfo = styled.p`
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      color: #595959;
      margin-top: 0;
      margin-bottom: 6px;
    `;

    const StylePrice = styled.p`
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #222;
      margin-top: 0;
      margin-bottom: 0;
    `;

    const StyleSale = styled.p`
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      color: #258635;
      margin-top: 0;
      margin-bottom: 0;
    `;

    const StyleShippingContainer = styled.p`
      display: inline-block;
      border-radius: 15px;
      background: #D4E9D7;
      margin-top: 0;
      margin-bottom: 0;
    `;

    const StyleShipping = styled.span`
      font-size: 11px;
      font-weight: bold;
      padding-top: 2px;
      padding-bottom: 3px;
      padding-left: 6px;
      padding-right: 6px;
    `;

    const StyleShippingEligible = styled.p`
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      margin-top: 6px;
      color: #595959;
    `;

    let salePrice;
    const salePercent = 1 - (this.props.item.sale / 100);
    if (this.props.item.sale === null) {
      salePrice = this.props.item.price;
    } else {
      salePrice = this.props.item.price * salePercent;
    }
    let sale;
    if (this.props.item.sale === null) {
      sale = null;
    } else {
      sale = <StyleSale><s>${this.props.item.price}</s> ({this.props.item.sale}% off)</StyleSale>;
    }
    let freeShipping;
    if (this.props.item.freeshipping === 1) {
      freeShipping = <StyleShippingContainer><StyleShipping>FREE Shipping</StyleShipping></StyleShippingContainer>;
    } else if (this.props.item.freeshipping === 2) {
      freeShipping = <StyleShippingEligible>Free Shipping Eligible</StyleShippingEligible>;
    } else {
      freeShipping = null;
    }
    return (
      <StyledItem>
        <StyledImageContainer>
          <StyledImage src={this.props.item.imgurl} />
        </StyledImageContainer>
        <StyledTextContainer>
          <StyleProductDescription>{this.props.item.name}</StyleProductDescription>
          <StyleStoreInfo>Ad by {this.props.item.shop}</StyleStoreInfo>
          <StylePrice>${Number(salePrice).toFixed(2)}</StylePrice>
          {sale}
          {freeShipping}
        </StyledTextContainer>
      </StyledItem>
    );
  }
}