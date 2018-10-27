import { combineReducers } from 'redux';

const initialState = {
  checked: false,
}

function checkbox(previousState = initialState, action) {
  switch(action.type) {
    case 'CHECK': 
      return {
        checked: true
      };
    case 'UNCHECK':
      return {
        checked: false
      };
    case 'TOGGLE_CHECKBOX':
      return {
        checked: action.checked
      };
    default: 
      return previousState;
  }
}

export default combineReducers({
  checkbox,
});