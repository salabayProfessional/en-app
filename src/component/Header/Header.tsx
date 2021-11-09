import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const LinkList:React.FC<{isMenu: boolean}> = ({isMenu}) => {
  // const isAuth = useAuth();

  return (
    <ul className={`navbar-nav me-auto link-list ${isMenu && "hide"}`}>
      <li className="nav-item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
          }}
          to="/main"
        >
          main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
          }}
          to="/tests"
        >
          tests
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
          }}
          to="/story"
        >
          story
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
          }}
          to="/sign-in"
        >
          sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
          }}
          to="/profile/setting"
        >
          profile
        </NavLink>
      </li>
    </ul>
  )
}

const Header: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header-fixed">
      <div>
        <button onClick={() => setIsMobileMenu(!isMobileMenu)} className="navbar-toggler toggle-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon btn-menu"></span>
        </button>

        <LinkList isMenu={isMobileMenu}/>
      </div>
  </nav>
  )
};

export default Header;
