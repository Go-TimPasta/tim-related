import React from 'react';
import styled from 'styled-components';

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
  }
`;

const StyledImageContainer = styled.div`
  width: 90%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
`;

export default class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
      sale = <p><s>${this.props.ad.Price.toFixed(2)}</s> ({this.props.ad.Sale}% off)</p>;
    }
    let freeShipping;
    if (this.props.ad.FreeShipping === 1) {
      freeShipping = <p>Free Shipping</p>;
    } else if (this.props.ad.FreeShipping === 2) {
      freeShipping = <p>Free Shipping Eligible</p>;
    } else {
      freeShipping = null;
    }
    return (
      <StyledAd>
        <StyledImageContainer>
          <StyledImage src={this.props.ad.Imgurl} />
        </StyledImageContainer>
        <p>{this.props.ad.ProductName}</p>
        <p>Ad by {this.props.ad.Shop}</p>
        <p>${salePrice.toFixed(2)}</p>
        {sale}
        {freeShipping}
      </StyledAd>
    );
  }
}
