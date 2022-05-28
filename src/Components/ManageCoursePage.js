import React, {useState} from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap"


function ManageCoursePage(props) {
    // the useLocation hook is from react-router-dom and can get the pathname of the url or the state (that has been pass through the Link from the coursePage component )
    const location = useLocation();
    console.log(location);

    const [searchParams] = useSearchParams({});

    const [updatedCourse, setUpdatedCourse] = useState({
        title: "",
        slug: "",
        authorId: "",
        category: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updatedCourse);
        setUpdatedCourse({
            title: "",
            slug: "",
            authorId: "",
            category: "",

        });
    };


    return(
        <div>
            <Link to="/courses">courses</Link>
            <h1>manage course</h1>
            <h4>your state that has come from your link is: {location.state}</h4>
            <div>
                <span style={{color:"red"}}>
                this is the pathname and the params
                 </span>
                 {location.pathname}
            </div>

            <span style={{color: "blue"}}>this is the query string:</span>
            {searchParams.get("name")}

            <form onSubmit={(e)=> handleSubmit(e)} autoComplete="off">
                <div>
                    <label htmlFor="title">course title:</label>
                    <input
                        type="text"
                        name="title"
                        value={updatedCourse.title}
                        onChange={(e) => {
                        setUpdatedCourse({...updatedCourse, title: e.target.value});
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="slug">course slug:</label>
                    <input
                        type="text"
                        name="slug"
                        value={updatedCourse.slug}
                        onChange={(e) => {
                        setUpdatedCourse({...updatedCourse, slug: e.target.value});
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="authorId">course author ID:</label>
                    <input
                        type="text"
                        name="authorId"
                        value={updatedCourse.authorId}
                        onChange={(e) => {
                        setUpdatedCourse({...updatedCourse, authorId: e.target.value});
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="category">course category:</label>
                    <input
                        type="text"
                        name="category"
                        value={updatedCourse.category}
                        onChange={(e) => {
                        setUpdatedCourse({...updatedCourse, category: e.target.value});
                        }}
                    />
                </div>
                <Button type="submit">submit</Button>
            </form>
        </div>     
    );
}

export default ManageCoursePage;