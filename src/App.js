import Course from "./Course.js";
import "./App.css";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Kompleweb", "Frontend"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div className="course">
        {courses.map((course, index) => {
          return <Course key={index} courseName={course} />;
        })}
      </div>
    </div>
  );
}

export default App;
