import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import CoursePage from "./Components/CoursePage"
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from "./Components/NotFound";
import ManageCoursePage from './Components/ManageCoursePage'
import CreateCourse from './Components/CreateCourse'

function App() {
  return (
    <div >
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element ={ <HomePage /> } />
        <Route path="/about" element = { <AboutPage /> } />
        <Route path="/courses" element ={ <CoursePage />} />
        <Route path="/course/:slug" element ={ <ManageCoursePage /> } />
        <Route path="/create-course" element= {<CreateCourse />} />
        <Route path="*" element = { <NotFound />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
