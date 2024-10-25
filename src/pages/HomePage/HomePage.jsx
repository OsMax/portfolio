import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { ReactComponent as Logo } from "../../assets/svgImg/logo_back.svg";
import skills from "../../assets/skills_db.json";
import { randomPosition } from "../../helper/randomPosition";

const HomePage = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const randomSkills = () => {
    for (let i = 0; i < skills.length - 1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [skills[i], skills[j]] = [skills[j], skills[i]];
    }
    return skills.slice(0, 3);
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const totalItems = 3;

      const positions = randomPosition(
        containerWidth,
        containerHeight,
        totalItems
      );
      setPositions(positions);
    }
  }, []);

  return (
    <div className={css.mainContainer}>
      <div className={css.title}>
        <h1 className={css.h1}>Maksym Osovik</h1>
        <h2 className={css.h2}>FULLSTACK DEVELOPER</h2>
        <p className={css.skills}>
          (HTML, CSS, JS, React, Redux, React-Native, Node.js, Express, Mongodb)
        </p>
      </div>
      <div className={css.fotoContainer} ref={containerRef}>
        <Logo width="90%" height="90%" className={css.logo} />
        <img
          className={css.foto}
          src={require("../../assets/main_foto.webp")}
          alt="Maksym Osovik"
          width="95%"
        />
        {randomSkills().map((skill, index) => {
          return (
            // <div  className={css.item}>
            <a
              key={skill.skill}
              href={skill.wiki}
              className={css.skillLink}
              style={{
                top: `${positions[index]?.top || 0}px`,
                left: `${positions[index]?.left || 0}px`,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                // key={skill.skill}
                alt={skill.skill}
                title={skill.skill}
                src={require(`../../assets/skills/${skill.img}`)}
                className={css.skillImg}
              />
            </a>
            // </div>
          );
        })}
      </div>
      <nav className={css.nav}>
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
      </nav>
    </div>
  );
};

export default HomePage;
