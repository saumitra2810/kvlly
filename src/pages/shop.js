import React, { useState, useEffect, useContext } from 'react'
import ShopContext from '../components/shopcontext'
import ProductListing from '../components/productlisting'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import '../components/shop.scss'

const Shop = props => {
  const context = useContext(ShopContext)
  const [type, setType] = useState(context.filteredType)

  useEffect(() => {
    context.updateFilterType(type)
  }, type)

  const productTypes = []
  const types = []
  types.push(
    <option value="all" key="-1">
      All
    </option>
  )
  props.data.products.edges.map((t, i) => {
    let type = t.node.productType
    if (!productTypes.includes(type) && type.length > 0) {
      productTypes.push(type)
      types.push(
        <option key={i} value={type}>
          {type}s
        </option>
      )
    }
    return null
  })
  productTypes.sort()

  return (
    <>
      <SEO
        title="Shop | Kelly Vaughn"
        image="https://kvlly.com/images/donut-time.jpg"
        description="Developer merch you didn't know you needed"
      />
      <div className="siteHeader products-intro">
        <h1>Shop &mdash;</h1>
        <h2>Developer merch you didn't know you needed</h2>
        <p>
          I started this shop as a way to learn headless commerce, but it has
          evolved into its own side business and I love it! Whether you shop on
          this store or the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shop.kvlly.com"
          >
            Shopify storefront
          </a>
          , all orders will be fulfilled.
        </p>
      </div>
      <div className="products-filter">
        <label htmlFor="productFilter">Filter by product type: </label>
        <select
          id="productFilter"
          defaultValue={context.filteredType}
          onChange={e => setType(e.target.value)}
        >
          {types}
        </select>
      </div>
      <div className="products-holder">
        {context.filteredType === 'all'
          ? props.data.products.edges.map((p, i) => {
              let product = p.node
              return (
                <div className="product" key={i}>
                  <ProductListing product={product} />
                </div>
              )
            })
          : props.data.products.edges
              .filter(p => p.node.productType.includes(context.filteredType))
              .map((p, i) => {
                let product = p.node
                return (
                  <div className="product" key={i}>
                    <ProductListing product={product} />
                  </div>
                )
              })}
      </div>
    </>
  )
}

export default Shop

export const pageQuery = graphql`
  query {
    products: allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          productType
          vendor
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          variants {
            id
            title
            price
          }
          images {
            originalSrc
          }
        }
      }
    }
  }
`
