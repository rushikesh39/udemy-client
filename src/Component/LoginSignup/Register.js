import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./LoginSignup.css";
import jwt_decode from 'jwt-decode';
import { setUsername } from '../store/userSlice';
import { useDispatch} from 'react-redux';

function Register() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name.trim()) {
      alert("Enter Name!\nIt is mandatory!!");
    } else if (!data.email.includes("@")) {
      alert("Enter valid email address!!");
    } else if (!data.password.trim()) {
      alert("Enter Password!");
    } else {
      console.log(data);
      axios.post("https://udemy-server-i52o.onrender.com/register", data) 
      .then((res) => {
          console.log(res.data.token);
          localStorage.setItem('token', res.data.token);
          alert(res.data.msg);
          // alert("Please login!");
          navigate("/");
          localStorage.setItem("token", res.data.token);
          const decoded = jwt_decode(res.data.token);
          console.log("token decode",decoded)
          dispatch(setUsername(decoded.name))
          
      })
      .catch(err => console.log(err));
  setData({ name: "", email: "", password: "" });
    }
  };
  return (
    <div>
      <div className="register">
        <h3>Sign up and start learning</h3>
        <form>
          <div className="form-input">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              value={data.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-input">
            {/* <label htmlFor='email'>Email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@gmail.com"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-input">
            {/* <label htmlFor='pass'>Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleInput}
            />
          </div>
          <div className="check-container">
            <div className="form-check">
              <input className="check" type="checkbox" checked />
            </div>
            <div className="form-checknotice">
              <p>
                Send me special offers, personalized recommendations, and
                learning tips.
              </p>
            </div>
          </div>
          <button className="submit" onClick={handleSubmit}>
            Sign up
          </button>
          <p className="fontsi">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
          <hr />
          <NavLink to="/login" className="navdeco">
            <h4 className="navdeco">
              Already have an account? <span className="loginspan">Log in</span>
            </h4>
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
