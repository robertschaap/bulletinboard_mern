const LOAD_COMMENTS = "LOAD_COMMENTS";
const SORT_COMMENTS = "SORT_COMMENTS";

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
    };
  case SORT_COMMENTS:
    return {
      ...state,
      comments: [],
      offset: 0,
      sortDirection: state.sortDirection === "desc" ? "asc" : "desc",
    };
  default:
    return state;
  }
};

export const loadComments = (payload, sortDirection) => ({
  type: LOAD_COMMENTS,
  payload,
  sortDirection,
});

export const sortComments = (payload) => ({
  type: SORT_COMMENTS,
  payload
});

export const getComments = state => state.comments.comments;
export const getOffset = state => state.comments.offset;
export const getSortDirection = state => state.comments.sortDirection;
