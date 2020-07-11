import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";

const Cart = () => {
  // get date now
  const today = new Date();

  // create state date
  const [state] = useState({
    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
  });

  // get global state
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  // dispatch action
  const dispatch = useDispatch();

  const lists = [];
  cart.items.forEach((element) => {
    lists.push(
      <li key={element.id} className="flex justify-between items-center mt-2">
        <div>
          <label className="font-medium text-sm text-gray-700">
            {element.title}
          </label>
          <p className="font-medium text-sm text-gray-600">
            Rp {element.price},-
          </p>
          <button
            className="font-medium text-sm text-gray-600 underline focus:outline-none"
            onClick={() => dispatch(actions.delete_cart(element.id))}
          >
            Hapus
          </button>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="h-6 w-6 bg-green-500 text-white focus:outline-none focus:bg-green-700"
            onClick={() => dispatch(actions.decrement_cart(element.id))}
          >
            -
          </button>
          <label className="h-6 w-6 text-center text-gray-600 bg-gray-300 mx-2">
            {element.quantity}
          </label>
          <button
            className="h-6 w-6 bg-green-500 text-white focus:outline-none focus:bg-green-700"
            onClick={() => dispatch(actions.increment_cart(element.id))}
          >
            +
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex justify-between border-b py-3">
        <label className="font-medium text-gray-600">Order #{order.orders.length + 1}</label>
        <label className="font-medium text-gray-600">{state.date}</label>
      </div>

      <ul>{lists}</ul>
    </div>
  );
};

export default Cart;
