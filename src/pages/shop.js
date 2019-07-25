import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'

import '../components/shop.scss'

const Shop = props => (
  <>
    <SEO
      title="Shop | Kelly Vaughn"
      image="https://kvlly.com/images/donut-time.jpg"
      description="Example Shopify/Gatsby headless commerce setup"
    />
    <div className="siteHeader">
      <h1>Shop &mdash;</h1>
      <h2>Example Shopify/Gatsby headless commerce setup</h2>
      <p>
        This is a real store! If you place an order you will receive what you
        ordered.
      </p>
    </div>
    <div className="products-holder">
      {props.data.allShopifyProduct.edges.map((p, i) => {
        let product = p.node
        return (
          <div className="product" key={i}>
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
          </div>
        )
      })}
    </div>
  </>
)

export default Shop

export const pageQuery = graphql`
  query {
    allShopifyProduct {
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
