import {useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Rating from "./Rating";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import CartButton from "./CartButton";
import PopularTopics from "./PopularTopics";
import "./CoursesPage.css";
import PopularInstructor from "./PopularInstructor";
import Filters from "./Filters";

function CoursesPage() {
  const {data} = useSelector((state) => state.courses);
  
  const name = useParams().name;
  console.log(name);
  const categoriesMap = {
    development: [
      "web development",
      "data science",
      "mobile development",
      "programming language",
    ],
    business: ["entrepreneurship", "communication", "management", "sales"],
    "Finance & Accounting": [
      "Accounting & Bookkeeping",
      "Compliance",
      "Cryptocurrency & Blockchain",
      "Economics",
      "Finance",
    ],
    "IT & Software": [
      "IT Certifications",
      "Network & Security",
      "Hardware",
      "Operating Systems & Servers",
      "Other IT & Software",
    ],
    "Office Productivity": ["Microsoft", "Apple", "Google", "SAP", "Oracle"],
    "Personal Development": [
      "Personal Transformation",
      "Personal Productivity",
      "Leadership",
      "Career Development",
      "Parenting & Relationships",
    ],
    "Teaching & Academics": [
      "Engineering",
      "Humanities",
      "Math",
      "Science",
      "Online Education",
    ],
    Music: [
      "Instruments",
      "Music Production",
      "Music Fundamentals",
      "Vocal",
      "Music Techniques",
    ],
    "Health & Fitness": [
      "Fitness",
      "General Health",
      "Sports",
      "Nutrition & Diet",
      "Yoga",
    ],
    "Photography & Video": [
      "Digital Photography",
      "Photography",
      "Portrait Photography",
      "Photography Tools",
      "Commercial Photography",
    ],
    Lifestyle: [
      "Arts & Crafts",
      "Beauty & Makeup",
      "Esoteric Practices",
      "Food & Beverage",
      "Gaming",
    ],
    Marketing: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Branding",
      "Marketing Fundamentals",
    ],
    Design: [
      "Web Design",
      "Graphic Design & Illustration",
      "Design Tools",
      "User Experience Design",
      "Game Design",
    ],
  };
  const subcats = categoriesMap[name] || [];
  let mainCategory;
  let mainCategorySubcats = [];
  if (!subcats.includes(name)) {
    Object.entries(categoriesMap).forEach(([category, subcategories]) => {
      if (subcategories.includes(name)) {
        mainCategory = category;
        mainCategorySubcats = subcategories;
      }
    });
  }
  const displaySubnav = mainCategory && mainCategorySubcats.length > 0;
 
  console.log(subcats);
  let subcat = "";
  let dummycat = data.find((item) => {
    if (item.category === name) {
      subcat = item.category;
      return item;
    } else if (item.subcategory === name) {
      subcat = item.category;
      return item;
    } else {
      subcat = undefined;
      return false;
    }
  });
  console.log("dummycat:", dummycat);
  console.log("category name:", subcat);
  const filtereddatas = data.filter(
    (item) => item.category === name || item.subcategory === name
  );
  console.log(filtereddatas);
  const [isHovered, setIsHovered] = useState(null);
  const [ishoveredtwo, setIsHoveredtwo] = useState(null);

  const handleContainerHover = (index) => {
    setIsHovered(index);
  };

  const handleContainerLeave = () => {
    setIsHovered(null);
  };
  const handleContainerHovertwo = (index) => {
    setIsHoveredtwo(index);
  };
  const handleContainerLeavetwo = () => {
    setIsHoveredtwo(null);
  };
  return (
    <div>
      <div className="sub-nav">
        {displaySubnav ? (
          <>
            <NavLink to={`/course/${mainCategory}`}>
              <h5>{mainCategory}</h5>
            </NavLink>
            <div>
              <img
                src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
                alt="not found"
              />
            </div>
            {mainCategorySubcats.map((item, index) => {
              return (
                <NavLink
                  key={index}
                 
                  to={`/course/${item}`}
                >
                  <h5 key={index} >
                    {item}
                  </h5>
                </NavLink>
              );
            })}
          </>
        ) : (
          <>
            <NavLink to={`/course/${name}`}>
              <h5>{name}</h5>
            </NavLink>
            <div className="arrow-img">
              <img
                src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
                alt="not found"
                
              />
            </div>
          </>
        )}

        {subcats.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/course/${item}`}
            >
              <h5 key={index} >
                {item}
              </h5>
            </NavLink>
          );
        })}
      </div>
      <div className="course-container">
        <h1>{name} Courses</h1>
        <h2>Courses to get you started</h2>
        <h4>Most popular</h4>
        <div className="line">
         
        </div>
        <div className="most-popular">
          {data
            .filter((item) => item.category === subcat && item.id % 2 === 0)
            .slice(0, 5)
            .map((item, index) => {
              const bestsel = index === 1 || index === 3;
              return (
                <div
                  className={`popular-item ${
                    isHovered === index ? "hovered" : ""
                  }`}
                  key={index}
                  onMouseEnter={() => handleContainerHover(index)}
                  onMouseLeave={handleContainerLeave}
                >
                  <div>
                    <img src={item.image} alt="not found" className="imgfil" />
                  </div>
                  {isHovered === index && (
                    <div className="popup-container">
                      <div className="arrow"></div>
                      <div >
                        <h3>{item.topic}</h3>
                        <h5>What you&apos;ll learn</h5>
                        <ul className="pointlist">
                          <li>{item.point1}</li>
                          <li>{item.point2}</li>
                          <li>{item.point3}</li>
                        </ul>
                        <div className="cart-btn-container">
                          <CartButton item={item} />
                          <div className="heart_img">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9nKX4mmWawwlgehpJGHNxT5OcxKVlRsIzA&usqp=CAU"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="topicitem">
                    <h5 className="topicfont">{item.topic}</h5>
                    <p className="pmargin">{item.instructor}</p>
                    <div className="rating_div">
                      {item.rating}
                      <div>
                        <Rating rating={item.rating} />
                      </div>
                      (3256)
                    </div>
                    <h4 style={{ marginTop: "1%" }}>₹{item.offerPrice}</h4>
                    {bestsel && <h4 className="bestsel">Bestseller</h4>}
                  </div>
                </div>
              );
            })}
        </div>
        <PopularTopics/>
        <PopularInstructor/>
        
        <div className="all-courses">
          <h2>All {name} Courses</h2>
          <div className="all-courses-container">
            <Filters/>
        
            <div className="right-container">
              {filtereddatas.slice(0, 8).map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`item-container ${
                        ishoveredtwo === index ? "hovered" : ""
                      }`}
                      onMouseEnter={() => handleContainerHovertwo(index)}
                      onMouseLeave={handleContainerLeavetwo}
                    >
                      <div className="item-img">
                        <img
                          src={item.image}
                          alt="not found"
                        />
                      </div>
                      {ishoveredtwo === index && (
                        <div className="popup-containertwo">
                          <div className="arrow"></div>
                          <div className="additional-content">
                            <h4 style={{ margin: 0 }}>{item.topic}</h4>
                            <h5>What you&apos;ll learn</h5>
                            <ul className="pointlist">
                              <li>{item.point1}</li>
                              <li>{item.point2}</li>
                              <li>{item.point3}</li>
                            </ul>
                            <div className="cart-btn-container">
                              <CartButton item={item} />
                              <div className="heart_img">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9nKX4mmWawwlgehpJGHNxT5OcxKVlRsIzA&usqp=CAU"
                                  alt="not found"
                                 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="item-content">
                        <h4>{item.topic}</h4>
                        <p>{item.instructor}</p>
                        <div className="rating-div">
                          {item.rating}
                          <div>
                            <Rating rating={item.rating} />
                          </div>
                          (3256)
                        </div>
                        <p className="padd">
                          {item.duration} total hours . {item.lectures} lectures
                          . All levels
                        </p>
                      </div>
                      <div className="item_pricediv">
                        <h4>₹{item.offerPrice}</h4>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;
