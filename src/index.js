import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import './styles/base.scss';
import 'bootstrap/dist/css/bootstrap.css';
import portfolioApp from './reducers';

const store = createStore(portfolioApp);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);