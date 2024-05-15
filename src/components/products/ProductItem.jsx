import React, {memo} from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  return (
    <div className='product__card'>
      <Link to={`/product/${props.id}`}>
        <img src={props.images[0]} alt={props.title} />
      </Link>
      <h3 title={props.title}>{props.title}</h3>
    </div>
  )
}

export default memo(ProductItem)