import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';
import thunk from 'redux-thunk';

export const store = configureStore(
  {
    reducer: {
      cash: cashReducer,
      customers: customersReducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);
