import * as actionTypes from "./types";

export const add_cart = (item) => {
  return {
    type: actionTypes.ADD_CART,
    payload: {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    },
  };
};

export const increment_cart = (id) => {
  return {
    type: actionTypes.INCREMENT_CART,
    payload: {
      id: id,
    },
  };
};

export const decrement_cart = (id) => {
  return {
    type: actionTypes.DECREMENT_CART,
    payload: {
      id: id,
    },
  };
};

export const delete_cart = (id) => {
  return {
    type: actionTypes.DELETE_CART,
    payload: {
      id: id,
    },
  };
};

export const reset_cart = () => {
  return {
    type: actionTypes.RESET_CART,
  };
};
