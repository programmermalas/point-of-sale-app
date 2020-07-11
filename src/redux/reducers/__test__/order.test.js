import reducer from "../order";
import * as actionTypes from "../../actions/types";

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      orders: [],
    });
  });

  it("should handle ADD_ORDER", () => {
    const initialState = {
      orders: [],
    };

    const action = {
      type: actionTypes.ADD_ORDER,
      payload: {
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
      },
    };

    const date = new Date();

    const dateNow = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const expected = {
      orders: [
        {
          date: dateNow,
          no: 1,
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
        },
      ],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
