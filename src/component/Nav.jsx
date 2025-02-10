import { TabList } from "./TabList.jsx";
import { Brand } from "./Brand.jsx";
import { Hemb } from "./Hemb.jsx";

export const Nav = ({}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <div className="container-fluid">
          <Brand />
          <Hemb />
          <div
            className="collapse navbar-collapse pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <TabList />
          </div>
        </div>
      </nav>
    </>
  );
};
