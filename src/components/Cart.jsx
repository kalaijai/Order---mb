import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Orders</h2>
      {cart.length === 0 ? (
        <p>No food ordered yet 🍴</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>₹{item.price} x {item.qty}</p>
              <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear All</button>
        </div>
      )}
    </div>
  );
};

export default Cart;