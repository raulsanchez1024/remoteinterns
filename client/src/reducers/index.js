import { combineReducers } from 'redux';
import internshipReducer from './internshipReducer';

export default combineReducers({
  internship: internshipReducer
});