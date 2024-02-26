import "./App.css";
import Attendance from "./Routes/Attendance/Attendance";
import Landing from "./Routes/Landing/Landing";
import Login from "./Routes/Login/Login";
import Marks from "./Routes/Marks/Marks";
import Questionnaire from "./Routes/Questionnaire/Questionnaire";
import Signup from "./Routes/Signup/Signup";
import Traits from "./Routes/Traits/Traits";
import Dashboard from "./Routes/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />}></Route>
        <Route path="/marks" element={<Marks />}></Route>
        <Route path="/traits" element={<Traits />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profquestion" element={<Questionnaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
