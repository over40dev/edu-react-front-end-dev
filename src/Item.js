// existing code
import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

// existing code
const Item = ({item, onAddToCart}) => {
  return (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image"></div>
      <div className="Item-title">
      {item.name}
      </div>
      <div className="Item-description">
        {item.description}
      </div>
    </div>
    <div className="Item-right">
      <div className="Item-price">
      ${item.price}
      </div>
      {/* modified code */}
      {/* <button className="Item-addToCart" onClick={()=>onAddToCart(item)}> */}
      <button className="Item-addToCart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
  );
}

// new code
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

// existing code
export default Item;
