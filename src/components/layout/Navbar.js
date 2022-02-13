import React from 'react'

import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import brandLogo from './svgs/brand.svg'

function openMenu() {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
}
const Navbar = () => {
  const { title } = useSiteMeta()

  return (
    <nav className="navbar">
      <div className="brand-title">
        <img id="brand_logo" src={brandLogo} alt="Pritu Dev" />
      </div>

      <button style={{ border: 'none', outline: 'none' }} onClick={openMenu}>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </button>

      <div className="navbar-links">
        <ul>
          <li>
            <AnchorLink className="" to="/">
              🏠 Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="" to="/#projects">
              🚀 Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="" to="https://blog.pritudev.me">
              📔 Blog
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
