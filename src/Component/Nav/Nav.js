import React, { useState } from "react";
import "./Nav.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import cart from "./cart.png";
import net from "./net.png";
import { Category, SubCategory } from "./CategoriesData";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function Nav() {
  const username = useSelector((state) => state.user.username);
  console.log("username", username);
  console.log(Category, "category", SubCategory);
  const [DropDown, setDropDown] = useState(false);
  const [selectCategory, setSelectCategory] = useState(0);

  const handleSelectCategory = (i) => {
    setSelectCategory(i);
  };
  const handleDropDown = () => {
    setDropDown(!DropDown);
  };
  console.log(Category);
  const token = localStorage.getItem("token");
  return (
    <div className="ud-header">
      <div className="logo">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          width="91"
          height="34"
          loading="lazy"
        ></img>
      </div>
      <div
        className="categories"
        onMouseEnter={handleDropDown}
        onMouseLeave={handleDropDown}
      >
        <p>Categories</p>
        {DropDown && (
          <div className="dropDown">
            <div className="drop-down-list">
              {Category.map((parent, index) => (
                <NavLink
                  key={index}
                  to={`/category/${parent}`}
                  onMouseEnter={() => handleSelectCategory(index)}
                  onClick={handleDropDown}
                >
                  <div className="parent-item">
                    <div>{parent}</div>
                    <div className="gt-symbol">&gt;</div>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="sub-drop-down-list">
              {SubCategory[selectCategory].map((child, index) => (
                <NavLink
                  key={index}
                  to={`/course/${child}`}
                  onClick={handleDropDown}
                >
                  <div>{child}</div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="search-bar">
        <label id="search">
          <i className="fas fa-search"></i>
        </label>
        <input type="search" id="search" placeholder=" Search for anything" />
      </div>
      <div className="udemy-business">Udemy Business</div>
      <div className="udemy-tech">Teach on Udemy</div>
      <div className="cart">
        <Link to={"/cart"}>
          <img src={cart} alt="cart" />
        </Link>
      </div>
      {token ? (
        <div className="user-info">
          <div>
            <FontAwesomeIcon icon={faBell} size="lg" />
          </div>
          <div className="f-later">{username.charAt(0).toUpperCase()}</div>
        </div>
      ) : (
        <div className="btn-grp">
          <button className="btn-login">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="btn-sing-in">
            <Link to={"/register"}>Sign up</Link>
          </button>
          <button className="btn-ineternet">
            <img src={net} alt="net" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
