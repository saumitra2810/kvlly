import React, { useState, useEffect, useContext } from 'react'
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
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant

  const handleOptionChange = event => {
    const { target } = event
    console.log(target.value)
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  useEffect(() => console.log({ variant }), [variant])

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

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

          <div className="shipping-info">
            <h4>About this product</h4>
            <p>
              All products are printed on demand. That means it'll take a little
              while longer to get your product ready to ship, but it also means
              each item goes through a QA check to ensure you're getting a
              quality product. Production generally takes between 2-5 business
              days. It's worth the wait - promise!
            </p>
            <h4>How much does shipping cost?</h4>
            <p>
              Here are the shipping rates for everyone. Orders most likely ship
              to your country. Unless you live in North Korea. In that case,
              sorry. I don't call the shots.
            </p>
            <table>
              <tr>
                <td>Order Value</td>
                <td>Cost</td>
              </tr>
              <tr>
                <td>Up to $10</td>
                <td>$2 USD</td>
              </tr>
              <tr>
                <td>$10 to $50</td>
                <td>$6 USD</td>
              </tr>
              <tr>
                <td>Over $50</td>
                <td>Free</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductForm
