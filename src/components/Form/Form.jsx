import { React, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertProduct } from '../../store/product/productSlice';
import { getProducts } from './../../store/product/productSlice';

const Form = () => {
    const productName = useRef(null)
    const price = useRef(null)
    const description = useRef(null)
    const quantity = useRef(null)
    const countryOfManufacture = useRef(null)
    const company = useRef(null)
    const discountId = useRef(null)
    const categoryId = useRef(null)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            productName: productName.current.value,
            price: price.current.value,
            description: description.current.value,
            quantity: quantity.current.value,
            countryOfManufacture: countryOfManufacture.current.value,
            company: company.current.value,
            discountId: discountId.current.value,
            categoryId: categoryId.current.value
        }
        dispatch(insertProduct(data))
        productName.current.value = null
        price.current.value = null
        description.current.value = null
        quantity.current.value = null
        countryOfManufacture.current.value = null
        company.current.value = null
        discountId.current.value = null
        categoryId.current.value = null
    }

    return (<div style={{ marginTop: 30 }}>
        <h2>insert product</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="productName">productName</label>
                <input type="text" required placeholder='productName' ref={productName} />
            </div>
            <div>
                <label htmlFor="price">price</label>
                <input type="number" required placeholder='price' ref={price} />
            </div>
            <div>
                <label htmlFor="description">description</label>
                <input type="text" required placeholder='description' ref={description} />
            </div>
            <div>
                <label htmlFor="quantity">quantity</label>
                <input type="number" required placeholder='quantity' ref={quantity} />
            </div>
            <div>
                <label htmlFor="countryOfManufacture">countryOfManufacture</label>
                <input type="text" required placeholder='countryOfManufacture' ref={countryOfManufacture} />
            </div>
            <div>
                <label htmlFor="company">company</label>
                <input type="text" required placeholder='company' ref={company} />
            </div>
            <div>
                <label htmlFor="discountId">discountId</label>
                <input type="number" required placeholder='discountId' ref={discountId} />
            </div>
            <div>
                <label htmlFor="categoryId">categoryId</label>
                <input type="number" required placeholder='categoryId' ref={categoryId} />
            </div>
            <button type='submit'>submit</button>
        </form>

    </div>);
}

export default Form;