// existing code (imports)
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
  }, []);

  return groupItems;
  // return Object.values(groupItems);
};

// existing code (App Component)
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

  // existing code
  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id === item.id);
    if (index >= 0) {
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  }

  // modified code
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        {/* modified code (add onRemoveItem Prop) */}
        <Content tab={activeTab} 
          onAddToCart={addToCart} 
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}/>
      </main>
    </div>
  );
};

// existing code (Content Component)
const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
  switch (tab) {
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
      return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>
    default:
      break;
  }
};

// existing code
export default App;
