import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import {
  FaInstagram,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaEnvelope,
  FaCoffee,
} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <div className="siteHeader">
      <h1>I'm Kelly Vaughn &mdash;</h1>
      <h2>Entrepreneur, Developer, & Shopify Expert</h2>
    </div>
    <SEO title="Kelly Vaughn | Entrepeneur, Developer, Shopify Expert" />
    <div className="home-flex">
      <div className="home-content">
        <p>
          I'm a frontend developer with a human-centered educational background,
          meaning I build everything with empathy front and center. I spend my
          days helping merchants grow their stores online using Shopify.
        </p>
        <p>
          During the day (and night - let's be honest) I run{' '}
          <a target="_blank" href="https://thetaproom.com">
            The Taproom Agency
          </a>
          {'. '}I also write about{' '}
          <a href="https://dev.to/kelly" target="_blank">
            entrepreneurship
          </a>
          {' and '}
          <a target="_blank" href="https://mailchi.mp/f71b4a1fbd00/thetaproom">
            ecommerce
          </a>
          {', '}
          and I'm beginning to seek speaking opportunities on the same topics.
        </p>
        <ul className="social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/kvlly"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="mailto:kelly@thetaproom.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/taproomkelly"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/kellyvaughn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/kelly"
            >
              <FaDev />
            </a>
          </li>
          <li>
            <Link to="/buy-kelly-coffee">
              <FaCoffee />
            </Link>
          </li>
        </ul>
      </div>
      <div className="home-image">
        <Image />
      </div>
    </div>
    <div />
  </Layout>
)

export default IndexPage
