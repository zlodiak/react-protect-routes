import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

let reducers = combineReducers({
    authReducer,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState