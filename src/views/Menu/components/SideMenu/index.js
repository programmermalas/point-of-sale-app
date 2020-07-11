import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideMenu = () => {
  // get global state
  const menu = useSelector((state) => state.menu);

  let lastMenu = null;
  let lastSubMenu = null;

  const lists = [];
  menu.menus.forEach((element) => {
    // if menu not same as last menu push the header list
    if (element.menu !== lastMenu) {
      lists.push(
        <li
          key={element.menu}
          className="font-semibold text-lg text-green-700 px-10 py-5"
        >
          {element.menu}
        </li>
      );
    }

    // if sub menu not same as last sub menu push the list
    if (element.sub_menu !== lastSubMenu) {
      lists.push(
        <Link key={element.id} to={`/${element.sub_menu}`}>
          <li className="font-medium text-md text-gray-700 px-10 py-3 hover:bg-green-200 hover:text-green-700">
            {element.sub_menu}
          </li>
        </Link>
      );
    }

    lastMenu = element.menu;
    lastSubMenu = element.sub_menu;
  });

  // default show
  let show = <div className="text-center py-5">Loading...</div>;

  if (menu.menus.length > 0) {
    show = (
      <>
        <Link to="/">
          <li
            key="0"
            className="font-semibold text-md text-gray-700 px-10 py-3 hover:bg-green-200 hover:text-green-700"
          >
            All
          </li>
        </Link>
        {lists}
      </>
    );
  }

  return <ul className="w-3/12 border-r-2 overflow-y-auto">{show}</ul>;
};

export default SideMenu;
