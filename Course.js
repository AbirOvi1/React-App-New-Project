import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, instructor, price, image } = props.course;
  return (
    <div className="course">
        <div>
            <h2>
                <span>Buy Now</span>(Limited Offer)
            </h2>
        </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>Course Name: {name}</h1>
        <h1>Instructor: {instructor}</h1>
        <h1>Price: {price}</h1>
        <div className="btn">
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
