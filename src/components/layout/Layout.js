import React, { Fragment } from 'react'
import '../../theme/main.css'
import Navbar from './Navbar'
import PostState from '../../context/Posts/PostState'
import Helmet from 'react-helmet'

import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = (props) => {
  return (
    <Fragment>
      <Helmet>{/* <Link rel="noopener" rel="icon" href={favicon} /> */}</Helmet>
      <PostState>
        <Fragment>
          <Navbar />
          <PageTransition>{props.children}</PageTransition>
        </Fragment>
      </PostState>

      <script src="https://kit.fontawesome.com/375268b44c.js"></script>
    </Fragment>
  )
}

export default Layout
