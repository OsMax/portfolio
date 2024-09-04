import css from "./SkillsPage.module.css";
import { ReactComponent as MySkills } from "../../assets/skills/mySkills.svg";
import SkillsList from "../../components/SkillsList/SkillsList";

const SkillsPage = () => {
  return (
    <div className={css.skillsContainer}>
      <div className={css.titleContainer}>
        <MySkills className={css.title} />
      </div>
      <SkillsList />
    </div>
  );
};
export default SkillsPage;
