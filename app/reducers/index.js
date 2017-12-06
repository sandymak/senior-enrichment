/* combineReducers is not currently used, but eventually should be for modular code :D */
import {
  combineReducers
} from 'redux';
import {
  studentReducer
} from './studentReducer';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  students: studentReducer
})


export default rootReducer
