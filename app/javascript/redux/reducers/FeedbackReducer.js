import { SET_FEEDBACK_TRUE, SET_FEEDBACK_FALSE } from "../types/feedbackTypes";

const initialState = { feedback: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FEEDBACK_TRUE:
      // return { ...state, feedback: true };
      return Object.assign({}, state, { feedback: true });
    case SET_FEEDBACK_FALSE:
      // return { ...state, feedback: false };
      return Object.assign({}, state, { feedback: false });
    default:
      return state;
  }
}
