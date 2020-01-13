import {
  UPDATE_SCORE,
  SET_TOTAL_SCORE,
  ADD_LAST_GAME,
  HANDLE_SUCCES_RATE,
  GET_SUCCES_RATE,
  RESET_SCORES
} from "../types/userTypes";

export const updateScore = (score, index) => {
  return {
    type: UPDATE_SCORE,
    payload: { score, index }
  };
};

export const setTotalScore = totalScore => {
  return {
    type: SET_TOTAL_SCORE,
    payload: { totalScore }
  };
};
export const addLastGame = lastgame => {
  return {
    type: ADD_LAST_GAME,
    payload: { lastgame }
  };
};

export const handleSuccessRate = hitsNumber => {
  return {
    type: HANDLE_SUCCES_RATE,
    payload: { hitsNumber }
  };
};

export const getSuccessRate = success => {
  return {
    type: GET_SUCCES_RATE,
    payload: { success }
  };
};

export const resetScores = () => {
  return {
    type: RESET_SCORES
  };
};
