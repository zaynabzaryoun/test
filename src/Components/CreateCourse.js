import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CreatCourse(props) {
    const [courseData, setCourseData] = useState ({
        title: "",
        slug: "",
        authorId: "",
        category: "",
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(courseData);
    }

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div>
                <label htmlFor="title">course title:</label>
                <input 
                    value={courseData.title}
                    onChange={(e) => 
                    setCourseData({...courseData, title: e.target.value})
                    }
                    type="text"
                    name="title"
                />
            </div>
            <div>
                <label htmlFor="slug">slug:</label>
                <input
                    value={courseData.slug}
                    onChange={(e)=>
                    setCourseData({...courseData, slug: e.target.value})
                    }
                    type="text"
                    name="slug"
                /> 
            </div>
            <div>
                <label htmlFor="authorId">author ID:</label>
                <input
                    value={courseData.authorId}
                    onChange={(e)=>
                    setCourseData({...courseData, authorId: e.target.value})
                    }
                    type="text"
                    name="authorId"
                    />
            </div>
            <div>
                <label htmlFor="category">category:</label>
                <input
                    value={courseData.category}
                    onChange={(e)=>
                    setCourseData({...courseData, category: e.target.value })
                    }
                    type="text"
                    name="category"
                />
            </div>
            <Button type="submit">submit</Button>
        </form>
    );
}

export default CreatCourse;