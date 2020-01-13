import { SET_FEEDBACK_TRUE, SET_FEEDBACK_FALSE } from "../types/feedbackTypes";

export const setFeedbackTrue = () => {
  return {
    type: SET_FEEDBACK_TRUE
  };
};

export const setFeedbackFalse = () => {
  return {
    type: SET_FEEDBACK_FALSE
  };
};
