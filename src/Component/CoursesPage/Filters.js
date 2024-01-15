import React,{useState} from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import Rating from './Rating';

const Filters = () => {
    const [starview, setstarview] = useState(true);
    const [videoview, setvideo] = useState(true);
  return (
    <>
      <div className="leftcontainer">
              <div
                className="ratingdropdown"
                onClick={() => setstarview(!starview)}
              >
                <h2>Rating</h2>
                <div
                  className={`droplogo_div ${
                    !starview ? "rotate" : "rotateflip"
                  }`}
                >
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              {starview && (
                <div>
                  <div className="stars_div">
                    <input name="star" type="radio"></input>
                    <Rating rating={4.5} />
                    <p className="starratingnum" style={{ margin: 0 }}>
                      &nbsp;4.5 & up (10,000)
                    </p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="radio"></input>
                    <Rating rating={4} />
                    <p style={{ margin: 0 }}>&nbsp;4 & up (10,000)</p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="radio"></input>
                    <Rating rating={3.5} />
                    <p style={{ margin: 0 }}>&nbsp;3.5 & up (10,000)</p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="radio"></input>
                    <Rating rating={3} />
                    <p style={{ margin: 0 }}>&nbsp;3 & up (10,000)</p>
                  </div>
                </div>
              )}
              <hr />
              <div
                className="ratingdropdown"
                onClick={() => setvideo(!videoview)}
              >
                <h3>Video Duration</h3>
                <div
                  className={`droplogo_div ${
                    !videoview ? "rotate" : "rotateflip"
                  }`}
                >
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              {videoview && (
                <div>
                  <div className="stars_div">
                    <input name="star" type="checkbox"></input>
                    <p style={{ margin: 0 }}>&nbsp;0 - 1 hr (667)</p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="checkbox"></input>
                    <p style={{ margin: 0 }}>&nbsp;1 - 3 hr (667)</p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="checkbox"></input>
                    <p style={{ margin: 0 }}>&nbsp;3 - 6 hr (667)</p>
                  </div>
                  <div className="stars_div">
                    <input name="star" type="checkbox"></input>
                    <p style={{ margin: 0 }}>&nbsp;6 - 17 hr (667)</p>
                  </div>
                </div>
              )}
              <hr />
              <div className="ratingdropdown">
                <h3>Topic</h3>
                <div className={`droplogo_div`}>
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              <hr />
              <div className="ratingdropdown">
                <h3>Subcategory</h3>
                <div className={`droplogo_div`}>
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              <hr />
              <div className="ratingdropdown">
                <h3>Level</h3>
                <div className={`droplogo_div`}>
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              <hr />
              <div className="ratingdropdown">
                <h3>Language</h3>
                <div className={`droplogo_div`}>
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              <hr />
              <div className="ratingdropdown">
                <h3>Price</h3>
                <div className={`droplogo_div`}>
                  <IoMdArrowDropdown size={"2em"} />
                </div>
              </div>
              <hr />
            </div>
    </>
  )
}

export default Filters
