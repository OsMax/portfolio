import skills from "../../assets/skills_db.json";
import css from "./SkillsList.module.css";
import { useEffect, useRef } from "react";

const SkillsList = () => {
  const imgRefs = useRef([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      if (img) {
        setTimeout(() => {
          img.style.transition = "top 1s ease-out, left 1s ease-out";
          img.style.top = "10px";
          img.style.left = "10px";
          img.style.opacity = "1";
        }, 150);
      }
    });
    skillRefs.current.forEach((skill) => {
      if (skill) {
        setTimeout(() => {
          skill.style.transition = "opacity 2s ease-out";
          skill.style.opacity = "1";
        }, 200);
      }
    });
  }, []);

  return (
    <div className={css.list}>
      {skills.map((skill, index) => {
        const randomTop = Math.random() * -200 - 100;
        const randomLeft = Math.random() * window.innerWidth;

        return (
          <div
            ref={(el) => (skillRefs.current[index] = el)}
            key={skill.skill}
            className={css.item}
          >
            <img
              ref={(el) => (imgRefs.current[index] = el)}
              alt={skill.skill}
              title={skill.skill}
              src={require(`../../assets/skills/${skill.img}`)}
              className={css.skillImg}
              style={{
                top: `${randomTop}px`,
                left: `${randomLeft}px`,
                position: "absolute",
                opacity: 0,
                zIndex: 2,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SkillsList;
