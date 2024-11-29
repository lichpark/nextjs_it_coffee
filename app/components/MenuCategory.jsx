"use client";
import { useState } from "react";
import MenuButton from "./MenuButton";

const MenuCategory = () => {
  const [menuButton, setMenuButton] = useState([
    { selected: true, menu: "전체" },
    { selected: false, menu: "커피" },
    { selected: false, menu: "더치커피" },
    { selected: false, menu: "논 커피 라떼" },
    { selected: false, menu: "티" },
  ]);

  const change = (i) => {
    setMenuButton((prev) => {
      const newArr = [...prev].map((v, idx) => {
        v.selected = idx == i;
        return v;
      });
      return newArr;
    });
  };

  return (
    <ul
      style={{
        display: "flex",
        margin: "10% auto",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      {menuButton.map((v, idx) => {
        const bdrL = "10px 0 0 10px";
        const bdrR = "0 10px 10px 0";
        if (idx == 0) {
          return (
            <MenuButton
              text={v.menu}
              key={idx}
              bdr={bdrL}
              selected={v.selected}
              click={() => change(idx)}
            />
          );
        } else if (idx == menuButton.length - 1) {
          return (
            <MenuButton
              text={v.menu}
              key={idx}
              bdr={bdrR}
              selected={v.selected}
              click={() => change(idx)}
            />
          );
        } else {
          return (
            <MenuButton
              text={v.menu}
              key={idx}
              bdr={"0"}
              selected={v.selected}
              click={() => change(idx)}
            />
          );
        }
      })}
    </ul>
  );
};

export default MenuCategory;
