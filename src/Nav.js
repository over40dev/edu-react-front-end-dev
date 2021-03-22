// existing code
import React from 'react';

// modified code
const Nav = ({activeTab, onTabChange}) => {
  // existing code
  const itemClass = (tabName) => `
    App-nav-item ${ 
      (activeTab === tabName) ? 'selected' : ''}
  `;

  // modified code
  return (
    <nav className="App-nav">
      <ul>
        {/* modified code */}
        <li className={itemClass('items')}>
          {/* modified code */}
          <button onClick={() => onTabChange('items')}>Items</button>
        </li>
        {/* modified code */}
        <li className={itemClass('cart')}>
          {/* modified code */}
          <button onClick={() => onTabChange('cart')}>Cart</button>
        </li>
      </ul>
    </nav>
  )
};
// existing code
export default Nav;
