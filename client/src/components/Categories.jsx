import React from 'react';
import Category from './Category.jsx';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const CategoryBlocks = this.props.categories.map((category) => <Category key={category.ID} category={category} />);
    return (
      <div>
        <h1>Explore related categories & searches</h1>
        {CategoryBlocks}
      </div>
    );
  }
}
