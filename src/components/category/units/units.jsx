import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../../store/product/productSlice'
import CategoryCard from '../../CategoryCard/CategoryCard'
import OfferCard from '../../offersCard/offersCard'
import { getTotals } from '../../../store/cart/cartSlice'
import ListSkelton from './../../Skeleton/Skeleton'
import Skeleton from '@mui/material/Skeleton'

const Units = () => {
  const { products, isLoading } = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  const dispach = useDispatch()

  useEffect(() => {
    dispach(getTotals())
  }, [cart])

  useEffect(() => {
    dispach(getProducts())
  }, [dispach])

  const result = products.find(({ category }) => category.name === 'units')

  return (
    <>
      {isLoading ? (
        <Skeleton height={400} style={{ marginTop: '-6%' }} />
      ) : (
        <CategoryCard image={result.category.image} />
      )}

      <Container>
        <Grid container spacing={5}>
          {isLoading ? (
            <>
              <ListSkelton listsToRender={4} />
            </>
          ) : (
            <>
              {products &&
                products
                  .filter((product) => {
                    return product.category.name === 'units'
                  })
                  .map((product, index) => {
                    return (
                      <Grid item lg={3} md={4} sm={6} xs={6} key={index} my={1}>
                        <OfferCard
                          product={product}
                          productId={product._id}
                          productName={product.productName}
                          maxNumOfProducts={product.quantity}
                          numOfProductsThatReduced={2}
                          priceBefore={product.price}
                          image={product.image}
                          discountPersentatge={product.discount.discountAmount}
                          ratingValue={product.rating}
                          description={product.description}
                        />
                      </Grid>
                    )
                  })}
            </>
          )}
        </Grid>
      </Container>
    </>
  )
}
export default Units
