// existing code
import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';
// new code
import Item from './Item';

// modified code
function ItemPage({items, onAddToCart}) {
  return (
    <ul className="ItemPage-items">
      {items.map(item => 
        <li key={item.id} className="ItemPage-item">
          {/* modified code */}
          <Item item={item} onAddToCart={() => onAddToCart(item)}/>
        </li>)}
    </ul>
  );
}
// existing code
ItemPage.propTypes = {
  items: PropTypes.array.isRequired
};
// existing code
export default ItemPage;