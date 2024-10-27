import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";
import { Nav } from "./Nav.jsx";

export  function Base() {
  return (
    <>
      <Nav />
      <Main></Main>
      <Footer />
    </>
  );
}
