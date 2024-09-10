import css from "./SkillsPage.module.css";
// import { ReactComponent as MySkills } from "../../assets/skills/mySkills.svg";
import SkillsList from "../../components/SkillsList/SkillsList";

const SkillsPage = () => {
  return (
    <div className={css.skillsContainer}>
      {/* <div className={css.titleContainer}>
        <MySkills className={css.title} />
      </div> */}{" "}
      <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
        <span style={{ color: "#C778DD" }}>/</span>skills
      </h2>
      <p style={{ margin: 0, paddingLeft: 10, color: "#888", fontSize: 12 }}>
        List of my skills
      </p>
      <SkillsList />
    </div>
  );
};
export default SkillsPage;
