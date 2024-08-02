import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { addToCart, cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const [paymentMethod, setPaymentMethod] = useState('online'); // 'online' or 'cod'

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const validateDeliveryDetails = () => {
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = data;
    return firstName && lastName && email && street && city && state && zipcode && country && phone;
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    if (!validateDeliveryDetails()) {
      toast.error("Please fill in all delivery details.");
      return;
    }

    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }

    try {
      let response;
      if (paymentMethod === 'online') {
        response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
          const { session_url } = response.data;
          window.location.replace(session_url);
        } else {
          toast.error("Error placing order.");
        }
      } else {
        // Handle COD
        response = await axios.post(url + "/api/order/place", { ...orderData, paymentMethod: 'cod' }, { headers: { token } });
        if (response.data.success) {
          toast.success("Order placed successfully with Cash on Delivery.");
        } else {
          toast.error("Error placing order.");
        }
      }

      setData({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while placing the order.");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token]);

  return (
    <div className='place'>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First name' type='text' />
            <input name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder='Last name' type='text' />
          </div>
          <input name='email' type="email" onChange={onChangeHandler} value={data.email} placeholder='Email address' />
          <input name='street' type="text" onChange={onChangeHandler} value={data.street} placeholder='Street' />
          <div className="multi-fields">
            <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
            <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
          </div>
          <input name='phone' onChange={onChangeHandler} value={data.phone} type="tel" placeholder='Phone' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                {getTotalCartAmount() === 0 ? <p>${0}</p> : <p>${2}</p>}
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Tax</p>
                <p>${(getTotalCartAmount() * 0.1).toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${(getTotalCartAmount() + 2 + parseFloat((getTotalCartAmount() * 0.1).toFixed(2))).toFixed(2)}</b>
              </div>
            </div>
            <div className="payment-methods">
              <button type='submit' className={`payment-btn ${paymentMethod === 'online' ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange('online')}>Proceed to Pay Online</button>
              <button type='submit' className={`payment-btn ${paymentMethod === 'cod' ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange('cod')}>Proceed to Pay with COD</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
