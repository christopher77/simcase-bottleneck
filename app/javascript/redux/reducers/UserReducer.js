import {
  UPDATE_SCORE,
  SET_TOTAL_SCORE,
  ADD_LAST_GAME,
  HANDLE_SUCCES_RATE,
  GET_SUCCES_RATE,
  RESET_SCORES
} from "../types/userTypes";

const initialState = {
  lastGameComplete: {},
  scores: [0, 0, 0, 0],
  totalScore: 0,
  success: 0,
  successRate: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCORE:
      const newScore = Object.assign([...state.scores], {
        [action.payload.index]: action.payload.score
      });
      return {
        ...state,
        scores: newScore
      };
    case SET_TOTAL_SCORE:
      const scores = state.scores;
      const newTotalScore = scores.reduce((acc, cur) => acc + cur, 0);
      return {
        ...state,
        totalScore: newTotalScore
      };
    case ADD_LAST_GAME:
      return {
        ...state,
        lastGameComplete: action.payload
      };
    case HANDLE_SUCCES_RATE:
      return {
        ...state,
        success: state.success + action.payload.hitsNumber
      };
    case GET_SUCCES_RATE:
      return {
        ...state,
        successRate: action.payload.success
      };
    case RESET_SCORES:
      return initialState;
    default:
      return state;
  }
}
