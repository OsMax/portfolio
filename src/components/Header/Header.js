import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
        <NavLink to="/">Some icon</NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </section>
    </header>
  );
};

export default Header;
