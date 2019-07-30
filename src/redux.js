import { createStore, combineReducers } from "redux";

import { comments } from "./ducks/comments";

export const reducers = combineReducers({
  comments
});

export const store = createStore(reducers);
