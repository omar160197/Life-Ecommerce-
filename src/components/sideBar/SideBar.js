import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from './../../store/category/categorySlice';
import { getProducts, setFilteredProduct,setFiltredPrice } from '../../store/product/productSlice';
import "./sideBar.css"
function SideBar({ array, filtred }) {
    // console.log(array)
    const dispatch = useDispatch();

    const {products,isLoading } = useSelector(((state) => state.products))
    const { categories } = useSelector(((state) => state.categories))
    const  filtredPriceProducts  = useSelector(((state) => state.products.filteredPriceProducts))


    const categoryRadioButtons = <select className="form-select" onChange={async (e) => handleCategoryFilter(e)}>
         <option  selected disabled >Select Category</option>
      {categories && categories.map((category) => (
          <option key={category._id} value={category.name} >{category.name}</option>
    ))}
    </select>



    const priceButtons = <div className="my-2 row side">
      
        <div><input type="radio" className='col-md-2  '     name="price" value={10}   onChange = {async (e) => handlePriceFilter(e)} /> <span className='col-md-10'>  0    &lt; 10  LE </span></div>
        <div><input type="radio" className='col-md-2 my-2 ' name="price" value={100}  onChange = {async (e) => handlePriceFilter(e)} /> <span className='col-md-10'>  10  &lt; 100  LE </span></div>
        <div><input type="radio" className='col-md-2 my-2 ' name="price" value={1000} onChange = {async (e) => handlePriceFilter(e)} /> <span className='col-md-10'> 100  &lt; 1000  LE </span></div>
        <div><input type="radio" className='col-md-2 my-2 ' name="price" value={2000} onChange = {async (e) => handlePriceFilter(e)} /> <span className='col-md-10'> 1000 &lt; 2000  LE </span></div>
    </div>


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    // filter with category
    const handleCategoryFilter = async (e) => {
        if (e.target.value === "tools") {
            let tools = array.filter((ele) => ele.category.name === e.target.value)
            dispatch(setFilteredProduct(tools))

        } else if (e.target.value === "others") {
            dispatch(setFilteredProduct(array.filter((ele) => ele.category.name === e.target.value)))
        }
        else if (e.target.value === "units") {
            dispatch(setFilteredProduct(array.filter((ele) => ele.category.name === e.target.value)))
        }
        else if (e.target.value === "medicines") {
            dispatch(setFilteredProduct(array.filter((ele) => ele.category.name === e.target.value)))
        } else {
            dispatch(setFilteredProduct(array))
        }

    }
    const handlePriceFilter = async (e) => {
        if (+(e.target.value) === 10) {
            if (filtred.length > 0 && filtredPriceProducts.length>0)  {
                dispatch(setFiltredPrice(filtred.filter((ele) => { return 0 < ele.price && ele.price <= 10 })))
            }else {
                dispatch(setFilteredProduct(array.filter((ele) => { return 0 < ele.price && ele.price <= 10 })))
            }

        } else if (+(e.target.value) === 100) {
            if (filtred.length > 0 && filtredPriceProducts.length>0) {
                dispatch(setFiltredPrice(filtred.filter((ele) => { return 10 < ele.price && ele.price <= 100 })))
                console.log(filtred)

            } else {
                dispatch(setFilteredProduct(array.filter((ele) => { return 10 < ele.price && ele.price <= 100 })))
            }
        }
        else if (+(e.target.value) === 1000) {
            if (filtred.length > 0 && filtredPriceProducts.length>0) {
                console.log(filtred)
                dispatch(setFiltredPrice(filtred.filter((ele) => { return 100 < ele.price && ele.price <= 1000 })))
            } else {
                dispatch(setFilteredProduct(array.filter((ele) => { return 100 < ele.price && ele.price <= 1000 })))
            }
        }
        else if (+(e.target.value) === 2000) {
            if (filtred.length > 0 && filtredPriceProducts.length>0) {
                dispatch(setFiltredPrice(filtred.filter((ele) => { return 1000 < ele.price && ele.price <= 2000 })))
            } else {
                dispatch(setFilteredProduct(array.filter((ele) => { return 1000 < ele.price && ele.price <= 2000 })))
            }
        } else {
            dispatch(setFilteredProduct(array))
        }

    }
    return (
        <>
            {isLoading ? "" : <div className='row justify-content-center'>
                <h5 className="text-dark text-center">Filter By Category</h5>
                <div className='mt-2 col-11'>{categoryRadioButtons}</div>

                <h5 className="text-dark text-center mt-3">Filter By Price</h5>
                <div className='mt-2 col-11'>{priceButtons}</div>
            </div>
            }
        </>
    )
}

export default SideBar