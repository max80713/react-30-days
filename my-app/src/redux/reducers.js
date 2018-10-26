const initialState = {
  checked: false,
}

function checkbox(previousState, action) {
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

export default checkbox;