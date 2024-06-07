import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Certifications from "./assets/pages/Certifications";
import Projects from "./assets/pages/Projects";
import Gallery from "./assets/pages/Gallery";
import Contacts from "./assets/pages/Contacts";
import Layout from "./assets/components/Layout";
import ProjectDetails from "./assets/pages/ProjectDetails";
import ProjectLayout from "./assets/components/ProjectLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/projects" element={<ProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path="details" element={<ProjectDetails />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}
