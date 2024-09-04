import projects from "../../assets/project_db.json";
import css from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <div className={css.list}>
      {projects.map((project) => (
        <a key={project.name} className={css.item} href={project.link}>
          <div>
            <h3 className={css.projectName}>{project.name}</h3>
            <img
              alt={project.name}
              title={project.name}
              // src={`https://image.thum.io/get/${project.link}`}
              src={require(`../../assets/projects/${project.name}.png`)}
              className={css.projectImg}
            />
          </div>
          <div className={css.about}>
            <h4 className={css.skillsTitle}>Skills</h4>
            <div className={css.skills}>
              {project.skills.map((skill) => (
                <p key={skill}>
                  <span>#</span>
                  {skill}
                </p>
              ))}
            </div>
            {project.command ? (
              <p>Command project</p>
            ) : (
              <p>Independent project</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};
export default ProjectList;
