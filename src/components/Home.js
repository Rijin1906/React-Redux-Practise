import React from "react";
function Home(props) {
  // It is connected with the help of actions components.
  console.warn("home", props.cardData);
  return (
    <div>
  
      <h1>I am Home Component.</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
        <div className="text-wrapper item">
          <span>iPhone </span>
          <span>Price : $999.00 </span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iPhone" })
            }
          >
            Add to cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default Home;
