import React, { useState } from 'react';
import Course from '../Course/Course';
import MyReactData from '../../MyData/MyReactData';

const Shob = () => {
    const [course, setCourse] = useState(MyReactData);
    return (
        <div>
            <div className='course-container'>{
                course.map((course)=><Course course={course}></Course>)
            }

            </div>
        </div>
    );
};

export default Shob;