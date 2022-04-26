import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from './../../store/product/productSlice';
import ProductContainerDetails from './../ProductContainerDetails/ProductContainerDetails';

const ProductContainer = () => {
    const { isLoading, products, productInfo } = useSelector(state => state.products)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleDelete = (_id) => {
        dispatch(deleteProduct(_id))
    }

    const handleSelect = (_id) => {
        const selectedProduct = products.find((item) => item._id === _id)
        setSelectedProduct((prev) => { return { ...prev, ...selectedProduct } })
    }

    const productList = products && products.map((product) => (<div key={product._id} style={{ marginTop: 30 }}>
        <div>{product.productName}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <div>{product.quantity}</div>
        <div>{product.countryOfManufacture}</div>
        <div>{product.company}</div>
        <div>{product.discountId}</div>
        <div>{product.categoryId}</div>
        <button onClick={() => handleDelete(product._id)}>delete</button>
        <button onClick={() => handleSelect(product._id)} >select</button>
    </div>))

    return (<>
        product container
        <div style={{ marginTop: 30 }}>
            {
                isLoading ? 'loading...' : <div>{productList}</div>
            }
        </div>
        <div>
            <ProductContainerDetails info={selectedProduct} />
        </div>
    </>);
}

export default ProductContainer;