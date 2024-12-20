import ProjectList from "../../components/ProjectList/ProjectList";

const MyProjectPage = () => {
  return (
    <div
      style={{
        padding: 10,
        maxWidth: 1200,
        margin: "0 auto",
        // paddingBottom: 40,
      }}
    >
      <div>
        <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
          <span style={{ color: "#C778DD" }}>/</span>progects
        </h2>
        <p style={{ margin: 0, paddingLeft: 10, color: "#888", fontSize: 12 }}>
          List of my projects
        </p>
        <ProjectList />
      </div>
      <div style={{ marginTop: 28 }}>
        <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
          <span style={{ color: "#C778DD" }}>/</span>components
        </h2>
        <p style={{ margin: 0, paddingLeft: 10, color: "#888", fontSize: 12 }}>
          List of components
        </p>
      </div>
    </div>
  );
};
export default MyProjectPage;
