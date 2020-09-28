import React from 'react';
import Ad from './Ad.jsx';

export default class Ads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AdBlocks = this.props.ads.map((ad) => <Ad key={ad.ID} ad={ad} />);
    return (
      <div>
        <h1>Ads</h1>
        {AdBlocks}
      </div>
    );
  }
}
