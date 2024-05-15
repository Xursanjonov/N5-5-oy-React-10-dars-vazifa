import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailsProduct = () => {
    // const {pathname} = useLocation()
    // console.log(pathname);
    const [data,setData] = useState(null)
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        axios
            .get(`/products/${id}`)
            .then(res => setData(res.data))
            .catch(err => setError(err.response.data))
            .finally(res =>setLoading(false))
    }, [])
    if(loading) {
        return <h2>Loading...</h2> 
    }
    return error ? 
        (
            <>
                <div>
                    
                    <h2>{error?.message}</h2>
                </div>
            </>
        ) : (
            <div>
                <h2>Details Product</h2>
                <img src={data?.images[0]} alt="" />
            </div>
        )
}

export default DetailsProduct