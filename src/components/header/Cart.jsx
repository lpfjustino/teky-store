import React from "react";
import cart from "../../static/icons/local_grocery_store.svg";

function Cart() {
  return (
    <div className="cart-container">
      <img src={cart} alt="cart icon" />
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
