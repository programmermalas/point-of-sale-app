import { combineReducers } from "redux";
import menu from "./menu";
import cart from "./cart";
import order from "./order";

// combine all reducer
const rootReducer = combineReducers({
  menu,
  cart,
  order,
});

export default rootReducer;
