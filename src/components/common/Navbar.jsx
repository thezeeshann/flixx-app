import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">FLIXX</a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/shows" className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }>
                {" "}
                TV Shows
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
