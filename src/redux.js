import { createStore, combineReducers } from "redux";

const LOAD_COMMENTS = "LOAD_COMMENTS";

const initialState = {
  comments: [],
  sortDirection: "desc",
  offset: 0
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_COMMENTS:
    return {
      ...state,
      comments: [
        ...state.comments,
        ...action.payload
      ],
      offset: state.offset + 4,
      sortDirection: action.sortDirection,
    };

  default:
    return state;
  }
};

export const reducers = combineReducers({
  comments
});

export const loadComments = (payload, sortDirection) => ({
  type: LOAD_COMMENTS,
  payload,
  sortDirection,
});

export const sortComments = (payload) => ({
  type: "SortComments",
  payload
});

export const getComments = state => state.comments.comments;
export const getOffset = state => state.comments.offset;
export const getSortDirection = state => state.comments.sortDirection;

export const store = createStore(reducers);
