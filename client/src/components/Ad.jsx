import React from 'react';
import styled from 'styled-components';

const StyledAd = styled.div`
  flex-basis: 16.66%;
`;

const StyledImageContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

const StyledImage = styled.img`
  max-width: 100%;
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
