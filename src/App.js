// import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import MyProjectPage from "./pages/MyProjectPage/MyProjectPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<MyProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
        {/* <Route path="catalog" element={<CarsPage />} />
        <Route path="favorite" element={<FavoritePage />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
