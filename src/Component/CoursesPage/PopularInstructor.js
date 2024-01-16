import React from 'react';
import { FaStar } from "react-icons/fa";

const PopularInstructor = () => {
    const instructors = [
        {
          name: "Dr. Angela Yu",
          course: "Python, Datascience",
          rating: 4.6,
          students: 7894561,
          courses: 7,
          img: "https://img-c.udemycdn.com/user/75x75/31334738_a13c_3.jpg",
        },
        {
          name: "Maximillian",
          course: "React JS, React Hooks",
          rating: 4.3,
          students: 794561,
          courses: 42,
          img: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
        },
        {
          name: "Jonas",
          course: "Javascript, React JS",
          rating: 4.8,
          students: 784561,
          courses: 48,
          img: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
        },
        {
          name: "Jose Portilla",
          course: "Python, Datascience",
          rating: 4.0,
          students: 94561,
          courses: 54,
          img: "https://img-c.udemycdn.com/user/75x75/9685726_67e7_4.jpg",
        },
      ];
  return (
    <>
      <div className="popular-instructor-container">
          <h2>Popular Instructors</h2>
          <div className="instructor-container-box">
            {instructors.map((item, index) => {
              return (
                <div className="instructors" key={index}>
                  <div className="instructor-img">
                    <img src={item.img} alt="not found" className="immgfil" />
                  </div>
                  <div className="instructor-content">
                    <h4 style={{ marginBottom: 0, marginTop: "3%" }}>
                      {item.name}
                    </h4>
                    <p style={{ margin: 0 }}>{item.course}</p>
                    <p style={{ margin: 0 }}>
                      {item.rating}
                      <FaStar color="#ffb800" />
                      Instructor Rating
                    </p>
                    <p style={{ margin: 0 }}>{item.students} Students</p>
                    <p style={{ margin: 0 }}>{item.courses} courses</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}

export default PopularInstructor
