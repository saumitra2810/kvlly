import { Link } from 'gatsby'
import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaEnvelope,
  FaCoffee,
  FaBeer,
} from 'react-icons/fa'

const Footer = () => (
  <div>
    <div
      className="footer"
      style={{
        background: '#8A2387', // eslint-disable-next-line
        background:
          '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)', // eslint-disable-next-line
        background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)',
        padding: '0.5em 30px',
      }}
    >
      <div
        className="footer-links"
        style={{
          maxWidth: '960px',
          textAlign: 'right',
          margin: '0 auto',
        }}
      >
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
            <a href="mailto:kelly@thetaproom.com">
              <FaEnvelope />
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thetaproom.com"
            >
              <FaBeer />
            </a>
          </li>
          <li>
            <Link to="/buy-kelly-coffee">
              <FaCoffee />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
