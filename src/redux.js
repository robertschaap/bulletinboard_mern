import { createStore, combineReducers } from "redux";

const initialState = {
  comments: [],
  sortDirection: "desc",
  offset: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case "LoadComments":
    return {
      ...state,
      comments: [
        ...state.comments,
        ...action.payload
      ],
      offset: state.offset + 4
    };

  default:
    return state;
  }
};

export const reducers = combineReducers({
  reducer
});

export const getComments = (payload) => ({
  type: "LoadComments",
  payload
});

export const sortComments = (payload) => ({
  type: "SortComments",
  payload
});

export const store = createStore(reducers);
