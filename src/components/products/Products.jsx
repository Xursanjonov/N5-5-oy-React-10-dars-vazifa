import React, { memo } from 'react'
import "./Products.scss"
import ProductItem from './ProductItem'

const Products = ({ data }) => {
  let productItems = data?.map(product => (
    <ProductItem key={product.id} {...product} />
  ))
  return (
    <div className='products__wrapper'>
      {productItems}
    </div>
  )
}

export default memo(Products)