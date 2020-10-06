import React from 'react';
import styled from 'styled-components';

export default class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const StyledAd = styled.div`
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
    const salePercent = 1 - (this.props.ad.Sale / 100);
    if (this.props.ad.Sale === null) {
      salePrice = this.props.ad.Price;
    } else {
      salePrice = this.props.ad.Price * salePercent;
    }
    let sale;
    if (this.props.ad.Sale === null) {
      sale = null;
    } else {
      sale = <StyleSale><s>${this.props.ad.Price.toFixed(2)}</s> ({this.props.ad.Sale}% off)</StyleSale>;
    }
    let freeShipping;
    if (this.props.ad.FreeShipping === 1) {
      freeShipping = <StyleShippingContainer><StyleShipping>FREE Shipping</StyleShipping></StyleShippingContainer>;
    } else if (this.props.ad.FreeShipping === 2) {
      freeShipping = <StyleShippingEligible>Free Shipping Eligible</StyleShippingEligible>;
    } else {
      freeShipping = null;
    }
    return (
      <StyledAd>
        <StyledImageContainer>
          <StyledImage src={this.props.ad.Imgurl} />
        </StyledImageContainer>
        <StyledTextContainer>
          <StyleProductDescription>{this.props.ad.ProductName}</StyleProductDescription>
          <StyleStoreInfo>Ad by {this.props.ad.Shop}</StyleStoreInfo>
          <StylePrice>${salePrice.toFixed(2)}</StylePrice>
          {sale}
          {freeShipping}
        </StyledTextContainer>
      </StyledAd>
    );
  }
}
