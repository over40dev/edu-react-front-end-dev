// existing code
import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';
// new code
import ItemPage from './ItemPage';
import {items} from './static-data';

// existing code
const App = () => {
  const [activeTab,
    setActiveTab] = useState('items');

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/> 
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
    </div>
  );
};

// modified code
const Content = ({tab}) => {
  switch (tab) {
    case 'items':
      // modified code
      return <ItemPage items={items}/>;
    case 'cart':
      return <span>the cart</span>;
    default:
      break;
  }
};

// existing code
export default App;
