import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/svgImg/logo.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div>
          <div className={css.email}>
            <NavLink className={css.logo} to="/">
              <Logo width="20" height="20" />
              MaksOs
            </NavLink>
            <a
              href="mailto:example@example.com"
              style={{ textDecoration: "none", color: "#999" }}
            >
              www.osmax@gmail.com
            </a>
          </div>
          <p style={{ margin: 0, marginTop: 10, color: "#fff", fontSize: 12 }}>
            FullStack Developer
          </p>
        </div>
        <div className={css.mediaContainer}>
          <p>Media:</p>
          <div className={css.media}>
            <p style={{ color: "#555" }}>none</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
