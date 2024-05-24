import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../../services/requests'
import { AddData } from '../../../redux/slices/productSlice'
import { BaseUrl } from '../../../services/api'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios'
import "./product.scss"
const Product = () => {
    const [data, setdata] = useState([]);
    function getAll() {
        axios.get("http://localhost:5000/api/products").then((res) => {
            setdata(res.data);
            console.log(res.data);
        });
    }
    useEffect(() => {
        getAll()
    }, [])


    return (
        <div className='product'>
            <Helmet>
                <title>Products</title>
            </Helmet>
            {
                data.map((elem) => {
                    return <div className='container'>
                       <div> <img src={elem.image} alt="" />
                        <p>{elem.name}</p>
                        <p>{elem.price}</p></div>
                    </div>
                })
            }
        </div>
    )
}

export default Product