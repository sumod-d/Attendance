import { createStore } from 'redux';
import usernameReducer from './UsernameReducer';

const store = createStore(usernameReducer );

export default store;