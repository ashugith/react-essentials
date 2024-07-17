import React, { useContext } from 'react'
import useParams from 'react'
import ShopContext from './Shop'

const Product = () => {
  const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === productId)
  return (
    <div>
      
    </div>
  )
}

export default Product
