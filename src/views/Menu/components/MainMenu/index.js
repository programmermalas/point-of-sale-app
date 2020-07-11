import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";
import Item from "./Item";

const MainMenu = ({ search }) => {
  // get the params page
  let { sub_menu } = useParams();

  // get global state
  const menu = useSelector((state) => state.menu);

  // dispatch action
  const dispatch = useDispatch();

  // component did update dispatch
  useEffect(() => {
    // dispatch action
    dispatch(actions.fetch_menu());
  }, [dispatch]);

  if (sub_menu === undefined) {
    sub_menu = "";
  }

  let lists = [];
  menu.menus.forEach((element) => {
    // if params page not same as sub menu return nothing
    if (element.sub_menu.indexOf(sub_menu) === -1) {
      return;
    }

    // if search not same as title return nothing
    if (element.title.indexOf(search) === -1) {
      return;
    }

    lists.push(
      <Item key={element.id} element={element} clickHandler={() => dispatch(actions.add_cart(element))} />
    );
  });

  // default show
  let show = <div className="text-center py-5">Loading...</div>;

  if (menu.menus.length > 0) {
    show = <ul className="flex flex-wrap p-5 -mx-2">{lists}</ul>;
  }

  return <div className="w-9/12 overflow-y-auto overflow-x-hidden">{show}</div>;
};

export default MainMenu;
