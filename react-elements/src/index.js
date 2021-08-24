import React from 'react';
import ReactDOM from 'react-dom';

const header = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(header, document.getElementById('root'));
