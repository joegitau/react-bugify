// ACTIONS ARE JS OBJECTS THAT DESCRIBE WHAT HAPPENS...

import { bindActionCreators } from 'redux'

// in this case: add some bug, resolve some bug or delete a bug
const addBug = (description) => {
  return {
    type: 'ADD_BUG',
    payload: {
      description
    }
  }
}

const resolveBug = id => {
  return {
    type: 'RESOLVE_BUG',
    payload: {
      id
    }
  }
}

const deleteBug = id => {
  return {
    type: 'DELETE_BUG',
    payload: {
      id
    }
  }
}

export {
  addBug, resolveBug, deleteBug
}