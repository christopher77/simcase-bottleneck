import { combineReducers } from "redux";
import RoundsReducer from "./RoundsReducer";
import UserReducer from "./UserReducer";
import FeedbackReducer from "./FeedbackReducer";

export default combineReducers({
  rounds: RoundsReducer,
  user: UserReducer,
  feedback: FeedbackReducer
});
