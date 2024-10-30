import { NavLink } from "react-router-dom";
import { useState } from "react";
import css from "./Header.module.css";
import { ReactComponent as Burger } from "../../assets/svgImg/burger.svg";
import { ReactComponent as Close } from "../../assets/svgImg/menu_close.svg";
import { ReactComponent as Logo } from "../../assets/svgImg/logo.svg";

const setAtive = ({ isActive }) => (isActive ? css.active : css.navLink);
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navContainer}>
          <NavLink className={css.logo} to="/">
            <Logo width="24" height="24" />
            MaksOs
          </NavLink>
          <div className={`${css.menu} ${showMenu ? css.showMenu : ""}`}>
            <Close
              width="24"
              height="24"
              className={css.closeBtn}
              onClick={() => setShowMenu(false)}
            />
            <NavLink
              className={setAtive}
              to="/"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={setAtive}
              to="/skills"
              onClick={() => setShowMenu(false)}
            >
              Skills
            </NavLink>
            <NavLink
              className={setAtive}
              to="/projects"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </NavLink>
            <NavLink
              className={setAtive}
              to="/about"
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              className={setAtive}
              to="/contacts"
              onClick={() => setShowMenu(false)}
            >
              Contacts
            </NavLink>
          </div>
          <Burger
            className={css.openBtn}
            width="24"
            height="24"
            onClick={() => setShowMenu(true)}
          />
          {/* <Menu /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
