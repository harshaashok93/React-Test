import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MyApp from './lifecycle.jsx';


ReactDOM.render(<MyApp />, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
