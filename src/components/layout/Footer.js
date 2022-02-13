import React from 'react'
import github from './svgs/github.svg'
import discord from './svgs/discord.svg'
import twitter from './svgs/twitter.svg'
import youtbe from './svgs/youtube.svg'
import donate from './svgs/donate.svg'
import arrow from './svgs/arrow.svg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Footer = () => {
  return (
    <div id="footer">
      <br />

      <AnchorLink to="#">
        <img className="go_up_arrow" src={arrow} alt="Go to top" />
      </AnchorLink>

      <div id="icons">
        <abbr title="pritudev | Github">
          <a
            rel="noopener"
            href="https://github.com/pritudev"
            target="_blank"
            id="github-icon"
          >
            <img src={github} alt="Github" />
          </a>
        </abbr>
        <abbr title="Pritudev | YouTube">
          <a
            rel="noopener"
            href="https://www.youtube.com/channel/UCfj77ojuXOix9YhmqwsLViQ"
            target="_blank"
            id="youtube-icon"
          >
            <img src={youtbe} alt="Youtube" />
          </a>
        </abbr>
        <abbr title="Pritudev | Discord">
          <a
            rel="noopener"
            href="https://discord.io/prituhq"
            target="_blank"
            id="discord-icon"
          >
            <img src={discord} alt="Discord" />
          </a>
        </abbr>
        <abbr title="@preetsuthar27 | Twitter">
          <a
            rel="noopener"
            href="https://twitter.com/preetsuthar27"
            target="_blank"
            id="twitter-icon"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </abbr>
        <abbr title="Become a Patreon">
          <a
            rel="noopener"
            style={{ marginBottom: '-5px' }}
            href="https://www.patreon.com/preetsuthar"
            target="_blank"
            id="donation"
          >
            <img
              style={{ marginBottom: '-1px' }}
              src={donate}
              alt="Become A Patreon"
            />
          </a>
        </abbr>
      </div>
      <hr id="hr-footer" />
      <h4 className="footer_text">Copyright &copy; Preet Suthar</h4>
    </div>
  )
}

export default Footer
