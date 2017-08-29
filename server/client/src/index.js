import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider stor={store}><App /></Provider>, 
    document.querySelector('#root')
); // Takes 2 parameters, route component and where the component is going to be rendered