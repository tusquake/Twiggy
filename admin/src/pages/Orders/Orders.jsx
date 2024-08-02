import axios from "axios";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import './Orders.css';

const Orders = () => {

    const url = "http://localhost:4000";
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get(url + "/api/order/list");
            if (response.data.success) {
                setOrders(response.data.data);
                console.log(response.data.data);
            } else {
                toast.error("Error: " + response.data.message || "Unknown error");
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
            toast.error("Network error");
        }
    }

    const statusHandler = async (event, orderId) => {
        const response = axios.post(url + "/api/order/status", {
            orderId,
            status: event.target.value
        })
        if ((await response).data.success) {
            await fetchAllOrders();
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, [])

    return (
        <div className="order add">
            <h3>Order Page</h3>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <img src={assets.parcel_icon} alt="Parcel Icon" />
                        <div>
                            <p className="order-item-food">
                                {order.items && order.items.length > 0 ? order.items.map((item, index) => (
                                    <span key={index}>
                                        {item.name} x {item.quantity}
                                        {index < order.items.length - 1 && ", "}
                                    </span>
                                )) : "No items"}
                            </p>
                            <p className="order-item-name">
                                <b>{order.address.firstName} {order.address.lastName}</b>
                            </p>
                            <div className="order-item-address">
                                <p>
                                    {order.address.street + ", " + order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
                                </p>
                            </div>
                            <p className="order-item-phone">
                                {order.address.phone}
                            </p>
                        </div>
                        <p>Items: {order.items.length}</p>
                        <p>${order.amount}</p>
                        <select onChange={() => statusHandler(event, order._id)} value={order.status}>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Out For Delivery">Out For Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders;
