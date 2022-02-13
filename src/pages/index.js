import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.js'
import Showcase from '../components/layout/Showcase.js'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Footer from '../components/layout/Footer.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import firebase from './svgs/firebase.svg'
import git from './svgs/git.svg'
import github from './svgs/github.svg'
import html from './svgs/html.svg'
import js from './svgs/js.svg'
import node from './svgs/node.svg'
import vsc from './svgs/vsc.svg'
import css from './svgs/css.svg'
import python from './svgs/python.svg'
import Projects from '../components/layout/Projects'
import '../theme/partials/_works.css'
import '../theme/partials/tooltip.css'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Preet Suthar</title>
        <meta
          name="og:description"
          content="Welcome to my Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome"
        />
        <meta
          name="description"
          content="Welcome to my Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer, preet, preet suthar, Preet Suthar"
        />
        <meta name="author" content="Preet Suthar" />
        <meta property="og:title" content="PreetSuthar" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2501084062179551"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Showcase />
      <h2>🎒 My Backpack</h2>
      <br />
      <section className="basic-grid">
        <abbr id="tooltip" title="Firebase">
          <div className="img">
            <div id="tooltip">
              <img alt="Firebase" src={firebase} />
              <span id="tooltiptext">Firebase</span>
            </div>
          </div>
        </abbr>

        <abbr id="tooltip" title="Git">
          <div className="img">
            <div id="tooltip">
              <img alt="Git" src={git} />
            </div>
            <span id="tooltiptext">Git</span>
          </div>
        </abbr>
        <abbr id="tooltip" title="Github">
          <div className="img">
            <div id="tooltip">
              <img alt="Github" src={github} />
            </div>
          </div>
          <span id="tooltiptext">Github</span>
        </abbr>
        <abbr id="tooltip" title="HTML">
          <div className="img">
            <div id="tooltip">
              <img alt="HTML" src={html} />
            </div>
          </div>
          <span id="tooltiptext">HTML</span>
        </abbr>
        <abbr id="tooltip" title="CSS">
          <div className="img">
            <div id="tooltip">
              <img alt="CSS" src={css} />
            </div>
          </div>
          <span id="tooltiptext">CSS</span>
        </abbr>
        <abbr id="tooltip" title="JS">
          <div className="img">
            <div id="tooltip">
              <img alt="Javascript" src={js} />
            </div>
          </div>
          <span id="tooltiptext">Javascript</span>
        </abbr>

        <abbr id="tooltip" title="Node JS">
          <div className="img">
            <div id="tooltip">
              <img alt="Node Js" src={node} />
            </div>
          </div>
          <span id="tooltiptext">Node JS</span>
        </abbr>

        <abbr id="tooltip" title="Visual Studio Code">
          <div className="img">
            <div id="tooltip">
              <img alt="Visual Studio Code" src={vsc} />
            </div>
          </div>
          <span id="tooltiptext">VS Code</span>
        </abbr>
        <abbr id="tooltip" title="python">
          <div className="img">
            <div id="tooltip">
              <img alt="Python" src={python} />
            </div>
          </div>
          <span id="tooltiptext">Python</span>
        </abbr>
      </section>
      <br />
      <br />
      <p style={{ textAlign: 'center' }}>
        <em>
          This is not a full list of my skills. I'm also open to learn more
          frontend skills!
        </em>
      </p>

      <div id="projects">
        <br />
        <h2
          className="projects-h2"
          style={{
            fontWeight: '600',
          }}
        >
          🚀 Projects
        </h2>

        <Projects></Projects>
      </div>

      <div className="container">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8364169684965295"
          crossorigin="anonymous"
        ></script>
      </div>
      <br />
      <br />
      <div
        id="contact"
        // style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <h2>🤙 Contact</h2>
        <h3
          style={{
            textAlign: 'center',
            // paddingTop: '1rem',
            // paddingBottom: '1rem',
          }}
        >
          Would you like to work with me? Awesome!
        </h3>
        <div style={{ textAlign: 'center' }}>
          <Link to="https://twitter.com/preetsuthar27" target="_blank">
            <button className="indigo-btn">Let's Talk</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  )
}
