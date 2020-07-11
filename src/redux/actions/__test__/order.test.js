import * as actions from "../index";
import * as actionTypes from "../types";

describe("order actions", () => {
  it("should create an action to add order", () => {
    const payload = {
      no: 1,
      date: "01/01/2001",
      items: [
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
      sub_total: 25000,
      ppn: 2500,
      total: 27500,
    };

    const expectedAction = {
      type: actionTypes.ADD_ORDER,
      payload: payload,
    };

    expect(actions.add_order(payload)).toEqual(expectedAction);
  });
});
