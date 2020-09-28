import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.search.Imgurl} />
        <p>{this.props.search.Search}</p>
      </div>
    );
  }
}
