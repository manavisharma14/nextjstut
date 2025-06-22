import React from 'react'
import Link from 'next/link'

const ProductList = () => {
  const productId = 200;
  return (
    <div>
      <Link href="/">Home</Link>
        <h1>Product List</h1>

        <h2>
          <Link href="/products/product1">Product 1</Link>
        </h2>
        <h2>Product 2</h2>
        <h2>Product 3</h2>

        <h2>
          <Link href={`/products/${productId}`} >product {productId} </Link> </h2>


    </div>
  )
}

export default ProductList;