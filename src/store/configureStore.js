import { createStore } from 'redux';
import fullData from '../reducers/fullData';

const configureStore = () => {
    const store = createStore(fullData);
    return store;
}

var store = configureStore();
 

export { store, configureStore as default }