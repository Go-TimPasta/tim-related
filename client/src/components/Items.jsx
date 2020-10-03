import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const StyledItemsContainer = styled.div`
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

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
`;

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ItemBlocks = this.props.items.map((item) => <Item key={item.ID} item={item} />);
    return (
      <StyledItemsContainer>
        <h1>You may also like</h1>
        <h3>Shop more similar items</h3>
        <StyledItems>
          {ItemBlocks}
        </StyledItems>
      </StyledItemsContainer>
    );
  }
}
