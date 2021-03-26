// existing code
import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';
import {items} from './static-data';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

// existing code
const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    }
    summary[item.id].count++;

    return summary;
  }, {});

  console.log('groupItems', groupItems);
  console.log('groupItems values:', Object.values(groupItems));
  return Object.values(groupItems);
};

// modified code
const App = () => {
  // existing code
  const [activeTab,
    setActiveTab] = useState('items');
  const [cart,
    setCart] = useState([]);

  const addToCart = (item) => {
    setCart([
      ...cart,
      item
    ]);
  };

  // modified code
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        {/* modified code (add cart Prop) */}
        <Content tab={activeTab} onAddToCart={addToCart} cart={summarizeCart(cart)}/>
      </main>
    </div>
  );
};

// modified code (and cart Prop)
const Content = ({tab, onAddToCart, cart}) => {
  switch (tab) {
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
      // modified code (add CartPage and items Prop set to cart)
      return <CartPage items={cart}/>
    default:
      break;
  }
};

// existing code
export default App;
