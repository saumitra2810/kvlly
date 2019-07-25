import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'
import Checkout from '../components/checkout'

const BuyKellyCoffee = props => (
  <>
    <SEO
      title="Buy Kelly Coffee"
      image="https://kvlly.com/images/coffee-kelly.jpg"
    />
    <div className="siteHeader">
      <h1>Buy Kelly Coffee &mdash;</h1>
      <h2>I'm really just testing the Stripe ecommerce plugin</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content">
        <h3>Why I love coffee:</h3>
        <ul className="disc">
          <li>It tastes good</li>
          <li>It energizes me</li>
          <li>It feels like the appropriate start to my day</li>
          <li>
            I get to create a test page on my personal site entirely dedicated
            to coffee
          </li>
          <li>
            I probably need another cup of coffee because I forgot about the cup
            of coffee right in front of me and now it's cold
          </li>
        </ul>
        <Checkout />
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
