import reducer from "../cart";
import * as actionTypes from "../../actions/types";

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      sub_total: 0,
      ppn: 0,
      total: 0,
    });
  });

  it("should handle ADD_CART", () => {
    const initialState = {
      items: [],
      sub_total: 0,
      ppn: 0,
      total: 0,
    };

    const action = {
      type: actionTypes.ADD_CART,
      payload: {
        id: 1,
        title: "Nasi Goreng",
        price: 25000,
        image:
          "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
      },
    };

    const expected = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 1,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 25000,
      ppn: 2500,
      total: 27500,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("should handle INCREMENT_CART", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 1,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 25000,
      ppn: 2500,
      total: 27500,
    };

    const action = {
      type: actionTypes.INCREMENT_CART,
      payload: {
        id: 1,
      },
    };

    const expected = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 2,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 50000,
      ppn: 5000,
      total: 55000,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("should handle DECREMENT_CART", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 2,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 50000,
      ppn: 5000,
      total: 55000,
    };

    const action = {
      type: actionTypes.DECREMENT_CART,
      payload: {
        id: 1,
      },
    };

    const expected = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 1,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 25000,
      ppn: 2500,
      total: 27500,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("should handle DELETE_CART", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 2,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 50000,
      ppn: 5000,
      total: 55000,
    };

    const action = {
      type: actionTypes.DELETE_CART,
      payload: {
        id: 1,
      },
    };

    const expected = {
      items: [],
      sub_total: 0,
      ppn: 0,
      total: 0,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("should handle RESET_CART", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Nasi Goreng",
          price: 25000,
          quantity: 1,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
      sub_total: 25000,
      ppn: 2500,
      total: 27500,
    };

    const action = {
      type: actionTypes.RESET_CART,
    };

    const expected = {
      items: [],
      sub_total: 0,
      ppn: 0,
      total: 0,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
