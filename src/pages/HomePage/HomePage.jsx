import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { ReactComponent as Logo } from "../../assets/svgImg/logo_back.svg";

const HomePage = () => {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.h1}>Maksym Osovik</h1>
      <h2 className={css.h2}>FULLSTACK DEVELOPER</h2>
      <p className={css.skills}>
        (HTML, CSS, JS, React, Redux, React-Native, Node.js, Express, Mongodb)
      </p>
      <div className={css.fotoContainer}>
        <Logo width="90%" height="90%" className={css.logo} />
        <img
          className={css.foto}
          src={require("../../assets/main_foto.webp")}
          alt="Maksym Osovik"
          width="95%"
        />
      </div>
      <NavLink className={css.links} to="/skills">
        <span>#</span>skills
      </NavLink>
      <NavLink className={css.links} to="/projects">
        <span>#</span>projects
      </NavLink>
      <NavLink className={css.links} to="/about">
        <span>#</span>about_me
      </NavLink>
      <NavLink className={css.links} to="/contacts">
        <span>#</span>contacts
      </NavLink>
    </div>
  );
};

export default HomePage;
