export const Tab = ({ children, onSelect }) => {
    
  return (
    <li className="nav-item">
      <a
        className={`nav-link  text-primary`}
        aria-current="page"
        href="#"
      >
        {children}
      </a>
    </li>
  );
};
