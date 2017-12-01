import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import 'C:/Users/AR/Documents/REACT/ToDo/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
