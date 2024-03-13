import React from "react";
import Courses from "./Courses";
import Syllabus from "./Syllabus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formss from "./Formss";
import Add from "./Add";
import Fun from "./Fun";
import Card from "./UI/Card";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Add" element={<Add />} />
          <Route path="/syllabus/:id" element={<Courses />} />
          <Route path="/" element={<Syllabus />} />
        </Routes>
      </BrowserRouter>
      {/* <Formss /> */}
      {/* <Fun /> */}

      {/* <Card /> */}
    </>
  );
};

export default App;
