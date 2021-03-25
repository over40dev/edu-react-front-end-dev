// existing code
import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

// modified code
const App = () => {
  // existing code
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);
  
  // new code
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // modified code
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        {/* modified code (added onAddToCart) */}
        <Content tab={activeTab} onAddToCart={addToCart}/>
      </main>
    </div>
  );
};

// modified code (added onAddToCart)
const Content = ({tab, onAddToCart}) => {
  switch (tab) {
    case 'items':
      // modified code (added onAddToCart)
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
      return <span>the cart</span>;
    default:
      break;
  }
};

// existing code
export default App;
