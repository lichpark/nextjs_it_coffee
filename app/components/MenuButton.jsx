"use client";

import { useState } from "react";

const MenuButton = (props) => {
  //console.log(props.idx);

  return (
    <li
      style={{
        flex: "1",
        backgroundColor: props.selected ? "black " : "white",
        color: props.selected ? "white " : "black",
        borderRadius: props.bdr,
      }}
    >
      <button
        style={{ width: "100%", borderRadius: props.bdr }}
        onClick={props.click}
      >
        {props.text}
      </button>
    </li>
  );
};

export default MenuButton;
