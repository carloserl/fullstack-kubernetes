import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = process.env.REACT_APP_BE

const ShowProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        console.log("path", endpoint)
        const response = await axios.get(`${endpoint}/api/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/api/products/${id}`)
        getAllProducts()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td> {product.title} </td>
                            <td> {product.description} </td>
                            <td> {product.price} </td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts