import css from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div style={{ padding: 10 }}>
      <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
        <span style={{ color: "#C778DD" }}>/</span>about-me
      </h2>
      <p style={{ margin: 0, paddingLeft: 10, color: "#888", fontSize: 12 }}>
        Who am i?
      </p>
      <div style={{ padding: 10 }}>
        <p className={css.aboutText}>Hello, i'm Maksym!</p>
        <p className={css.aboutText}>
          Front-end developer with knowledge of HTML, CSS, JavaScript, React,
          Redux and Node.js.
          <br />
          Conscientious, flexible, and creative person, always ready to learn
          and gain new experiences. Analytical skills allow me to quickly find
          solutions to complete a given task.
          <br />I have experience as team lead and as developer of a team
          project. Easily find an approach to people.
          <br />I can work both in a team and independently.
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
