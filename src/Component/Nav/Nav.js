import React, { useState } from "react";
import "./Nav.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import cart from "./cart.png";
import net from "./net.png";
import { Category, SubCategory } from "./CategoriesData";
import { Link, NavLink } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { removeUserinfo } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
function Nav() {
  const {userinfo} = useSelector((state) => state.user);
  console.log("username", userinfo);
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
  const dispatch=useDispatch()
  const navi=useNavigate()
  const logout=()=>{
    localStorage.removeItem('token');
    dispatch(removeUserinfo())
    navi("/")
  }
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
      {userinfo && token ? (
        <>
        <div className="user-info">
          <div>
            <FontAwesomeIcon icon={faBell} size="lg" />
          </div>
          <div className="f-later">{userinfo.name.charAt().toUpperCase()}</div>
         
        </div>
         <div className="user-details">
          <div className="user-popup-info">
            <div className="user-f-circle">{userinfo.name.charAt().toUpperCase()}</div>
            <div className="user-popup-details">
            <p><b>{userinfo.name}</b></p>
            <p>{userinfo.email}</p>
            </div>
          </div>
          <hr/>
          <div>
            <p>My learning</p>
            <p>My Cart</p>
            <p>Watchlist</p>
            <p>Tech on Udemy</p>
          </div>
          <hr/>
          <div>
            <p>Notification</p>
            <p>Messages</p>
          </div>
          <hr/>
          <div>
            <p>Account Setting</p>
            <p>Payment Method</p>
            <p>Subscription</p>
            <p>Udemy credit</p>
            <p>Purchase History</p>
          </div>
          <hr/>
          <div>
            <p>Language</p>
          </div>
          <hr/>
          <div>
            <p>Public Profile</p>
            <p>Edit Profile</p>
          </div>
          <hr/>
          <div>
            <p>Help</p>
            <p onClick={logout}>Log out</p>
          </div>
          <hr/>
          <div>
            <p><b>Udemy Business</b></p>
            <p>Bring learning to your company</p>
          </div>

         </div>
         </>
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
