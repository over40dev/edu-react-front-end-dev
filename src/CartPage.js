// existing code
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

// modified code (add new Props)
function CartPage({items, onAddOne, onRemoveOne}) {
  return (
    <ul className="CartPage-items">
      {items.map(item => <li key={item.id} className="CartPage-item">
        <Item item={item}>
          {/* modified code (add CartItem Controls) */}
          <div className="CartItem-controls">
            <button className="CartItem-removeOne" onClick={()=>onRemoveOne(item)}>
              &ndash;
            </button>
            <span className="CartItem-count">{item.count}</span>
            <button className="CartItem-addOne" onClick={()=>onAddOne(item)}>
              +
            </button>
          </div>
        </Item>
      </li>)}
    </ul>
  );
}
// modified code (add new Props)
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};
// existing code
export default CartPage;