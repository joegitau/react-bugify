import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// sample bug object
/* 
  {
    type: 'BUG_ADDED',
    payload: {
      id: 1,
      description: 'some bug',
      resolved: false
    }
  }
*/

// create a reducer that adds a bug
let lastId = 0;
const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUG': 
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]
    case 'REMOVE_BUG':
      return state.filter(bug => bug.id !== action.payload.id);
    case 'RESOLVE_BUG':
      return state.map(bug => bug.id === action.payload.id ? {...bug, resolved: true } : bug)
    default:
      return state;
  }
}

// actions
// add bug
const addBug = description => {
  return {
    type: 'ADD_BUG',
    payload: {
      description
    }
  }
}

const removeBug = id => {
  return {
    type: 'REMOVE_BUG',
    payload: {
      id
    }
  }
}

// resolve bug
const resolveBug = id => {
  return {
    type: 'RESOLVE_BUG',
    payload: {
      id
    }
  }
}

// dispatch actions
const store = createStore(reducer);
console.log(store);

// add bug
store.dispatch(addBug('400 Bug'));
store.dispatch(addBug('500 Bug'));
console.log('ADDING BUGS: ', store.getState());

// remove bug
store.dispatch(removeBug(1));
console.log('REMOVING BUGS: ', store.getState());

// resolve bug
store.dispatch(resolveBug(2));
console.log('RESOLVING BUGS: ', store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
