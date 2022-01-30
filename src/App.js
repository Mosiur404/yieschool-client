import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import CreateAssessments from "./screens/CreateAssessments";
import DueAssessmentAdmin from "./screens/DueAssessmentAdmin";
import DueAssessmentTeacher from "./screens/DueAssessmentTeacher";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/assessment"
          element={
            <DueAssessmentAdmin menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/assessment/admin"
          element={
            <DueAssessmentAdmin menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/assessment/teacher"
          element={
            <DueAssessmentTeacher menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/assessment/create"
          exact
          element={
            <CreateAssessments menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
