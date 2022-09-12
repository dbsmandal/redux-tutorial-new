import React from 'react'
import Apple from "../Images/Apple.jpg"
import Cart from "../Images/cart.jpg"

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src={Cart} alt="" />
      </div>
      <div className="cart grid">
        <div className="image-wraper">
          <img src={Apple} alt="" />
        </div>
        <div className="text-wrapper">
          <h3>I-phone-13</h3>
          <h5>Description:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum dicta enim quisquam asperiores temporibus?</h5>
        </div>
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default Home
