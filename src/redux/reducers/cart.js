import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  sub_total: 0,
  ppn: 0,
  total: 0,
  name: "",
  no: 0,
  date: "",
};

const add_cart = (state, action) => {
  let sub_total = state.sub_total;
  let ppn = 0;
  let total = 0;
  const { payload } = action;

  // find item
  const item = state.items.find((element) => element.id === payload.id);

  // if found it
  if (item) {
    // create the prev item
    const oldItems = [...state.items];

    // create a new item with map old item
    const newItems = oldItems.map((element) => {
      if (element.id === item.id) {
        element.quantity += 1;

        sub_total += item.price;
        ppn = (sub_total * 10) / 100;
        total = sub_total + ppn;

        return element;
      }

      return element;
    });

    // update it
    return {
      ...state,
      items: newItems,
      sub_total: sub_total,
      ppn: ppn,
      total: total,
    };
  } else {
    payload.quantity = 1;
    sub_total += payload.price;
    ppn = (sub_total * 10) / 100;
    total = sub_total + ppn;

    // store it to state
    return {
      ...state,
      items: [...state.items, payload],
      sub_total: sub_total,
      ppn: ppn,
      total: total,
    };
  }
};

const increment_cart = (state, action) => {
  let sub_total = state.sub_total;
  let ppn = 0;
  let total = 0;

  const { id } = action.payload;
  // find item
  const item = state.items.find((element) => element.id === id);

  // create the prev state
  const oldItems = [...state.items];

  // create a new item with map old item
  const newItems = oldItems.map((element) => {
    // if element id same with item id
    if (element.id === item.id) {
      // update quantity, sub total, ppn, and total
      element.quantity += 1;

      sub_total += item.price;
      ppn = (sub_total * 10) / 100;
      total = sub_total + ppn;

      return element;
    }

    return element;
  });

  // update state
  return {
    ...state,
    items: newItems,
    sub_total: sub_total,
    ppn: ppn,
    total: total,
  };
};

const decrement_cart = (state, action) => {
  let sub_total = state.sub_total;
  let ppn = 0;
  let total = 0;

  const { id } = action.payload;
  // find item
  const item = state.items.find((element) => element.id === id);

  // create the prev state
  const oldItems = [...state.items];

  // create new item and filter it if quantity 0
  const newItems = oldItems
    .map((element) => {
      // if element same as item id
      if (element.id === item.id) {
        // decrement quantity
        element.quantity -= 1;

        // update sub total, ppn, and total
        sub_total -= item.price;
        ppn = (sub_total * 10) / 100;
        total = sub_total + ppn;

        return element;
      }

      return element;
    })
    .filter((element) => element.quantity > 0);

  // updpate state
  return {
    ...state,
    items: newItems,
    sub_total: sub_total,
    ppn: ppn,
    total: total,
  };
};

const delete_cart = (state, action) => {
  let sub_total = state.sub_total;
  let ppn = 0;
  let total = 0;

  const { id } = action.payload;
  // find item
  const item = state.items.find((element) => element.id === id);

  // create prev state
  const oldItems = [...state.items];

  // create new item and filter the prev state if not same with id
  const newItems = oldItems.filter((element) => element.id !== item.id);

  // update sub total, ppn, and total
  sub_total -= item.price * item.quantity;
  ppn = (sub_total * 10) / 100;
  total = sub_total + ppn;

  // update state
  return {
    ...state,
    items: newItems,
    sub_total: sub_total,
    ppn: ppn,
    total: total,
  };
};

const reset_cart = (state) => {
  return { ...state, items: [], sub_total: 0, ppn: 0, total: 0 };
};

// create reducer
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return add_cart(state, action);
    case actionTypes.INCREMENT_CART:
      return increment_cart(state, action);
    case actionTypes.DECREMENT_CART:
      return decrement_cart(state, action);
    case actionTypes.DELETE_CART:
      return delete_cart(state, action);
    case actionTypes.RESET_CART:
      return reset_cart(state);
    default:
      return state;
  }
};

export default reducers;
