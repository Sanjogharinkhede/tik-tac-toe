import { Nav } from "./Nav.jsx";

export function Header() {
  return (
    <header>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}
