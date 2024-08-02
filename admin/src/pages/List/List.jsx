import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './List.css';

const List = () => {
    const url = "http://localhost:4000";
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error fetching list!");
            }
        } catch (error) {
            toast.error("Error fetching list!");
        }
    };

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        }
        else {
            toast.error("Error!");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Name</b>
                    <b>Image</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item) => (
                    <div key={item._id} className="list-table-format">
                        <img src={`${url}/images/` + item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
