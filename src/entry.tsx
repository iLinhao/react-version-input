import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

const appNode = document.createElement("DIV");
appNode.setAttribute('id', 'app');
document.body.appendChild(appNode);

ReactDOM.render(<App/>, document.querySelector('#app'));
