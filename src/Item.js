// existing code
import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

// modified code (replace onAddToCart with children Prop)
const Item = ({item, children}) => {
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
      {/* modified code (replace button with children Prop)*/}
      {children}
    </div>
  </div>
  );
}

// modified code (remove onAddToCart Prop)
Item.propTypes = {
  item: PropTypes.object.isRequired,
};

// existing code
export default Item;
