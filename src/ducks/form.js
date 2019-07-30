const UPDATE_FORM = "UPDATE_FORM";

const initialState = {
  name: "",
  title: "",
  body: "",
  avatar: "bunny",
};

export const form = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_FORM:
    return {
      ...state,
      [action.name]: action.value,
    };
  default:
    return state;
  }
};

export const updateForm = (name, value) => ({
  type: UPDATE_FORM,
  name,
  value,
});

export const getForm = state => state.form;
