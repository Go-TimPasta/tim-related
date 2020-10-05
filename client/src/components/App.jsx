import React from 'react';
import axios from 'axios';
import Ads from './Ads.jsx';
import Items from './Items.jsx';
import Searches from './Searches.jsx';
import Categories from './Categories.jsx';
import styled from 'styled-components';

const StyledRelatedContainer = styled.div`
  min-width: 640px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 1,
      ads: [],
      items: [],
      searches: [],
      categories: [],
    };
    this.getAds = this.getAds.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getSearches = this.getSearches.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    const { categoryId } = this.state;
    this.getAds(categoryId);
    this.getItems(categoryId);
    this.getSearches(categoryId);
    this.getCategories(categoryId);
  }

  getAds(id) {
    axios.get(`http://localhost:8005/related/ads/${id}`)
      .then((results) => {
        this.setState({
          ads: results.data,
        });
      });
  }

  getItems(id) {
    axios.get(`http://localhost:8005/related/items/${id}`)
      .then((results) => {
        this.setState({
          items: results.data,
        });
      });
  }

  getSearches(id) {
    axios.get(`http://localhost:8005/related/searches/${id}`)
      .then((results) => {
        this.setState({
          searches: results.data,
        });
      });
  }

  getCategories(id) {
    axios.get(`http://localhost:8005/related/categories/${id}`)
      .then((results) => {
        this.setState({
          categories: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <StyledRelatedContainer>
          <Ads ads={this.state.ads} />
          <Items items={this.state.items} />
          <Searches searches={this.state.searches} />
          <Categories categories={this.state.categories} />
        </StyledRelatedContainer>
        <div>More Content Here</div>
      </div>
    );
  }
}
