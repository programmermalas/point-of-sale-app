import * as actionTypes from "../actions/types";

const initialState = {
  orders: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const { payload } = action;

      const no = state.orders.length;
      const date = new Date();

      payload.no = no + 1;
      payload.date = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;

      return { ...state, orders: [...state.orders, payload] };
    default:
      return state;
  }
};

export default reducers;
