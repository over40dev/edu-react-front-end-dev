import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <div><Hello/></div>
}

function Hello() {
  let isHello = true;
  return <span>
    {isHello ? 'Hello'  : 'Goodbye' }
  </span>
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
