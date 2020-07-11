import * as actionTypes from "../actions/types";

const initialState = {
  menus: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MENU_SUCCESS:
      return { ...state, menus: action.payload };
    default:
      return state;
  }
};

export default reducers;
