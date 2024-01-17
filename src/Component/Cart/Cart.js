import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../CoursesPage/Rating";
import { deleteItem } from "../store/cartSlice";
import axios from "axios";
import "./Cart.css";
import { loadStripe } from "@stripe/stripe-js";


function Cart() {
  
  const navigator = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token:",token)
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  
  const totalAmt = useSelector((state) => state.cart.totalAmount);
  const navigate = () => {
    navigator("/");
  };
  const handleDelete = (item) => {
    dispatch(deleteItem(item));
  };
  const buynow = async () => {
    alert("Proceed to Payment!");
    

    try{
      
      const stripe = await loadStripe('pk_test_51OFa7xSI55uByng4QDyDPgrBXyjuhIwSSoV3jedpIhWA8w4930eNQp6kud38l7o6tNyNXxWeaVoU5IoPlz7rChVg00MkbRUNtp');
  
      const body={
        products:itemsInCart
      }
      const headers={
        "Content-Type":"application/json"
      }
      const response=await fetch("https://udemy-server-i52o.onrender.com/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body),
      })
      const session=await response.json()
  
      const result=stripe.redirectToCheckout({
        sessionId:session.id
      })
      if(result.error){
        console.log(result.error)
      }
  
      }
      catch(e){
        console.log("error",e)
      }
  
    
  };
  useEffect(() => {
    if (token) {
      axios
        .get("https://udemy-server-i52o.onrender.com//api/auth", {
          headers: { authorization: `Bearer ${token}` },
        }) 
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      navigator("/login");
    }
  }, [token, navigator]);
  return (
    <div>
      <div className="cartmain_div">
        <h1 style={{ textAlign: "left", fontSize: "2.4em" }}>Shopping Cart</h1>
        <h4 style={{ textAlign: "left", marginBottom: "2vh" }}>
          {itemsInCart.length} Course{itemsInCart.length > 1 && <span>s</span>}{" "}
          in Cart
        </h4>
        {itemsInCart.length > 0 ? (
          <div>
            <hr />
            <div className="cartparent_div">
              <div className="cartitems_div">
                {itemsInCart.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="eachcartitem" key={index}>
                        <div className="cartitem_imgdiv">
                          <img
                            src={item.image}
                            className="imgfil"
                            alt="not found"
                          />
                        </div>
                        <div className="cartitem_contentdiv">
                          <h4 className="padd">{item.topic}</h4>
                          <p className="padd">By {item.instructor}</p>
                          <div className="rating_div">
                            {item.rating}
                            <div>
                              <Rating rating={item.rating} />
                            </div>
                            (3256)
                          </div>
                          <p className="padd">
                            {item.duration} total hours . {item.lectures}{" "}
                            lectures . All levels
                          </p>
                        </div>
                        <div className="remove_div">
                          <p
                            style={{
                              color: "blueviolet",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDelete(item)}
                          >
                            Remove
                          </p>
                        </div>
                        <div className="courseamt_div">
                          <h3>₹{item.offerPrice}</h3>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="totaldiv">
                <h3>Total:</h3>
                <h1>₹{totalAmt}</h1>
                
                  <button onClick={buynow} className="checkout_but">
                    Checkout
                  </button>
                
          
                <hr />
                <h4>Promotions</h4>
                <input
                  type="text"
                  className="coupontext"
                  placeholder="Enter Coupon"
                />
                <button className="couponapply">Apply</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="noitemscart_div">
              <div className="noitemsimage">
                <img
                  src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg"
                  alt="not found"
                  className="imgfil"
                />
              </div>
             
                <p>Your Cart is empty. Keep shopping to find a course!</p>
                <button className="keepshopping" onClick={navigate}>
                  Keep shopping
                </button>
              
            </div>
          </div>
        )}
      </div>
      <div className="cartfooter">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
