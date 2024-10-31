import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
export function Base() {
  return (
    <>
      <Header></Header>
      <Main>
        <div className="page-header min-vh-100 bg-image">
          <span className="mask bg-gradient-dark opacity-5"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                <h1 className="text-white font-weight-black mb-4">
                  Material Kit
                </h1>
                <p className="text-white opacity-8 lead pe-5 me-5">
                  The time is now for it be okay to be great. People in this
                  world shun people for being nice.{" "}
                </p>
                <div className="buttons">
                  <button type="button" className="btn btn-white mt-4">
                    Get Started
                  </button>
                  <button
                    type="button"
                    className="btn text-white shadow-none mt-4"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer></Footer>
    </>
  );
  ū;
}
