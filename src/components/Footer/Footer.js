import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/svgImg/logo.svg";

const Footer = () => {
  return (
    <>
      <div className={css.footerContainer}>
        <NavLink className={css.logo} to="/">
          <Logo width="20" height="20" />
          MaksOs
        </NavLink>
        <a
          href="mailto:example@example.com"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          www.osmax@gmail.com
        </a>
      </div>
    </>
  );
};
export default Footer;
