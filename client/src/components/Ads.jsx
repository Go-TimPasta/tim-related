import React from 'react';
import styled from 'styled-components';
import Ad from './Ad.jsx';

const StyledAds = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
`;

export default class Ads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AdBlocks = this.props.ads.map((ad) => <Ad key={ad.ID} ad={ad} />);
    return (
      <div>
        <p>Ads</p>
        <StyledAds>
          {AdBlocks}
        </StyledAds>
      </div>
    );
  }
}
