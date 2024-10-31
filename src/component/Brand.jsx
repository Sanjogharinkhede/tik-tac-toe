import brandImage from '../assets/img/web-image/logo.jpeg';
export const Brand = ({}) => {
  return (
      <div className='d-flex align-align-items-center justify-content-center'>
      <img src={brandImage}  className="app-brand object-fit-cover "  width="32" alt="tic-tac" />
      <a className="navbar-brand" href="#">
        TIC TAC TOE
      </a>
    </div>
  );
};
