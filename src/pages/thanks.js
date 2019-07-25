import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'

const BuyKellyCoffee = props => (
  <>
    <SEO title="Buy Kelly Coffee" />
    <div className="siteHeader">
      <h1>Thanks &mdash;</h1>
      <h2>You're the best &hearts;</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content">
        <p>
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
      <div className="inner-image">
        <Img fluid={props.data.coffeeKelly.childImageSharp.fluid} />
      </div>
    </div>
  </>
)

export default BuyKellyCoffee

export const pageQuery = graphql`
  query {
    coffeeKelly: file(relativePath: { eq: "coffee-kelly.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
