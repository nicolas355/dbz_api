import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Personajes</Link>
          </li>
          <li className="menu-item">
            <Link to="/sagas">Sagas</Link>
          </li>
          <li className="menu-item">
            <Link to="/videos">Videos</Link>
          </li>
          <li className="menu-item">
            <Link to="/merchandise">Merchandise</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
