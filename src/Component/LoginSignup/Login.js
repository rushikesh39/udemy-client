import axios from 'axios';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./LoginSignup.css"
import jwt_decode from 'jwt-decode';
import { setUserinfo} from '../store/userSlice';
import { useDispatch} from 'react-redux';

function Login() {
    const dispatch=useDispatch()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        console.log("login...")
        e.preventDefault();
        if (!data.email || !data.email.includes("@")) {
            alert("Enter a valid email address!!");
          } else if (!data.password || !data.password.trim()) {
            alert("Enter a password!");
          }
        else {
            console.log(data);
            axios.post("https://udemy-server-i52o.onrender.com/login", data) 
            .then((res) => {
                console.log(res.data.token)
                alert(res.data.msg);
                if (res.data.msg === "Success") {
                    localStorage.setItem("token", res.data.token);
                    const decoded = jwt_decode(res.data.token);
                    console.log("token decode",decoded)
                    dispatch(setUserinfo(decoded))
                    
                    
                    navigate("/");
                    // window.location.reload(true)
                }
            })
            .catch(err => console.log(err));
        setData({ email: "", password: "" })
        }
    }
    return (
        <div>
            <div className='register'>
                <h3>Log in to your Udemy account</h3>
                <form>
                    <div className='signup-option'>
                        <div>
                            <FcGoogle size={"40px"}/>
                        </div>
                        <h4 >Continue with Google</h4>
                    </div>
                    <div className='signup-option'>
                        <div>
                            <FaFacebook color='rgb(59,89,152)' size={"40px"} />
                        </div>
                        <h4 >Continue with Facebook</h4>
                    </div>
                    <div className='signup-option'>
                        <div>
                            <FaApple size={"40px"}/>
                        </div>
                        <h4>Continue with Apple</h4>
                    </div>
                    <div className='form-input'>
                        
                        <input type='email' name='email' id='email' placeholder='Email' value={data.email} onChange={handleInput} />
                    </div>
                    <div className='form-input'>
                        
                        <input type='password' name='password' id='pass' placeholder='Password' value={data.password} onChange={handleInput} />
                    </div>

                    <button className='submit' onClick={handleSubmit}>Log in</button>
                    <p style={{ textAlign: "center",margin:"10px" }}>or <span className='forgot-pass'>Forgot Password</span></p>
                    <hr />
                    <NavLink to="/register" ><h4 className='navdeco'>Don&apos;t have an account? <span className='forgot-pass'>Sign up</span></h4></NavLink>
                    <p className='login-org'>Log in with your organization</p>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login