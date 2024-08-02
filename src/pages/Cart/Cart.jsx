import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { addToCart, cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  // State for promo code and discount
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Function to apply discount based on promo code
  const applyPromoCode = () => {
    let discountValue = 0;
    if (promoCode === 'Twiggy40') {
      discountValue = 40;
      toast.success(`Applied ${discountValue}% discount`);
    } else if (promoCode === 'Twiggy20') {
      discountValue = 20;
      toast.success(`Applied ${discountValue}% discount`);
    } else if (promoCode === 'Twiggy10') {
      discountValue = 10;
      toast.success(`Applied ${discountValue}% discount`);
    }
    else {
      discountValue = 0;
      toast.error("Wrong Coupon")
    }
    setDiscount(discountValue);
  };

  // Calculate total after discount
  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2.00;
  const tax = subtotal * 0.1;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + deliveryFee + tax;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}> {/* Unique key added here */}
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>-</p>
                  <p onClick={() => addToCart(item._id)} className='plus'>+</p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Return null if item is not in the cart
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Tax</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Discount</p>
              <p>-${discountAmount.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate(total > 0 ? '/order' : '/')}>
            {total > 0 ? 'PROCEED TO CHECKOUT' : 'ADD ITEMS'}
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder='Promo code'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromoCode}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
