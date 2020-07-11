import * as actionTypes from "./types";

export const add_order = (payload) => {
  return {
    type: actionTypes.ADD_ORDER,
    payload: payload,
  };
};
