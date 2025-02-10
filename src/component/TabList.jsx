import { Tab } from "./Tab.jsx";

export const TabList = ({}) => {
  return (
    <ul className="navbar-nav justify-content-end w-100">
      <Tab>Home</Tab>
      <Tab>Tic tac toe</Tab>
      <Tab>About</Tab>
    </ul>
  );
};
