import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProductForm from '../components/productform'

import '../components/shop.scss'

const Product = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Layout>
      <SEO
        title={`${product.title} | Kelly Vaughn`}
        image={product.images[0].originalSrc}
        description={product.descriptionHtml}
      />
      <ProductForm product={product} />
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      variants {
        shopifyId
        id
        title
        price
        availableForSale
        shopifyId
        image {
          originalSrc
        }
        selectedOptions {
          name
          value
        }
      }
      options {
        id
        name
        values
      }
      images {
        originalSrc
      }
    }
  }
`
