import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let salePrice;
    const salePercent = 1 - (this.props.item.Sale / 100);
    if (this.props.item.Sale === null) {
      salePrice = this.props.item.Price;
    } else {
      salePrice = this.props.item.Price * salePercent;
    }
    let freeShipping;
    if (this.props.item.FreeShipping === 1) {
      freeShipping = 'Free Shipping';
    } else if (this.props.item.FreeShipping === 2) {
      freeShipping = 'Free Shipping Eligible';
    } else {
      freeShipping = '';
    }
    return (
      <div>
        <img src={this.props.item.Imgurl} />
        <p>{this.props.item.ProductName}</p>
        <p>{this.props.item.Shop}</p>
        <p>${salePrice.toFixed(2)}</p>
        <p>${this.props.item.Price.toFixed(2)} ({this.props.item.Sale}% off)</p>
        <p>{freeShipping}</p>
      </div>
    );
  }
}