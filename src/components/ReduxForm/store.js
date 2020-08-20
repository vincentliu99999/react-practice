// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
// import counterReducer from '../counter/counterSlice';

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
//   counter: counterReducer,
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
