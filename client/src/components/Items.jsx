import React from 'react';
import Item from './Item.jsx';

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ItemBlocks = this.props.items.map((item) => <Item key={item.ID} item={item} />);
    return (
      <div>
        <h1>You may also like</h1>
        <h3>Shop more similar items</h3>
        {ItemBlocks}
      </div>
    );
  }
}