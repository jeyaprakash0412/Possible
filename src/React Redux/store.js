import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Rootreducer from './Reducer';


const store = createStore(Rootreducer)

export default store;