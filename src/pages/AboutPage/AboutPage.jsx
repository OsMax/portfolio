import css from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div style={{ padding: 10, maxWidth: 1200, margin: "0 auto" }}>
      <div>
        <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
          <span style={{ color: "#C778DD" }}>/</span>about-me
        </h2>
        <p style={{ margin: 0, paddingLeft: 10, color: "#888", fontSize: 12 }}>
          Who am I?
        </p>
        <div className={css.container}>
          <img
            className={css.foto}
            src={require("../../assets/aboutImg.webp")}
            alt="Maksym Osovik"
            width="95%"
          />
          <div className={css.forText}>
            <p className={css.aboutText}>Hello, i'm Maksym!</p>
            <p className={css.aboutText}>
              FullStack developer with knowledge of HTML, CSS, JavaScript,
              React, React-Native, Redux and Node.js.
              <br />
              Conscientious, flexible, and creative person, always ready to
              learn and gain new experiences. Analytical skills allow me to
              quickly find solutions to complete a given task.
              <br />I have experience as team lead and as developer of a team
              project. Easily find an approach to people.
              <br />I can work both in a team and independently.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2
          style={{ color: "#fff", margin: 0, marginTop: 20, paddingLeft: 10 }}
        >
          <span style={{ color: "#C778DD" }}>/</span>my sertficates
        </h2>
        <ul className={css.serList}>
          <li
            onClick={() =>
              window.open(
                require("../../assets/certificates/Cisco.pdf"),
                "_blank"
              )
            }
          >
            <h3> IT Essentials (Cisco)</h3>
            <img
              className={css.serImg}
              src={require("../../assets/certificates/Cisco.webp")}
              alt="IT Essentials (Cisco)"
            />
          </li>
          <li
            onClick={() =>
              window.open(
                require("../../assets/certificates/GoIt.pdf"),
                "_blank"
              )
            }
          >
            <h3> FullStack developer (GoIt)</h3>
            <img
              className={css.serImg}
              src={require("../../assets/certificates/GoIt.webp")}
              alt="FullStack developer (GoIt)"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutPage;
