import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import "./Register.css";
// import { jwtDecode } from "jwt-decode";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    uname: "",
    email: "",
    pass: "",
  });
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.uname.trim()) {
      alert("Enter Name!\nIt is mandatory!!");
    } else if (!data.email.includes("@")) {
      alert("Enter valid email address!!");
    } else if (!data.pass.trim()) {
      alert("Enter Password!");
    } else {
      console.log(data);
      axios.post("https://udemyclone-backend.onrender.com/api/register", data) 
      .then((res) => {
          console.log(res.data);
          alert(res.data.msg);
          alert("Please login!");
          navigate("/login");
      })
      .catch(err => console.log(err));
  setData({ uname: "", email: "", pass: "" });
    }
  };
  return (
    <div>
      <div className="register_div">
        <h3 className="reg_heading">Sign up and start learning</h3>
        <form>
          <div className="form-group">
            {/* <label htmlFor='uname'>Name</label> */}
            <input
              type="text"
              name="uname"
              id="name"
              placeholder="Enter name"
              value={data.uname}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            {/* <label htmlFor='pass'>Password</label> */}
            <input
              type="password"
              name="pass"
              id="password"
              placeholder="Enter Password"
              value={data.pass}
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
          <button className="reg_submit" onClick={handleSubmit}>
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
