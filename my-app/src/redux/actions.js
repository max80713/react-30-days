function check() {
  return {
    type: 'CHECK'
  }
}

function uncheck() {
  return {
    type: 'UNCHECK'
  }
}


function toggleCheckbox() {
  return {
    type: 'TOGGLE_CHECKBOX',
  }
}

export { check, uncheck, toggleCheckbox };