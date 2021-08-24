import React from 'react';
import ReactDOM from 'react-dom';

function CustomButtom(props) {
  return <button>Click Me!</button>;
}

ReactDOM.render(
  <CustomButtom/>,
  document.querySelector('#root')
);
