import React from 'react';

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
    let freeShipping;
    if (this.props.ad.FreeShipping === 1) {
      freeShipping = 'Free Shipping';
    } else if (this.props.ad.FreeShipping === 2) {
      freeShipping = 'Free Shipping Eligible';
    } else {
      freeShipping = '';
    }
    return (
      <div>
        <img src={this.props.ad.Imgurl} />
        <p>{this.props.ad.ProductName}</p>
        <p>Ad by {this.props.ad.Shop}</p>
        <p>${salePrice.toFixed(2)}</p>
        <p>${this.props.ad.Price.toFixed(2)} ({this.props.ad.Sale}% off)</p>
        <p>{freeShipping}</p>
      </div>
    );
  }
}
