import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";

const Cart = () => {
  // get date now
  const today = new Date();

  // create state date
  const [state, setState] = useState({
    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    id: null,
    modal: false,
  });

  // get global state
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  // dispatch action
  const dispatch = useDispatch();

  const handleModal = (id = null) => {
    setState({ id: id, modal: !state.modal });
  };

  const handleDelete = () => {
    if (state.id) {
      dispatch(actions.delete_cart(state.id));
    }

    setState({ id: null, modal: !state.modal });
  };

  const lists = [];
  cart.items.forEach((element) => {
    lists.push(
      <li key={element.id} className="flex justify-between items-center mt-2">
        <div>
          <label className="font-medium text-sm text-gray-700">
            {element.title}
          </label>
          <p className="font-medium text-sm text-gray-600">
            Rp {new Intl.NumberFormat('de-DE').format(element.price)},-
          </p>
          <button
            className="font-medium text-sm text-gray-600 underline focus:outline-none"
            onClick={() => handleModal(element.id)}
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

  const showModal = state.modal && (
    <div className="fixed z-10 inset-0 flex justify-center items-center bg-gray-900 bg-opacity-25">
      <div className="relative w-1/3 flex flex-col bg-gray-100 shadow-lg rounded-lg border">
        <div className="pt-3 pb-2 px-5">
          <h6 className="font-semibold text-xl text-gray-700">
            Apakah kamu yakin?
          </h6>
        </div>

        <div className="flex-1 pb-5 px-5">
          <p className="font-medium text-md text-gray-600">
            Apakah kamu yakin akan menghapusnya? Proses ini tidak bisa
            dikembalikan kembali.
          </p>
        </div>

        <div className="flex justify-end bg-gray-200 py-3 px-5">
          <button
            className="font-semibold text-white bg-green-500 rounded-sm py-1 px-5 ml-3"
            onClick={handleModal}
          >
            Batal
          </button>

          <button
            className="font-semibold text-white bg-red-500 rounded-sm py-1 px-5 ml-3"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {showModal}

      <div className="flex justify-between border-b py-3">
        <label className="font-medium text-gray-600">
          Order #{order.orders.length + 1}
        </label>
        <label className="font-medium text-gray-600">{state.date}</label>
      </div>

      <ul>{lists}</ul>
    </div>
  );
};

export default Cart;
