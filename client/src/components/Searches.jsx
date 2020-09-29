import React from 'react';
import Search from './Search.jsx';

export default class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const SearchBlocks = this.props.searches.map((search) => <Search key={search.ID} search={search} />);
    return (
      <div>
        <h1>Explore related searches</h1>
        {SearchBlocks}
      </div>
    );
  }
}
