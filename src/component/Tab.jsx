export const Tab = ({ children, redirect }) => {
  const handleRedirect = (redirect) => {
    location.href = `http://localhost:5173/${redirect}`;
  };

  return (
    // <li className={`nav-item`} onClick={() => handleRedirect(redirect)}>
    //   {children}
    // </li>
    <li className="nav-item   mx-2">
      <a
        className="nav-link text-primary ps-2 d-flex cursor-pointer align-items-center text-capitalize"
        id=""
        aria-expanded="false"
      >
        {children}
      </a>
    </li>
  );
};
