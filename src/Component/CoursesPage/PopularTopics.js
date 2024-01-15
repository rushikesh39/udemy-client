import React from 'react'

const PopularTopics = () => {
    const topics = [
        "Python",
        "Data Science",
        "React JS",
        "Java",
        "c#",
        "Web Development",
        "Javascript",
        "Unreal Engine",
        "Machine Learning",
        "Deep Learning",
      ];
  return (
  
      <div className="popular-topic">
          <h2>Popular topics</h2>
          <div className="popular-topic-container">
            {topics.map((item, index) => {
              return (
                <p key={index} className="popular-topics">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
    
  )
}

export default PopularTopics
