import { Tab } from "./Tab.jsx";
import { useState } from "react";

export const Nav = ({}) => {
  return (
    <>
      <ul className="nav nav-pills">
        <Tab onSelect={handleTabClick}>Home</Tab>
        <Tab onSelect={handleTabClick}>Tic Tac Toe Game</Tab>
        <Tab onSelect={handleTabClick}>Restart</Tab>
      </ul>
    </>
  );
};
