import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import CourseList from './CourseList'
import courseData from './data';


function CoursePage(){

    const navigate = useNavigate();
    return(
        <div>
            <Button onClick={() => navigate("/create-course")}> create course </Button>
            <h1>course page</h1>
            <CourseList courseData={courseData} />
        </div>
    );
}
export default CoursePage;