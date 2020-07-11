import reducer from "../menu";
import * as actionTypes from "../../actions/types";

describe("menu reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      menus: [],
    });
  });

  it("should hadnle FETCH_MENU_SUCCESS", () => {
    const initialState = {
      menus: [],
    };

    const action = {
      type: actionTypes.FETCH_MENU_SUCCESS,
      payload: [
        {
          id: 1,
          menu: "Foods",
          sub_menu: "Rice",
          title: "Nasi Goreng",
          price: 25000,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
    };

    const expected = {
      menus: [
        {
          id: 1,
          menu: "Foods",
          sub_menu: "Rice",
          title: "Nasi Goreng",
          price: 25000,
          image:
            "https://media01.stockfood.com/previews/MTQ5MjIyNzg0/12435232.jpg",
        },
      ],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
