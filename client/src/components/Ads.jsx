import React from 'react';
import styled from 'styled-components';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Ad from './Ad.jsx';


export default class Ads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

    const StyledAdRight = styled.div`
      display: inline-block;
      width: 100%;
    `;

    const StyledAdRightSpan = styled.span`
      float: right;
      margin-bottom: 12px;
      position: relative;
      display: inline-block;
    `;

    const StyleAdButton = styled.button`
      padding-left: 14px;
      padding-right: 0;
      background: none;
      border: none;
      outline: none;
      cursor: help;
      alighn-items: center;
      display: inline-flex;
    `;

    const StyledAdSpan = styled.span`
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      margin-right: 6px;
      margin-top: 0px;
    `;

    const StyledQuestionMark = styled.img`
      max-height: 15px;
      max-width: auto;
      vertical-align: middle;
      margin-left: 4px;
      margin-right: 2px;
    `;

    const StyledAds = styled.div`
      display: flex;
      flex-wrap: wrap;
      font-family: Arial, Helvetica, sans-serif;
    `;

    const StyledPopover = styled(Popover)`
      margin: 0px;
      position: absolute;
      opacity: 1;
      visibility: visible;
      transition: opacity .3s ease-in-out;
      border: 1px solid rgba(34, 34, 34, 0.15);
      border-radius: 12px;
      box-shadow: 0 6px 36px rgba(34, 34, 34, 0.325);
      background: #FFFFFF;
      color: #222222;
      padding: 12px;
      width: 300px;
      z-index: 1000;
      font-family: Arial;
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      text-align: left;
    `;

    const popover = (
      <StyledPopover id="popover-basic">
        <StyledPopover.Content>
          Getsy sellers promote their items through our paid advertising platform. Ads are shown to you based on a number of factors like relevancy and the amount sellers pay per click. <a href="https://www.etsy.com/legal/policy/search-advertisement-ranking-disclosures/899478564529" target="_blank" rel="nofollow">Learn more</a>.
        </StyledPopover.Content>
      </StyledPopover>
    );

    const triggerEvent = ['focus'];
    const AdBlocks = this.props.ads.map((ad) => <Ad key={ad.ID} ad={ad} />);
    return (
      <StyledAdsContainer>
        <StyledAdRight>
          <StyledAdRightSpan>
            <OverlayTrigger trigger={triggerEvent} placement="left-end" overlay={popover}>
              <StyleAdButton>
                <StyledAdSpan>
                  Ads <StyledQuestionMark src='https://bit.ly/3cQlHxH' />
                </StyledAdSpan>
              </StyleAdButton>
            </OverlayTrigger>
          </StyledAdRightSpan>
        </StyledAdRight>
        <StyledAds>
          {AdBlocks}
        </StyledAds>
      </StyledAdsContainer>
    );
  }
}
