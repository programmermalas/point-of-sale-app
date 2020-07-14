import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const Menu = () => {
  // create state search
  const [search, setSearch] = useState("");

  // create handle search
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-100">
      <NavBar search={search} onHandleSearch={handleSearch} />

      <div className="flex-1 flex overflow-y-hidden">
        <div className="w-9/12 flex">
          <SideMenu />

          <MainMenu search={search} />
        </div>

        <div className="w-3/12 flex flex-col justify-between shadow-lg bg-gray-100 px-5">
          <Cart />

          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Menu;
