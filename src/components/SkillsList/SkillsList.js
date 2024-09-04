import skills from "../../assets/skills_db.json";
import css from "./SkillsList.module.css";

const SkillsList = () => {
  return (
    <div className={css.list}>
      {skills.map((skill) => (
        <div key={skill.skill} className={css.item}>
          <img
            alt={skill.skill}
            title={skill.skill}
            src={require(`../../assets/skills/${skill.img}`)}
            style={{ width: "100px", height: "100px" }}
          ></img>
        </div>
      ))}
    </div>
  );
};
export default SkillsList;
