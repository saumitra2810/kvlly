import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'

import ShopContext from './shopcontext'
import OptionSelector from './optionselector'

const ProductForm = props => {
  const product = props.product
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const hasVariants = product.variants.length > 1
  const context = useContext(ShopContext)
  let productVariant =
    context.client.product.helpers.variantForOptions(product, variant) ||
    variant

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  // useEffect(() => console.log({ variant }), [variant])

  // Do variants exist? If so, create the selectors
  const variantSelectors = hasVariants
    ? product.options.map(option => {
        return (
          <OptionSelector
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        )
      })
    : null

  // Add item to cart
  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
  }

  // useEffect(() => {
  //   let defaultOptionValues = {}
  //   product.options.forEach(selector => {
  //     defaultOptionValues[selector.name] = selector.values[0]
  //     console.log(selector.name)
  //     console.log(selector.values[0])
  //   })
  //   setVariant(defaultOptionValues)
  // }, [])

  return (
    <>
      <div className="siteHeader">
        <Link to="/shop">&larr; Back to products</Link>
      </div>
      <div className="product-listing inner-flex">
        <div className="inner-image">
          <img alt={product.title} src={productVariant.image.originalSrc} />
        </div>
        <div className="inner-content summary">
          <h1>{product.title}</h1>
          <h2>${productVariant.price}</h2>
          <div className="productForm">
            {variantSelectors}
            <div className="quantity-section">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                value={quantity}
                min="1"
                id="Quantity"
                onChange={handleQuantityChange}
              />
            </div>
            <button type="submit" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
    </>
  )
}

export default ProductForm
