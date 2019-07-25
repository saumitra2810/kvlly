import React, { useContext } from 'react'

import ShopContext from './shopcontext'

const LineItem = props => {
  const context = useContext(ShopContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const variantPrice =
    line_item.variant.price.indexOf('.00') > 0
      ? line_item.variant.price.split('.00')
      : line_item.variant.price

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>
      {line_item.variant.selectedOptions.map((option, i) => {
        if (option.value !== 'Default Title') {
          return (
            <div className="option" key={i}>{`${option.name}: ${
              option.value
            }`}</div>
          )
        } else {
          return null
        }
      })}
    </>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  const handleUpdate = event => {
    context.updateLineItem(
      context.client,
      context.checkout.id,
      line_item.id,
      event.target.value
    )
  }

  return (
    <div className="item-listing">
      <div className="item-content">
        <div className="vImage">{variantImage}</div>
        <div className="vContent">
          <div>
            <a
              className="product-title"
              href={`/shop/${line_item.variant.product.handle}`}
            >
              {line_item.title}
              <span className="mobile-price"> &ndash; ${variantPrice}</span>
            </a>
            {`  `}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}
            <br />
            {selectedOptions}
          </div>
        </div>
      </div>
      <div>${variantPrice}</div>
      <div>
        <input
          type="number"
          onChange={handleUpdate}
          value={line_item.quantity}
        />
      </div>
      <div>
        $
        {
          (line_item.variant.price * line_item.quantity)
            .toFixed(2)
            .split('.00')[0]
        }
      </div>
      <div>
        <button className="remove" onClick={handleRemove}>
          x
        </button>
      </div>
    </div>
  )
}

export default LineItem
