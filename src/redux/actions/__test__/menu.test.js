import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../index";
import * as actionTypes from "../types";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("menu actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create fetch action", () => {
    fetchMock.getOnce(
      "https://my-json-server.typicode.com/BabyCode10/point-of-sale-demo/menus",
      {
        body: {
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
        },
      }
    );

    const expectedActions = [
      { type: actionTypes.FETCH_MENU_REQUEST },
      {
        type: actionTypes.FETCH_MENU_SUCCESS,
        payload: {
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
        },
      },
    ];

    const store = mockStore({ menus: [] });

    return store.dispatch(actions.fetch_menu()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
