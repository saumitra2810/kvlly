import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'

const Speaking = props => (
  <>
    <SEO
      title="Speaking Engagements"
      image="https://kvlly.com/images/speaking.jpg"
    />
    <div className="siteHeader">
      <h1>Speaking Engagements &mdash;</h1>
      <h2>Past & Upcoming</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content">
        <h3>Upcoming:</h3>
        <ul className="disc">
          <li>
            <b>September 2019:</b>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rechargepayments.com/chargex-summit/"
            >
              ChargeX Summit
            </a>{' '}
            / Santa Monica, CA
          </li>
          <li>
            <b>October 2019:</b>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://connect.tech/"
            >
              Connect.Tech
            </a>{' '}
            / Atlanta, GA
          </li>
        </ul>
        <h3>Past:</h3>
        <ul className="disc">
          <li>
            <b>June 2019:</b>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theboutiquehub.com/summit-2019/"
            >
              The Boutique Summit
            </a>{' '}
            / Atlanta, GA
          </li>
          <li>
            <b>April 2019:</b>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.georgiasbdc.org/dmc2019/"
            >
              UGA SBDC Digital Marketing Conference
            </a>{' '}
            / Kennesaw, GA
          </li>
          <li>
            <b>September 2018:</b>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pursuit.shopify.com/"
            >
              Shopify Pursuit
            </a>{' '}
            / NY, NY
          </li>
        </ul>
        <h3>Interested in having me speak at your event?</h3>
        <p>
          <a href="mailto:kelly@thetaproom.com?subject=Speak at my event!">
            Let's chat about it.
          </a>
        </p>
      </div>
      <div className="inner-image">
        <Img fluid={props.data.speakingKelly.childImageSharp.fluid} />
      </div>
    </div>
  </>
)

export default Speaking

export const pageQuery = graphql`
  query {
    speakingKelly: file(relativePath: { eq: "speaking.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
