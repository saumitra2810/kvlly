import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const Now = props => (
  <Layout>
    <SEO
      title="What I'm Doing Now"
      image="https://kvlly.com/images/nowkelly.jpg"
    />
    <div className="siteHeader">
      <h1>What I'm Doing Now &mdash;</h1>
      <h2>July 13, 2019</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content summary">
        <ul className="now">
          <li>
            <b>Location: </b> Atlanta, GA
          </li>
          <li>
            <b>Travel: </b> Recently visited Toronto for{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unite.shopify.com"
            >
              Shopify Unite
            </a>
            . Up next is Scotland for a wedding.
          </li>
          <li>
            <b>Reading: </b> Everything. Presently reading a lot of thrillers
            and easy summer romance reads. Whatever I can get through quickly.
          </li>
          <li>
            <b>Celebrating:</b> My business becoming Atlanta's first Shopify
            Plus Solutions Partner, making{' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:6554512789229101056"
            >
              dreams come true
            </a>{' '}
            for Tesla owners
          </li>
          <li>
            <b>Listening to: </b>{' '}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=n2EjeMx4bSg"
            >
              I Prevail
            </a>
          </li>
          <li>
            <b>Watching: </b> Stargate SG1
          </li>
          <li>
            <b>Learning about: </b> Headless commerce
          </li>
          <li>
            <b>Working on: </b>
            <ul class="disc">
              <li>
                Providing advisory services to Shopify Plus merchants through my
                agency,{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://thetaproom.com"
                >
                  The Taproom
                </a>
              </li>
              <li>
                Co-hosting the{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ladybug.dev"
                >
                  Ladybug Podcast
                </a>{' '}
                with 3 awesome women in tech
              </li>
              <li>
                Lining up speaking engagements and podcast appearances to
                discuss Shopify-related topics
              </li>
            </ul>
          </li>
        </ul>
        <p class="nownownow">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nownownow.com/about"
          >
            What is this page?
          </a>
        </p>
      </div>
      <div className="inner-image">
        <a
          target="_blank"
          href="https://twitter.com/kvlly/status/1140740694354649089"
        >
          <Img fluid={props.data.speakingKelly.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  </Layout>
)

export default Now

export const pageQuery = graphql`
  query {
    speakingKelly: file(relativePath: { eq: "nowkelly.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
