import React from "react";
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

// import HomePage from "./pages/HomePage/HomePage";
// import SkillsPage from "./pages/SkillsPage/SkillsPage";
// import MyProjectPage from "./pages/MyProjectPage/MyProjectPage";
// import AboutPage from "./pages/AboutPage/AboutPage";
// import ContactPage from "./pages/ContactPage/ContactPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage/SkillsPage"));
const MyProjectPage = lazy(() => import("./pages/MyProjectPage/MyProjectPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<MyProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
