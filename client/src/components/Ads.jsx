import React from 'react';
import styled from 'styled-components';
import Ad from './Ad.jsx';

const StyledAdsContainer = styled.div`
  max-width: 1400px;
  margin-bottom: 36px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 900px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const StyledTopRightAds = styled.div`

`;

const StyledAdP = styled.p`
  display: block;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  margin-right: 6px;
  margin-top: 0px;
  margin-bottom: 12px;

  &:hover {
    transition: box-shadow .2s ease-in-out;
    cursor: help;
  }
`;

const StyledQuestionMark = styled.img`
  max-height: 15px;
  max-width: auto;
  vertical-align: middle;
  margin-left: 6px;
`;

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
      <StyledAdsContainer>
        <StyledAdP>Ads <StyledQuestionMark src='https://bit.ly/3cQlHxH' /></StyledAdP>
        <StyledAds>
          {AdBlocks}
        </StyledAds>
      </StyledAdsContainer>
    );
  }
}
