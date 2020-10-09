import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

export default class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const StyledSearchContainer = styled.div`
      max-width: 1400px;
      margin-bottom: 30px;
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

    const StyledSearchesHeading = styled.h2`
      line-height: 24px;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      letter-spacing: 0.35px;
      margin-top: 18px;
      margin-bottom: 18px;
      margin-left: 9px;


      @media only screen and (min-width: 640px) {
        line-height: 32px;
        font-size: 26px;
      }
    `;

    const StyledSearches = styled.div`
      display: flex;
      flex-wrap: wrap;
      font-family: 'Roboto', sans-serif;
    `;

    const SearchBlocks = this.props.searches.map((search, index) => {
      if (index < 4) {
        return (<Search key={search.ID} search={search} className="search-always-show" />);
      }
      if (index >= 4 && index < 6) {
        return (<Search key={search.ID} search={search} className="search-640-show" />);
      }
      if (index >= 6) {
        return (<Search key={search.ID} search={search} className="search-900-show" />);
      }
    });

    return (
      <StyledSearchContainer>
        <StyledSearchesHeading>Explore related searches</StyledSearchesHeading>
        <StyledSearches>
          {SearchBlocks}
        </StyledSearches>
      </StyledSearchContainer>
    );
  }
}
