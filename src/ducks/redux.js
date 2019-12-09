import { createStore, combineReducers } from 'redux';

import { comments } from './comments';

export const reducers = combineReducers({
  comments
});

export const store = createStore(reducers);
