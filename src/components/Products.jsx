import React from 'react'

const Products = ({product, price}) => {
  return (
    <div>
        <h2>{product}</h2>
        <p>{price + "$"}</p>
    </div>
  )
}

export default Products