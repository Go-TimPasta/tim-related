/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ads from './Ads.jsx';
import Items from './Items.jsx';
import Searches from './Searches.jsx';
import Categories from './Categories.jsx';
import Subscribe from './Subscribe.jsx';

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
    axios.get(`/related/ads/${id}`)
      .then((results) => {
        this.setState({
          ads: results.data,
        });
      });
  }

  getItems(id) {
    axios.get(`/related/items/${id}`)
      .then((results) => {
        this.setState({
          items: results.data,
        });
      });
  }

  getSearches(id) {
    axios.get(`/related/searches/${id}`)
      .then((results) => {
        this.setState({
          searches: results.data,
        });
      });
  }

  getCategories(id) {
    axios.get(`/related/categories/${id}`)
      .then((results) => {
        this.setState({
          categories: results.data,
        });
      });
  }

  render() {
    const {
      ads, items, searches, categories,
    } = this.state;
    const StyledRelatedContainer = styled.div`
      min-width: 640px;
    `;
    return (
      <div>
        <StyledRelatedContainer>
          <Ads ads={ads} />
          <Items items={items} />
          <Searches searches={searches} />
          <Categories categories={categories} />
        </StyledRelatedContainer>
        <Subscribe />
      </div>
    );
  }
}
