// Set up your root reducer here...
import { combineReducers } from 'redux';
import programBuilderState from './programBuilder';

const rootReducer = combineReducers({
  programBuilderState
});

export default rootReducer;
