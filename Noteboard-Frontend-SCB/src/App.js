import { Routes, Route } from "react-router-dom";
import Allstudents from "./components/Allstudents";
import Navbar from "./components/Navbar";
import Individualstudent from "./components/IndividualStudent";
import Contactme from "./components/Contactme"
import Clgdetails from "./components/Clgdetails";
import DSkills from "./components/skills";



function App() {

  
  return (
    <div className="App">
      <Navbar />
      <>
          <Routes>
          <Route path="/" element={<Allstudents />} />
          <Route path="/student/:id" element={<Individualstudent />} />
          <Route path="/contact-me" element={<Contactme />} />
          <Route path="/student/clgdetails/:id" element={<Clgdetails />} />
          <Route path="/student/skills/:id" element={<DSkills />} />

        </Routes>
      </>
      
      
    </div>
  );
}

export default App;
