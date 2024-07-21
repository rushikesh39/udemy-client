import { useEffect, useState } from "react";
import "./Nav.css";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Category, SubCategory } from "./CategoryData";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../Cart/Redux/CartSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
// import { jwtDecode } from "jwt-decode";

function NavbarCompo() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isParent,setParent]=useState(true)
  const [isChild,setChild]=useState(false)
  const [selectOption, setSelectOption] = useState(0);
  const [showlogroute, setlogroute] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setlogged] = useState(false);
  const [userinfo, setUserInfo] = useState(null);
  // const [userFlatter,setUserFlatter]=useState(null)

 

  function handleParentChild(){
    setParent(!isParent)
    setChild(!isChild)
  }
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   try {
  //     const decodedToken = jwtDecode(token);

  //     if (decodedToken) {
  //       console.log('Decoded Token:', decodedToken);
  //       const email=decodedToken.email;
  //       console.log(email)
  //       const firstLetter = email.charAt(0).toUpperCase();
  //       console.log(firstLetter)
  //       setUserFlatter(firstLetter)
  //       setlogged(true);
  //       // Now you can access the decoded information in decodedToken
  //     } else {
  //       console.error('Invalid Token');
  //     }
  //   } catch (error) {
  //     console.error('Error decoding token:', error.message);
  //   }
  // }, [token]);
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const navi = useNavigate();

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleSelectOption = (index) => {
    setSelectOption(index);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://udemyclone-backend.onrender.com/data/search?searchText=${searchText}`
      );
      const searchResult = response.data;
      console.log(response.data);
      console.log(searchResult.length);
      if (searchResult.length === 0) {
        alert("Results not found!");
        setSearchText("");
        navi("/");
      } else {
        navi("/search", { state: { searchResult, searchText } });
        setSearchText("");
      }
    } catch (err) {
      console.log("Error searching:", err);
    }
  };

  const logoutfun = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    setlogged(false);
    setUserInfo(null);
    dispatch(resetCart());
    navi("/");
  };

  useEffect(() => {
    if (token) {
      axios
        .get("https://udemyclone-backend.onrender.com/api/auth", { headers: { "authorization": `Bearer ${token}` } }) 
        .then((res) => {
          console.log(res.data.msg);
          console.log(res.data.userdata);
          if (res.data.msg === "User Authorized") {
            setlogged(true);
            localStorage.setItem("userID", res.data.userdata.email);
            setUserInfo(res.data.userdata);
            setlogroute(false);
          }
        })
        .catch((err) => console.log(err));
    }
    
  }, [token]);

  return (
    <div>
      <div className="mobile-nav-container">
        <div className="hambugger">
          <FaBars size={"20px"} onClick={handleDropDown} />
        </div>
        {isDropDown && (
            <div className="mobile-dropdown">
              <button onClick={handleDropDown} className="cross-btn">X</button>
              {isParent&&
              <div className="parent">
              <div className="userinfo">
              <NavLink to={"/login"} onClick={handleDropDown}>Log in</NavLink>
              <NavLink to={"/register"} onClick={handleDropDown}>Sign in</NavLink>
              </div>
              <hr/>
              <h4>Most Popular</h4>
              {Category.map((parent, index) => (
                <NavLink
                  key={index}
                  to={`/category/${parent}`}
                  onClick={() => {
                    handleSelectOption(index);
                    handleParentChild();
                  }}
                >
                  <div>{parent}</div>
                  <RiArrowRightSLine />
                </NavLink>
              ))}
            </div>
              }
              {isChild &&
              <div className="child">
                <div className="menu" onClick={handleParentChild}>&lt;  Menu</div>
              {SubCategory[selectOption].map((child, index) => (
                <NavLink
                  key={index}
                  to={`/category/${child}`}
                  onClick={handleDropDown}
                >
                  <div>{child}</div>
                </NavLink>
              ))}
            </div>
              }
              
            </div>
          )}
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="not found"
            />
          </Link>
        </div>
        <div className="cart-search">
          <div className="searchbar_div">
            <button>
              <IoIosSearch size={"1.5em"} onClick={handleSearch} />
            </button>
            <input
              className="searchbar"
              type="text"
              placeholder="Search for anything"
              value={searchText}
              onChange={handleInput}
            ></input>
          </div>
          <div className="navbar_cat cartlogo">
            <NavLink
              to={"/cart"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {itemsInCart.length > 0 ? (
                <div className="itemscartcount_round">{itemsInCart.length}</div>
              ) : (
                ""
              )}
              <MdOutlineShoppingCart
                size={"1.5em"}
                style={{ margin: "15px 0px 0px 0px" }}
              />
            </NavLink>
          </div>
        </div>
      </div>




      <header>
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="not found"
            />
          </Link>
        </div>
        <nav onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
          <button className="dropDownButton">Categories</button>
          {isDropDown && (
            <div className="dropDown">
              <div className="parent">
                {Category.map((parent, index) => (
                  <NavLink
                    key={index}
                    to={`/category/${parent}`}
                    onMouseEnter={() => handleSelectOption(index)}
                    onClick={handleDropDown}
                  >
                    <div>{parent}</div>
                    <RiArrowRightSLine />
                  </NavLink>
                ))}
              </div>
              <div className="child">
                {SubCategory[selectOption].map((child, index) => (
                  <NavLink
                    key={index}
                    to={`/category/${child}`}
                    onClick={handleDropDown}
                  >
                    <div>{child}</div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
        <div className="searchbar_div">
          <button>
            <IoIosSearch size={"1.5em"} onClick={handleSearch} />
          </button>
          <input
            className="searchbar"
            type="text"
            placeholder="Search for anything"
            value={searchText}
            onChange={handleInput}
          ></input>
        </div>
        <div className="navbar_cat">
          <h4 className="navbar_mainfont">Teach on Udemy</h4>
        </div>
        {isLoggedIn ? (
          <div className="navbar_cat">
            <NavLink
              to="/mylearn"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h4 className="navbar_mainfont">My Learning</h4>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <div className="heartlogo">
            <FaRegHeart size={"1.3em"} />
          </div>
        ) : (
          ""
        )}
        <div className="navbar_cat cartlogo">
          <NavLink
            to={"/cart"}
            style={{ textDecoration: "none", color: "black" }}
          >
            {itemsInCart.length > 0 ? (
              <div className="itemscartcount_round">{itemsInCart.length}</div>
            ) : (
              ""
            )}
            <MdOutlineShoppingCart
              size={"1.5em"}
              style={{ margin: "15px 0px 0px 0px" }}
            />
          </NavLink>
        </div>
        {isLoggedIn ? (
          <div
            className="usernav"
            onMouseEnter={() => setlogroute(true)}
            onMouseLeave={() => setlogroute(false)}
          >
            <div className="profilediv">
            <span className="spanclass">
  {userinfo?.uname?.charAt(0) }
</span>

            </div>
            {showlogroute && (
              <div className="logroute">
                <h5>{userinfo.uname}</h5>
                <hr />
                <h5 onClick={logoutfun}>Logout</h5>
              </div>
            )}
          </div>
        ) : (
          <div className="butdiv_nav">
            <div className="logbut_nav">
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/login"
              >
                <h5>Log in</h5>
              </NavLink>
            </div>
            <div className="logbut_nav signupbut">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/register"
              >
                <h5>Sign up</h5>
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavbarCompo;
