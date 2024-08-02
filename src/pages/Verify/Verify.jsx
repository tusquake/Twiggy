import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Verify.css';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);


    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, })
        if (response.data.success) {
            navigate("myorders");
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [])

    console.log(success, orderId)

    return (
        <div className='verify'>
            <div className="spinner">
                Hello
            </div>

        </div>
    )
}

export default Verify
