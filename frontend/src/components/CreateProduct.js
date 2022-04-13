import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = process.env.REACT_APP_BE + '/api/products'

const CreateProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { description: description, price: price, title: title })
        navigate('/')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CreateProduct