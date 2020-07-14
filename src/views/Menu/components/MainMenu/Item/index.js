import React from "react";

const Item = ({ element, clickHandler }) => (
  <li className="w-1/4 pb-5 px-2">
    <button className="w-full focus:outline-none" onClick={clickHandler}>
      <div className="relative bg-green-500 rounded-md overflow-hidden h-48">
        <img
          className="absolute h-full w-full object-cover"
          src={element.image}
          alt={element.title}
        />
      </div>

      <div className="flex flex-col items-center py-2">
        <label className="font-bold text-md text-gray-700">
          {element.title}
        </label>
        <span className="text-sm text-gray-600">Rp {new Intl.NumberFormat('de-DE').format(element.price)},-</span>
      </div>
    </button>
  </li>
);

export default Item;
