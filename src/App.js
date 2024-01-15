// import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Login from './Component/LoginSignup/Login';
import Register from './Component/LoginSignup/Register';
import CoursesPage from './Component/CoursesPage/CoursesPage';
import { useEffect } from 'react';
import { setData } from './Component/store/coursesSlice';
import { useDispatch} from 'react-redux';
import Cart from './Component/Cart/Cart';
import jwt_decode from 'jwt-decode';
import { setUsername } from './Component/store/userSlice';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('https://udemy-server-i52o.onrender.com/courses');
        const result = await response.json();
        dispatch(setData(result));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, [dispatch]);
  const token = localStorage.getItem('token');
  console.log("token",token)
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode(token);
        console.log("token decode",decoded)
        dispatch(setUsername(decoded.name))
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token,dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
   
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/course/:name" element={<CoursesPage/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          {/* <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/mylearn' element={<Mylearning />}></Route> */}
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
