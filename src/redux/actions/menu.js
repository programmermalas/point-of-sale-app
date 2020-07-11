import * as actionTypes from "./types";

const fetch_menu_request = () => {
  return {
    type: actionTypes.FETCH_MENU_REQUEST,
  };
};

const fetch_menu_success = (payload) => {
  return {
    type: actionTypes.FETCH_MENU_SUCCESS,
    payload: payload,
  };
};

const fetch_menu_failure = (error) => {
  return {
    type: actionTypes.FETCH_MENU_FAILURE,
  };
};

export const fetch_menu = () => {
  return (dispatch) => {
    dispatch(fetch_menu_request());

    return fetch(
      "https://my-json-server.typicode.com/BabyCode10/point-of-sale-demo/menus"
    )
      .then((response) => response.json())
      .then((body) => {
        dispatch(fetch_menu_success(body));
      })
      .catch((error) => {
        dispatch(fetch_menu_failure(error));
      });
  };
};
