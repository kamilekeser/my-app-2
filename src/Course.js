import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap.png";
import Kompleweb from "./images/kompleweb.jpg";
import Frontend from "./images/frontend.jpg";
import "./course.css";

const courseMap = {
  Angular,
  Bootstrap,
  Kompleweb,
  Frontend,
};
function Course({ courseName }) {
  console.log(courseMap[courseName]);

  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
