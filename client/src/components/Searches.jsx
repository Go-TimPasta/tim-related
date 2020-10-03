import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

const StyledSearchContainer = styled.div`
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

const StyledSearches = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
`;

export default class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        <h1>Explore related searches</h1>
        <StyledSearches>
          {SearchBlocks}
        </StyledSearches>
      </StyledSearchContainer>
    );
  }
}
