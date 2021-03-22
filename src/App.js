import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';

// modified code
const App = () => {
  // existing code
  const [activeTab,
    setActiveTab] = useState('items');

  return (
    <div className="App">
      {/* existing code */}
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/> 
      {/* modified code */}
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
    </div>
  );
};

// new code
const Content = ({tab}) => {
  switch (tab) {
    case 'items':
      return <span>the items</span>;
    case 'cart':
      return <span>the cart</span>;
    default:
      break;
  }
};

// existing code
export default App;
