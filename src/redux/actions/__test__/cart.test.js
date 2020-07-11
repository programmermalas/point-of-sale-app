import * as actions from "../index";
import * as actionTypes from "../types";

describe("cart actions", () => {
  let payload;
  beforeEach(() => {
    payload = {
      id: 1,
      title: "Nasi Goreng",
      price: 25000,
      image: "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
    };
  });

  it("should create an action to add a item into cart", () => {
    const expectedAction = {
      type: actionTypes.ADD_CART,
      payload: payload,
    };

    expect(actions.add_cart(payload)).toEqual(expectedAction);
  });

  it("should create an action to increment item in cart", () => {
    const expectedAction = {
      type: actionTypes.INCREMENT_CART,
      payload: {
        id: payload.id,
      },
    };

    expect(actions.increment_cart(payload.id)).toEqual(expectedAction);
  });

  it("should create an action to decrement item in cart", () => {
    const expectedAction = {
      type: actionTypes.DECREMENT_CART,
      payload: {
        id: payload.id,
      },
    };

    expect(actions.decrement_cart(payload.id)).toEqual(expectedAction);
  });

  it("should create an action to delete item in cart", () => {
    const expectedAction = {
      type: actionTypes.DELETE_CART,
      payload: {
        id: payload.id,
      },
    };

    expect(actions.delete_cart(payload.id)).toEqual(expectedAction);
  });

  it("should create an action to reset cart", () => {
    const expectedAction = {
      type: actionTypes.RESET_CART,
    };

    expect(actions.reset_cart()).toEqual(expectedAction);
  });
});
