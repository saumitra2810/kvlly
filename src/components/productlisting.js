import React from 'react'
import { Link } from 'gatsby'

const ProductListing = props => {
  const product = props.product
  return (
    <Link to={`/shop/${product.handle}`}>
      <img alt={product.title} src={product.images[0].originalSrc} />
      <h3>{product.title}</h3>
      <span>
        $
        {parseFloat(product.priceRange.minVariantPrice.amount)
          .toFixed(2)
          .split('.00')}
        {product.priceRange.maxVariantPrice.amount >
        product.priceRange.minVariantPrice.amount
          ? ` - $${
              parseFloat(product.priceRange.maxVariantPrice.amount)
                .toFixed(2)
                .split('.00')[0]
            }`
          : null}
      </span>
    </Link>
  )
}

export default ProductListing
