import { combineReducers } from 'redux';
import todoReducer from './todo';
import modalReducer from './modal';

const rootReducer = combineReducers({
  todos: todoReducer,
  modals: modalReducer,
});

export default rootReducer;
