import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  // get global state
  const cart = useSelector((state) => state.cart);

  // destructuring cart
  const { sub_total, ppn, total } = cart;

  return (
    <div className="flex flex-col border-t pb-5">
      <ul>
        <li className="flex justify-between font-medium text-gray-600 pt-3">
          Subtotal <span>Rp {sub_total},-</span>
        </li>
        <li className="flex justify-between font-medium text-gray-600 pt-3">
          PPN 10% <span>Rp {ppn},-</span>
        </li>
        <li className="flex justify-between font-bold text-gray-700 py-5">
          Total
          <span>Rp {total},-</span>
        </li>
      </ul>

      <div className="flex -mx-2">
        <div className="w-1/6 px-2">
          <Link to="/order">
            <button className="w-full font-semibold text-md text-white bg-green-500 py-2 focus:outline-none focus:bg-green-700">
              <FontAwesomeIcon className="text-lg" icon={faClipboardList} />
            </button>
          </Link>
        </div>

        <div className="w-5/6 px-2">
          <Link to="/checkout">
            <button
              className="w-full font-semibold text-md text-white bg-green-500 py-2 focus:outline-none focus:bg-green-700"
              disabled={cart.items.length > 0 ? false : true}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
