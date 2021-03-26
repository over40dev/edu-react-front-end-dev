// existing code
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

// modified code (remove onAddToCart Prop)
function CartPage({items}) {
  return (
    <ul className="CartPage-items">
      {items.map(item => 
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
          </Item>
        </li>)}
    </ul>
  );
}
// existing code
CartPage.propTypes = {
  items: PropTypes.array.isRequired
};
// existing code
export default CartPage;