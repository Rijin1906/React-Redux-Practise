import React from 'react'

export default function Header(props) {
  return (
    <div>
          <div className="add-to-cart">
        <span className="counter">{props.cardData.length}</span>
        <img src="https://mpng.hippopng.com/20231110/fc/red-shopping-cart-metal-shopping-cart-four-wheeled-shopping-cart-for-654d857ea3e325.91599435.jpg"></img>
      </div>
    </div>
  )
}
