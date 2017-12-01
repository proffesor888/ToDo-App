import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {goalObj, goalMas} from './reducers/reducers';
import {createLogger} from 'redux-logger';

const middleWare = applyMiddleware(createLogger());

export default createStore(goalMas, middleWare);