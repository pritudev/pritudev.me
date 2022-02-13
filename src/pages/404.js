import React from 'react'
import Layout from '../components/layout/Layout.js'
import '../theme/main.css'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found Found • 404</title>
        <title>Preet Sithar</title>
        <meta name="og:description" content="Error 404 Page Not Found." />
        <meta name="description" content="Error 404 Page Not Found." />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Error 404 Page Not Found!" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <h2 className="h2" id="error__heading" style={{ textAlign: 'center' }}>
        Page Not Found
      </h2>
      <h5 id="error__body">
        Sorry 😔—we couldn’t find what you<br></br>were looking for.
      </h5>
      <h5 id="error__link">
        <Link to="/">Go back to home page</Link>
      </h5>
    </Layout>
  )
}

export default notFound
