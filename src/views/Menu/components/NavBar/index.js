import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const navbar = ({ search, onHandleSearch }) => {
  // handle search with lifting state up
  const handleSearch = (event) => {
    const { value } = event.target;

    onHandleSearch(value);
  };

  return (
    <nav className="flex">
      {/* left side */}
      <div className="w-9/12 flex items-center shadow-lg py-2">
        <div className="w-3/12 px-10">
          <label className="text-xl font-bold text-green-700">Coffee.In</label>
        </div>

        <div className="w-9/12 px-5">
          <input
            type="text"
            className="w-full font-semibold text-green-700 bg-gray-300 py-2 px-4 focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* right side */}
      <div className="w-3/12 flex bg-gray-100 shadow-lg px-5">
        <span className="w-full flex justify-center items-center text-lg text-center font-semibold text-gray-700 border-b">
          <FontAwesomeIcon className="text-sm mr-1" icon={faShoppingBasket} />
          Cart
        </span>
      </div>
    </nav>
  );
};

export default navbar;
