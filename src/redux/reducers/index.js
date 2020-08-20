import { combineReducers } from 'redux';
import employees from './employees';

let reducers = {
  employees,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
